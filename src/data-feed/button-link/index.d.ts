import React from "react";
import "./index.scss";
interface Props {
    children: React.ReactNode;
    disabled?: boolean;
    onClick: () => void;
}
declare const ButtonLink: React.FC<Props>;
export default ButtonLink;
