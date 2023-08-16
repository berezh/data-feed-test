import React from "react";
import { Layout } from "react-html-layout";

import { Sidebar } from "../sidebar";
import { Header } from "../header";
import { Footer } from "../footer";

import "./index.scss";

interface Props {
  children: React.ReactNode;
}

export const MasterPage: React.FC<Props> = ({ children }) => {
  return (
    <Layout
      header={<Header />}
      fixedHeader={true}
      headerStyle={{
        flex: 1,
      }}
      fixedFooter={false}
      // leftSidebar={<Sidebar />}
      // leftSidebarStyle={{ backgroundColor: '#444' }}
      // fixedSidebar={true}
      footer={<Footer />}
    >
      <div className="layout">
        <div className="layout__sidebar">
          <Sidebar />
        </div>
        <div className="layout__content">
          <div>{children}</div>
        </div>
      </div>
    </Layout>
  );
};
