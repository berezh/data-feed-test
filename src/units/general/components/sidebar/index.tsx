import React from "react";
import { Link } from "react-router-dom";
import { AppUrls } from "../../../../lib/urls";

import "./index.scss";

export const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <Link to={AppUrls.default.build()}>Simple Feed</Link>
            <Link to={AppUrls.paging.build()}>Paging</Link>
            <Link to={AppUrls.noInitialLoad.build()}>No Initial Load</Link>
            <Link to={AppUrls.noFilter.build()}>No Filter</Link>
            <Link to={AppUrls.autoload.build()}>Autoload</Link>
            <Link to={AppUrls.autoloadFixed.build()}>Autoload Fixed</Link>
        </div>
    );
};
