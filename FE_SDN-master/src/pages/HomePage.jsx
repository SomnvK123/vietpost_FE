import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/header/header";
import Carousel from "../components/slider/carousel";
import About from "../components/home_about/about";
import Info from "../components/home_info/info";
import Lookup from "../components/home_po_lookup/lookup";
import Express from "../components/home_express/express";
import Price from "../components/home_price/price";
import Delivery from "../components/home_delivery/delivery";
import Process from "../components/home-send-process/process";
import Footerr from "../components/footer/footer";
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

