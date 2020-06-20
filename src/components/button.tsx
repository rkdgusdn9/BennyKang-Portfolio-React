import React from "react";
import cv from "../images/cv.png";
import resume from "../assets/files/Resume.pdf";

export const Button: React.FC = () => {
    return (
        <a href={resume} target="_blank">
            <img className="cv-img" src={cv} />
        </a>
    );
};
