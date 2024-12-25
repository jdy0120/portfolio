export type CommonResponse<T> = {
  error: string;
  message: string;
  debug: string;
  data: T;
  timestamp: number;
};
