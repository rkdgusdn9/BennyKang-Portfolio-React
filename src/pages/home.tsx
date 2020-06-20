import React from "react";
import { CarouSel } from "../features/carousel";
import { Intro } from "../features/Intro";
import { Work } from "../features/work";
import { Skills } from "../features/skills";
import { About } from "../features/about";

export const HomePage: React.FC = () => {
    return (
        <div className="home-container">
            <Intro />

            <About />

            <Skills />

            <Work />

            <CarouSel />
        </div>
    );
};
