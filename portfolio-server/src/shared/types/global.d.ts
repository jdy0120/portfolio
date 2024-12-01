declare module "express-serve-static-core" {
  interface ParamsDictionary {
    id: number;
    [key: string]: string;
  }
}
