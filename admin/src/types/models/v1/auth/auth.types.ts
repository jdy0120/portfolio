type LoginRequest = {
  email: string;
  password: string;
};

type LoginResponse = {
  accesstoken: string;
  refreshtoken: string;
};

export type { LoginRequest, LoginResponse };
