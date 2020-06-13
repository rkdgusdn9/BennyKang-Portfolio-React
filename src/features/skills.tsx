import React from "react";
import { Logo } from "../components/logo";
import rts from "../images/logos/RTS.png";
import azure from "../images/logos/Azure.png";
import xamarin from "../images/logos/Xamarin.png";
import css from "../images/logos/CSS.png";
import iot from "../images/logos/IoT.png";
import arduino from "../images/logos/Arduino.png";

export const Skills: React.FC = () => {
    return (
        <div className="skills">
            <div className="skills__h1">Key Strengths</div>
            <div className="skills__h2">My Strengths</div>
            <div className="skills-container">
                <div className="skills-devide">
                    <div className="skills-section">
                        <Logo imgsrc={rts} />
                        <Logo imgsrc={azure} />
                        <Logo imgsrc={xamarin} />
                    </div>
                    <div className="skills-section">
                        <Logo imgsrc={css} />
                        <Logo imgsrc={iot} />
                        <Logo imgsrc={arduino} />
                    </div>
                </div>
            </div>
        </div>
    );
};
