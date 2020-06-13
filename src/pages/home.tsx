import React from "react";
import { CarouSel } from "../features/carousel";
import { Intro } from "../features/Intro";
import { Work } from "../features/work";

export const HomePage: React.FC = () => {
    return (
        <div className="home-container">
            <Intro />

            <Work />

            <CarouSel />
        </div>
    );
};
