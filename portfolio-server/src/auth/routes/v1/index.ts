//@index('./*.ts', f => f.path !== `./index` ? `export * from '${f.path}';` : "")
export * from "./auth.route";
export * from "./token.route";
