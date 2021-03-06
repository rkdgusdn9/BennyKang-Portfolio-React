import React from "react";
import Iron from "../images/helloworld.gif";

export const Intro: React.FC = () => {
    return (
        <div className="intro-container">
            <img className="intro-img" src={Iron} />
            <div className="head-container">
                <div className="head-container__h1">BEN KANG</div>
                <div className="head-container__h2">Software Developer</div>
            </div>
        </div>
    );
};
