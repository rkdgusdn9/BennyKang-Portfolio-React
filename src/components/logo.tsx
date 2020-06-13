import React from "react";

interface Props {
    imgsrc: string;
}

export const Logo: React.FC<Props> = (props) => {
    const { imgsrc } = props;

    return <img className="logo-img" src={imgsrc} />;
};
