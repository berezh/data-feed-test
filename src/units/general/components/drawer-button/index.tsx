import React, { useState } from 'react';
import './index.scss';
import { Icon, Switch } from '@blueprintjs/core';

import { useInputCheckboxCallback } from '../hooks';

export interface ControlOptions {
    // header -------------------------
    fixedHeader: boolean;
    defaultHeader: boolean;
    // footer -------------------------
    fixedFooter: boolean;
    defaultFooter: boolean;
    // sider -------------------------
    showLeftSidebar: boolean;
    showRightSidebar: boolean;
    fixedSidebar: boolean;
}

interface Props extends ControlOptions {
    onChange: (props: ControlOptions) => void;
}

export const DrawerButton: React.FC<Props> = (props) => {
    const {
        fixedHeader,
        defaultHeader,
        fixedFooter,
        defaultFooter,
        onChange,
        showLeftSidebar,
        showRightSidebar,
        fixedSidebar,
    } = props;
    const [open, setOpen] = useState(true);

    const handleFixedHeader = useInputCheckboxCallback(
        (checked) => {
            onChange({ ...props, fixedHeader: checked });
        },
        [props]
    );

    const handleDefaultHeader = useInputCheckboxCallback(
        (checked) => {
            onChange({ ...props, defaultHeader: checked });
        },
        [props]
    );

    const handleFixedFooter = useInputCheckboxCallback(
        (checked) => {
            onChange({ ...props, fixedFooter: checked });
        },
        [props]
    );

    const handleDefaultFooter = useInputCheckboxCallback(
        (checked) => {
            onChange({ ...props, defaultFooter: checked });
        },
        [props]
    );

    const handleLeftSidebar = useInputCheckboxCallback(
        (checked) => {
            onChange({ ...props, showLeftSidebar: checked });
        },
        [props]
    );

    const handleRightSidebar = useInputCheckboxCallback(
        (checked) => {
            onChange({ ...props, showRightSidebar: checked });
        },
        [props]
    );

    const handleFixedSidebar = useInputCheckboxCallback(
        (checked) => {
            onChange({ ...props, fixedSidebar: checked });
        },
        [props]
    );

    return (
        <div className="drawer-panel">
            <div className="drawer-panel__toggle" onClick={() => setOpen(!open)}>
                <Icon icon="cog" iconSize={24} />
            </div>
            {open ? (
                <div className="drawer-panel__content">
                    {/* <div>
                    Content Width
                    <NumericInput
                        value={contentWidth}
                        placeholder="Enter a number..."
                        onValueChange={this.onContentWidthChange}
                    />
                </div> */}
                    <Switch checked={fixedHeader} label="Fixed Header" onChange={handleFixedHeader} />
                    <Switch checked={defaultHeader} label="Default Header" onChange={handleDefaultHeader} />
                    <hr />
                    <Switch checked={fixedFooter} label="Fixed Footer" onChange={handleFixedFooter} />
                    <Switch checked={defaultFooter} label="Default Footer" onChange={handleDefaultFooter} />
                    <hr />
                    <Switch checked={showLeftSidebar} label="Left Sidebar" onChange={handleLeftSidebar} />
                    <Switch checked={showRightSidebar} label="Right Sidebar" onChange={handleRightSidebar} />
                    <Switch checked={fixedSidebar} label="Fixed Sidebar" onChange={handleFixedSidebar} />
                </div>
            ) : null}
        </div>
    );
};
