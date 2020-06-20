import React from "react";
import abtlogo from "../images/Einstein.png";
import benny from "../images/BennyKang.png";
import { Button } from "../components/button";

export const About: React.FC = () => {
    return (
        <div id="about" className="about-container">
            <div className="about-main">
                <div className="about-main__heading">About me</div>
                <div className="about-main__sub">Who am I</div>
            </div>
            <div className="about-section">
                <img className="about-image" src={abtlogo} />
                <div className="about-section2">
                    <img className="about-benny" src={benny} />
                    <div className="about-content">
                        A software developer inspired by the iron man.
                        <br /> I aim to broaden my experience and skills in
                        software development and Information security, in an
                        organization that values their people and encourages
                        personal development.
                    </div>
                    <Button />
                </div>
            </div>
        </div>
    );
};
