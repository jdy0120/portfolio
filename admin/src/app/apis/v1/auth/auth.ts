import { Post } from "../../../../lib/axios/request";
import {
  LoginRequest,
  LoginResponse,
} from "../../../../types/models/v1/auth/auth.types";

export const login = async (data: LoginRequest) => {
  try {
    const response = await Post<LoginResponse>("/auth/login", data);

    return response.data;
  } catch (error) {
    throw error;
  }
};
