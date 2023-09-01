import classNames from "classnames";
import { PagePath } from "page-path";
import React, { useMemo } from "react";
import { useRouter } from "next/router";

import s from "./index.module.scss";
import { AppLink } from "src/lib/link";
import { AppUrls } from "src/lib/urls";

export const Sidebar: React.FC = () => {
  const { pathname } = useRouter();

  const options = useMemo<
    {
      path: PagePath;
      title: string;
    }[]
  >(() => {
    return [
      {
        path: AppUrls.default,
        title: "Default",
      },
      {
        path: AppUrls.paging,
        title: "Paging",
      },
      {
        path: AppUrls.noInitialLoad,
        title: "No Initial Load",
      },
      {
        path: AppUrls.noFilter,
        title: "No Filter",
      },
      // {
      //     path: AppUrls.autoload,
      //     title: 'Autoload'
      // },
      // {
      //     path: AppUrls.autoloadFixed,
      //     title: 'Autoload Fixed'
      // },
    ];
  }, []);

  return (
    <div className={s.sidebar}>
      {options.map((x, i) => {
        return (
          <AppLink
            key={i}
            href={x.path.build()}
            className={classNames(s.sidebar__link, {
              [s["sidebar__link--active"]]: x.path.isActive(pathname),
            })}
          >
            {x.title}
          </AppLink>
        );
      })}
    </div>
  );
};
