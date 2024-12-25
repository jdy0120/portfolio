import { useQuery } from "@tanstack/react-query";
import { login } from "./auth";
import { LoginRequest } from "../../../../types/models/v1/auth/auth.types";

const useQueryLogin = (data: LoginRequest) => {
  return useQuery({
    queryKey: ["login"],
    queryFn: () => login(data),
  });
};

export { useQueryLogin };
