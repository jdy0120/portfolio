//@index('./*.ts', f => (f.path !== `./index` && f.path !== `./global.d`) ? `export * from '${f.path}';` : "")
export * from "./domain";

export * from "./request";
export * from "./response";
