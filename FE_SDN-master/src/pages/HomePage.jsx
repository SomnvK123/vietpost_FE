import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Carousel from "../components/slider/Carousel";
import Footerr from "../components/footer/Footer";
const HomePage = () => {
    return (
        <>
            <Header />
            <Carousel />
            <div class="container">
                
                <div class="row text-center khoi5">
                    <div class="col-xl-12">
                        <a
                            href="/allProducts"
                            title=""
                            style={{
                                textDecoration: "none",
                                fontSize: "30px",
                                color: "black",
                                fontWeight: "bold",
                            }}
                        >
                            Iphone
                        </a>
                    </div>
                </div>

                <div class="row text-center khoi5">
                    <div class="col-xl-12">
                        <a
                            href="/allProducts"
                            title=""
                            style={{
                                textDecoration: "none",
                                fontSize: "30px",
                                color: "black",
                                fontWeight: "bold",
                            }}
                        >
                            Ipad
                        </a>
                    </div>
                </div>

                <div class="row text-center khoi5">
                    <div class="col-xl-12">
                        <a
                            href="/allProducts"
                            title=""
                            style={{
                                textDecoration: "none",
                                fontSize: "30px",
                                color: "black",
                                fontWeight: "bold",
                            }}
                        >
                            Mac
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12 khoi4">
                        <div class="anh4">
                            <img src="img/7.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footerr />
        </>
    );
};

export default HomePage;
