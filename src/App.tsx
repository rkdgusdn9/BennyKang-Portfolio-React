import React from "react";
import "./assets/styles/index.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { NavBar } from "./features/navBar";
import { Footer } from "./features/footer";

function App() {
    return (
        <>
            <div className="page-wrap">
                <NavBar />
                <BrowserRouter>
                    <Route path="/" component={HomePage} exact />
                </BrowserRouter>
                <Footer />
            </div>
        </>
    );
}

export default App;
