import React from "react";
import { Accordion } from "../components/accordion";
import workimg1 from "../images/logos/Datacom.png";
import workimg2 from "../images/logos/Bmx.png";
import workimg3 from "../images/logos/Skycity.png";
import workimg4 from "../images/logos/Bannsang.png";

export const Work: React.FC = () => {
    return (
        <div className="work-container">
            <div className="work-main">
                <h1 className="work-main__heading">Work experience</h1>
                <h2 className="work-main__sub">My work experience</h2>
            </div>
            <div className="work-section">
                <Accordion
                    title={workimg1}
                    content={
                        <div>
                            bennfaasdfasdfsdafasdfasdfsafasdfsadfsadfsadf
                            asdfasdfasdfasdfasd
                            sdafsadfasdfasdfasdfasdfasdfasdfsadfsafasdfadsf
                        </div>
                    }
                />
                <Accordion title={workimg2} content={<div>asdfasdf</div>} />
            </div>
            <div className="work-section">
                <Accordion title={workimg3} content={<div>asdfasdfasdf</div>} />
                <Accordion title={workimg4} content={<div>asdfsadfsadf</div>} />
            </div>
        </div>
    );
};
