import React from "react";
import "./assets/styles/index.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { NavBar } from "./features/navBar";

function App() {
    return (
        <>
            <NavBar />
            <BrowserRouter>
                <Route path="/" component={HomePage} exact />
            </BrowserRouter>
        </>
    );
}

export default App;
