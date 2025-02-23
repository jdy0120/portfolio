import {
  useMutation,
  UseMutationOptions,
} from "@tanstack/react-query";
import { login } from "./auth";
import {
  LoginRequest,
  LoginResponse,
} from "../../../types/models/v1/auth/auth.types";

const useLogin = (
  options?: UseMutationOptions<LoginResponse, unknown, LoginRequest>
) => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: LoginRequest) => {
      const response = await login(data);
      return response.data;
    },
    ...options,
  });
};

export { useLogin };
