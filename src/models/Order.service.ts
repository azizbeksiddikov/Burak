import orderModel from "../schema/Order.model";
import orderItemModel from "../schema/OrderItem.model";
import { Member } from "../libs/types/member";
import { Order, OrderInquiry, OrderItemInput } from "../libs/types/order";
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

      await this.recordOrderItem(newOrder._id, input);

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

  public async getMyOrders(
    member: Member,
    inquiry: OrderInquiry
  ): Promise<Order[]> {
    const memberId = shapeIntoMongooseObjectId(member._id),
      matches = { memberId: memberId, orderStatus: inquiry.orderStatus },
      result = await this.orderModel
        .aggregate([
          { $match: matches },
          { $sort: { updatedAt: -1 } },
          { $skip: (inquiry.page - 1) * inquiry.limit },
          { $limit: inquiry.limit },
          {
            $lookup: {
              from: "orderItems",
              localField: "_id",
              foreignField: "orderId",
              as: "orderItems",
            },
          },
          {
            $lookup: {
              from: "products",
              localField: "orderItems.productId",
              foreignField: "_id",
              as: "productData",
            },
          },
        ])
        .exec();

    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  }
}

export default OrderService;
