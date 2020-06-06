import React, { useState } from "react";

export const NavBar: React.FC = () => {
    const [setActive, setActiveState] = useState("");

    function toggleHamburger() {
        setActiveState(setActive === "" ? "active" : "");
    }

    return <nav>test</nav>;
};
