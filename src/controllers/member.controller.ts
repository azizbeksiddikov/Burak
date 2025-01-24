import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { Member, MemberInput, LoginInput } from "../libs/types/member";
import Errors from "../libs/Errors";
import AuthService from "../models/Auth.service";

const memberController: T = {},
  memberService = new MemberService(),
  authService = new AuthService();

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");

    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input),
      token = await authService.createToken(result);
    console.log(token);
    res.json({ member: result });
  } catch (err) {
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");

    const input: LoginInput = req.body,
      result: Member = await memberService.login(input),
      token = await authService.createToken(result);

    res.json({ member: result });
  } catch (err) {
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default memberController;
