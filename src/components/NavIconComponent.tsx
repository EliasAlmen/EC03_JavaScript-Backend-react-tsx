import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
    link: string;
    icon: string;
    quantity?: number;
    hideOnMobile?: boolean;
}

const NavIconComponent: React.FC<Props> = ({
    link,
    icon,
    quantity,
    hideOnMobile,
}) => {
    return (
        <NavLink
            title="link"
            className={`nav-icon ${hideOnMobile ? "hidden" : ""} `}
            to={link}
            end
        >
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">
                {quantity}
            </span>
            <i className={icon}></i>
        </NavLink>
    );
};

export default NavIconComponent;
