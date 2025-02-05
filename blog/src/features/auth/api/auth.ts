import { Post } from "../../../shared/libs/axios/request";

export const login = async (data: LoginRequest) => {
  try {
    const response = await Post<LoginResponse>("/auth/login", data);

    return response.data;
  } catch (error) {
    throw error;
  }
};
