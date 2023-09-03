import { PagePath } from "page-path";

import { PageQuery } from "./interfaces";

export const AppUrls = {
  default: new PagePath("/"),
  paging: new PagePath<PageQuery>("/paging", { query: ["page"] }),
  noInitialLoad: new PagePath("/no-initial-load"),
  noFilter: new PagePath("/no-filter"),
  autoload: new PagePath("/autoload"),
  autoloadFixed: new PagePath("/autoload-fixed"),
};
