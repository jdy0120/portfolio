class AxiosCustomError extends Error {
  statusCode: number;
  response?: any;

  constructor(message: string, statusCode: number, response?: any) {
    super(message);
    this.name = "AxiosCustomError";
    this.statusCode = statusCode;
    this.response = response;
  }
}

export default AxiosCustomError;
