import orderModel from "../schema/Order.model";
import orderItemModel from "../schema/OrderItem.model";
import { Member } from "../libs/types/member";
import { Order, OrderItemInput } from "../libs/types/order";
import { shapeIntoMongooseObjectId } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { OrderStatus } from "../libs/enums/order.enum";
import { ObjectId } from "mongoose";

class OrderService {
  private readonly orderModel;
  private readonly orderItemModel;

  constructor() {
    this.orderModel = orderModel;
    this.orderItemModel = orderItemModel;
  }

  public async createOrder(
    member: Member,
    input: OrderItemInput[]
  ): Promise<Order> {
    console.log("Typeof member._id:", typeof member._id);
    const memberId = shapeIntoMongooseObjectId(member._id),
      amount = input.reduce((acc: number, ele: OrderItemInput) => {
        return acc + ele.itemPrice * ele.itemQuantity;
      }, 0),
      delivery = amount < 100 ? 5 : 0;

    try {
      const newOrder: Order = (await this.orderModel.create({
        orderTotal: amount + delivery,
        orderDelivery: delivery,
        memberId: memberId,
      })) as unknown as Order;

      const orderId = newOrder._id;
      console.log("orderId", orderId);
      await this.recordOrderItem(orderId, input);

      return newOrder;
    } catch (err) {
      console.log("Error, createOrder", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  private async recordOrderItem(
    orderId: ObjectId,
    input: OrderItemInput[]
  ): Promise<void> {
    const promisedList = input.map(async (item: OrderItemInput) => {
      item.orderId = orderId;
      item.productId = shapeIntoMongooseObjectId(item.productId);
      await this.orderItemModel.create(item);
      return "INSERTED";
    });

    const orderItemState = await Promise.all(promisedList);
    console.log("orderItemState", orderItemState);
  }
}

export default OrderService;
