/// <reference types="vite/client"/>
declare module "island:site-data" {
  import type { UserConfig } from "@/shared/types";
  const siteData: UserConfig;
  export default siteData;
}
declare module "island:routes" {
  import type { Route } from "@/node/plugin-routes";

  export const routes: Array<Route>;
  export default {};
}

declare module "*.module.less" {
  const classes: { [key: string]: string };
  export default classes;
}
