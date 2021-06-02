import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <Link to="/">Simple Feed</Link>
            <Link to="/paging">Paging</Link>
            <Link to="/no-initial-load">No Initial Load</Link>
            <Link to="/no-filter">No Filter</Link>
            <Link to="/autoload">Autoload</Link>
            <Link to="/autoload-fixed">Autoload Fixed</Link>
        </div>
    );
};
