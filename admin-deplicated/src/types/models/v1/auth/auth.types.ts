type LoginRequest = {
  userId: string;
  password: string;
};

type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export type { LoginRequest, LoginResponse };
