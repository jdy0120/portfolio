import { Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { User, UserCreationAttributes } from "../../shared/models";
import { seq } from "../../shared/configs/sequelize.config";

const signUp = async (
  req: Request<unknown, unknown, UserCreationAttributes, unknown>
) => {
  const { userId, password } = req.body;

  const transaction = await seq.transaction();
  try {
    const user = await User.write({
      userId,
      password,
      wrongPasswordCount: 0,
    });
    await transaction.commit();
    return user;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

const signIn = async (req: Request) => {
  const { userId, password } = req.body;

  const userInfo = await User.readOneByUserId(userId);
  // const ip = req.ip;
};

export default {
  signUp,
  signIn,
};
