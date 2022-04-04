import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.js";
import Main from "./components/mainSection/Main.js";
import Footer from "./components/Footer/Footer";
// import YouTubeApi from "./components/YouTubeApi/YouTubeApiGroup";
import Iphone from "./components/IphoneRoute/Iphone.js";
import F404 from "./components/IphoneRoute/F404.js";
import { BrowserRouter } from "react-router-dom";
import YouTubeApi from "./components/YouTubeApi/YouTubeApi.js";
export default function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/iphones" exact component={Iphone} />
                    <Route path="/" component={F404} />
                </Switch>
                <YouTubeApi />
                <Footer />
            </Router>
        </div>
    );
}

//  <BrowserRouter>
//      <Header />
//      <Routes>
//          <Route index element={<Main />} />
//          <Route path="/iphones" element={<Iphone />} />
//          <Route path="*" element={<F404 />} />
//      </Routes>
//      <Footer />
//  </BrowserRouter>;

// {
//     /* <YouTubeApi /> */
// }
