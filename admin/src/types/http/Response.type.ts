export type CommonResponse<T> = {
  error: string;
  message: string;
  debug: string;
  data: T;
  count?: number;
  timestamp?: number;
};
