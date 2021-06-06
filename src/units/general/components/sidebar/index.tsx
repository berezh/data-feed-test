import classNames from 'classnames';
import { PagePath } from 'page-path';
import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AppUrls } from '../../../../lib/urls';

import './index.scss';


export const Sidebar: React.FC = () => {

    const { pathname } = useLocation();

    const options = useMemo<{
        path: PagePath,
        title: string
    }[]>(() => {
        return [
            {
                path: AppUrls.default,
                title: 'Simple Feed'
            },
            {
                path: AppUrls.paging,
                title: 'Paging'
            },
            {
                path: AppUrls.noInitialLoad,
                title: 'No Initial Load'
            },
            {
                path: AppUrls.noFilter,
                title: 'No Filter'
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
        <div className="sidebar">
            {options.map((x, i) => {
                return <Link key={i} to={x.path.build()} className={classNames('sidebar__link', {
                    ['sidebar__link--active']: x.path.isActive(pathname)
                })}>{x.title}</Link>
            })}
        </div >
    );
};
