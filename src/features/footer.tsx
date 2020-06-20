import React from "react";
import Logo1 from "../images/Facebook.png";
import Logo2 from "../images/LinkedIn.png";
import Logo3 from "../images/Instagram.png";
import Logo4 from "../images/Github.png";

export const Footer: React.FC = () => {
    return (
        <footer className="footer-container">
            <div className="footer-head">Social Media</div>
            <div className="footer-social">
                <a
                    href="https://www.facebook.com/Nickie.kang.50"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className="footer-img" src={Logo1} alt="Facebook" />
                </a>
                <a
                    href="https://www.linkedin.com/in/bennykang/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className="footer-img" src={Logo2} alt="LinkedIn" />
                </a>
                <a
                    href="https://www.instagram.com/rkdgusdn9/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className="footer-img" src={Logo3} alt="Instagram" />
                </a>
                <a
                    href="https://github.com/rkdgusdn9/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className="footer-img" src={Logo4} alt="Github" />
                </a>
            </div>
            <div className="footer-final">
                <a href="/" className="footer-name">
                    BEN KANG
                </a>
                <div>©Copyright 2020. All right reserved.</div>
                <div>Powered by Benny Kang</div>
            </div>
        </footer>
    );
};
