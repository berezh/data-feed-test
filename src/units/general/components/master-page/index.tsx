import React from "react";
import { Layout } from "react-html-layout";

import { Sidebar } from "../sidebar";
import { Header } from "../header";
import { Footer } from "../footer";
import s from "./index.module.scss";

interface Props {
  children: React.ReactNode;
}

export const MasterPage: React.FC<Props> = ({ children }) => {
  return (
    <Layout
      header={<Header />}
      fixedHeader={true}
      fixedFooter={false}
      // leftSidebar={<Sidebar />}
      // leftSidebarStyle={{ backgroundColor: '#444' }}
      // fixedSidebar={true}
      footer={<Footer />}
    >
      <div className={s.layout}>
        <div className={s.layout__sidebar}>
          <Sidebar />
        </div>
        <div className={s.layout__content}>
          <div>{children}</div>
        </div>
      </div>
    </Layout>
  );
};
