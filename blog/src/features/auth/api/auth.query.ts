import { useQuery } from "@tanstack/react-query";
import { login } from "./auth";

const useQueryLogin = (data: LoginRequest) => {
  return useQuery({
    queryKey: ["login"],
    queryFn: () => login(data),
  });
};

export { useQueryLogin };
