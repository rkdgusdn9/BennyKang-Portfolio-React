import React from "react";

export const Contact: React.FC = () => {
    return (
        <div id="contact" className="contact-container">
            <div className="contact-main">
                <div className="contact-main__heading">Contact Form</div>
                <div className="contact-main__sub">Enquires</div>
            </div>
            <form action="https://formspree.io/mpzyljpg" method="POST">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Your name.." />

                <label>Your Email</label>
                <input type="text" name="_replyto" placeholder="Your Email.." />

                <label>Message</label>
                <textarea
                    className="text-area"
                    name="message"
                    placeholder="Write something.."
                ></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};
