class MemberService {
<<<<<<< HEAD
  constructor() {}
=======
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModel;
  }

  public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec();
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

    try {
      const result = await this.memberModel.create(input);
      result.memberPassword = "";

      return result as unknown as Member;
      /*
export interface Member {
  _id: ObjectId;
  memberType: MemberType;
  memberStatus: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints: number;
  createdAt: Date;
  updatedAt: Date;
}

actual:
{
  memberType: 'RESTAURANT',
  memberStatus: 'ACTIVE',
  memberNick: 'Buraka1',
  memberPhone: '82107231233',
  memberPassword: '',
  memberPoints: 0,
  _id: new ObjectId("675e7fcdf170f8349e94b415"),
  createdAt: 2024-12-15T07:05:49.728Z,
  updatedAt: 2024-12-15T07:05:49.728Z,
  __v: 0
}
*/
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
>>>>>>> 89c8c95 (feat: I-TASK is added)
}

export default MemberService;
