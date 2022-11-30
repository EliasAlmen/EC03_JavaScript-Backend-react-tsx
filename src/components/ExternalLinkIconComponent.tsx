import React from "react";

interface Props {
    link: string;
    icon: string;
}

const ExternalLinkIconComponent: React.FC<Props> = ({ link, icon }) => {
    return (
        <a href={link} title="link" target="blank">
            <i className={"fa-brands " + icon}></i>
        </a>
    );
};

export default ExternalLinkIconComponent;
