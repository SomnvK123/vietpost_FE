import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Carousel from "../components/slider/Carousel";
import About from "../components/home_about/About";
import Info from "../components/home_info/Info";
import Lookup from "../components/home_po_lookup/Lookup";
import Express from "../components/home_express/Express";
import Price from "../components/home_price/Price";
import Delivery from "../components/home_delivery/Delivery";
import Process from "../components/home-send-process/Process";
import Footerr from "../components/footer/Footer";
import '../css/Test.css';

const HomePage = () => {
    return (
        <>
            <body class="remove-outline">
                <div id="__next">
                    <Header />
                    <main>
                        <div className="home-page">
                            <Carousel />
                            <About />
                            <Info />
                            <Lookup />
                            <Express />
                            <Price />
                            <Delivery />
                            <Process />
                        </div>
                        <div class="Toastify__toast-backdrop"></div>
                        <div class="Toastify"></div>
                        <div class="Toastify" id="notification-toast"></div>
                    </main >
                    <Footerr />
                </div >
            </body >
        </>
    );
};

export default HomePage;

