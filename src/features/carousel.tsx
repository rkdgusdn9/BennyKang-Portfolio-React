import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../images/Github.png";

export const CarouSel: React.FC = () => {
    return (
        <Carousel autoPlay infiniteLoop className="carousel-slider">
            <div>
                <img src={logo} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={logo} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={logo} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};
