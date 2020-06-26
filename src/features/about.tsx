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
                {/* <img className="about-image" src={abtlogo} /> */}
                <div className="about-section2">
                    <img className="about-benny" src={benny} />
                    <div className="about-content">
                        I took a new challenge in IT after several years of
                        working in the hospitality industry. I enjoy being
                        challenged and engaging with projects that require me to
                        work outside my comfort and knowledge set, as continuing
                        to learn new languages and development techniques are
                        important to me and the success of the organization.
                    </div>
                    <Button />
                </div>
            </div>
        </div>
    );
};
