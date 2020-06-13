import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../images/carous/Data.png";
import data1 from "../images/carous/Data1.png";
import msa from "../images/carous/Msa.png";
import bmx from "../images/carous/Bmx.png";
import bmx1 from "../images/carous/Bmx1.png";
import bmx2 from "../images/carous/Bmx2.png";
import bmx3 from "../images/carous/Bmx3.png";
import bmx4 from "../images/carous/Bmx4.png";
import grad from "../images/carous/Grad.png";
import team from "../images/carous/Team.png";
import gym from "../images/carous/Gym.png";
import sky from "../images/carous/Sky.png";
import sky1 from "../images/carous/Sky1.png";
import bann from "../images/carous/Bann.png";
import nonu from "../images/carous/Nonu.png";
import babies from "../images/carous/Babies.png";
import kid from "../images/carous/Kid.png";

export const CarouSel: React.FC = () => {
    return (
        <Carousel autoPlay infiniteLoop className="carousel-slider">
            <div>
                <img src={data} />
                <p className="legend">Datacom Christmas</p>
            </div>
            <div>
                <img src={data1} />
                <p className="legend">Visit the client</p>
            </div>
            <div>
                <img src={msa} />
                <p className="legend">MSA Launch</p>
            </div>
            <div>
                <img src={bmx} />
                <p className="legend">Internship</p>
            </div>
            <div>
                <img src={bmx1} />
                <p className="legend">Showcase</p>
            </div>
            <div>
                <img src={bmx2} />
                <p className="legend">Xamarin</p>
            </div>
            <div>
                <img src={bmx3} />
                <p className="legend">Scrum</p>
            </div>
            <div>
                <img src={bmx4} />
                <p className="legend">Final presentation</p>
            </div>
            <div>
                <img src={grad} />
                <p className="legend">Graduation</p>
            </div>
            <div>
                <img src={team} />
                <p className="legend">Team Trello</p>
            </div>
            <div>
                <img src={gym} />
                <p className="legend">Work out</p>
            </div>
            <div>
                <img src={sky} />
                <p className="legend">I rule the table</p>
            </div>
            <div>
                <img src={sky1} />
                <p className="legend">Table game dealer</p>
            </div>
            <div>
                <img src={bann} />
                <p className="legend">General Manager</p>
            </div>
            <div>
                <img src={nonu} />
                <p className="legend">All Black Nonu</p>
            </div>
            <div>
                <img src={babies} />
                <p className="legend">My babies</p>
            </div>
            <div>
                <img src={kid} />
                <p className="legend">Kido</p>
            </div>
        </Carousel>
    );
};
