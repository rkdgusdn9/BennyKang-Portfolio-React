import React, { useState } from "react";

interface Props {
    title: string;
    content: JSX.Element;
}

export const Accordion: React.FC<Props> = (props) => {
    const { title, content } = props;
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : "");
    }

    return (
        <div className="accordion-container">
            <div className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <img className="accordion__img" src={title} />
            </div>
            <div
                style={{ maxHeight: `${setHeight}` }}
                className="accordion-content"
            >
                {content}
            </div>
        </div>
    );
};
