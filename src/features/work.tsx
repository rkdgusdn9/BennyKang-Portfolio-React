import React from "react";
import { Accordion } from "../components/accordion";
import workimg1 from "../images/logos/Datacom.png";
import workimg2 from "../images/logos/Bmx.png";
import workimg3 from "../images/logos/Skycity.png";
import workimg4 from "../images/logos/Bannsang.png";

export const Work: React.FC = () => {
    return (
        <div id="work" className="work-container">
            <div className="work-main">
                <div className="work-main__heading">Work experience</div>
                <h2 className="work-main__sub">My work experiences</h2>
            </div>
            <div className="work-section">
                <Accordion
                    title={workimg1}
                    content={
                        <div>
                            • Worked on IoT software development projects during
                            a summer internship at Datacom which predominantly
                            utilised several sensors, Arduino machine, Microsoft
                            IoT Central, C++ and Microsoft Azure Developer Tools
                            <br />• Had an experience with Kanban methodology
                        </div>
                    }
                />
                <Accordion
                    title={workimg2}
                    content={
                        <div>
                            • Worked on Xamarin mobile software development
                            project during R&amp;D internship at Business
                            Mechanix for both front-end and back-end with a
                            database
                            <br />• Had an experience with SCRUM methodology
                        </div>
                    }
                />
            </div>
            <div className="work-section">
                <Accordion
                    title={workimg3}
                    content={
                        <div>
                            • Worked as a Table Game Dealer
                            <br />
                            • Provided excellent service consistent with the
                            property's service standards and brand attributes
                            <br />• Notify supervisor/manager of any suspicious
                            or unusual activity and/or transactions in a timely
                            and responsible manner
                        </div>
                    }
                />
                <Accordion
                    title={workimg4}
                    content={
                        <div>
                            • Worked as a General Manager
                            <br />• In charge of hiring people, ordering raw
                            ingredients, serving customers and alcohol
                            licensing.
                        </div>
                    }
                />
            </div>
        </div>
    );
};
