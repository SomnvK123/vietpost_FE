import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Carousel from "../components/slider/Carousel";
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
                            <div class="home-about-us-section bg-white">
                                <div class="anchor" id="about-us"></div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1
                                                class="text-bold text-primary font-size-x-large font-size-lg-xx-large text-xl-center py-4">
                                                VỀ CHÚNG TÔI</h1>
                                            <div class="html-content ql-editor html-content--block mb-2">
                                                <p>
                                                    <em>Tại Vietpost, sứ mệnh của chúng tôi là cung cấp dịch vụ vận chuyển xuất sắc
                                                        cho
                                                        khách hàng và chúng tôi tự hào về sự chuyên nghiệp, tận tâm của mình.</em>
                                                </p>
                                                <p>
                                                    <em>Phạm vi dịch vụ của chúng tôi bao gồm nhưng không giới hạn các dịch vụ
                                                        chuyển
                                                        phát hàng hóa quốc tế, chuyển tiếp hàng hóa, vận chuyển hàng thương mại điện
                                                        tử.... Đặc biệt, chúng tôi được ra đời nhằm đáp ứng nhu cầu vận chuyển hàng
                                                        hóa
                                                        từ Úc về Việt nam cho các kiều bào, du học sinh đang sinh sống tại Úc cũng
                                                        như
                                                        những khách hàng đang ở tại Việt Nam và có nhu cầu sử dụng, vận chuyển hàng
                                                        hóa
                                                        từ Úc về đến Việt Nam</em>
                                                </p>
                                                <p>
                                                    <em>Phương châm của Vietpost là lấy chữ TÍN trong kinh doanh là yếu tố đặc biệt
                                                        quan
                                                        trọng góp phần thành công của chúng tôi và để luôn đảm bảo quyền lợi của
                                                        khách
                                                        hàng.</em>
                                                </p>
                                            </div>
                                            <div>
                                                <img src="https://vietpost.com.au/_next/static/about-us-6c979effed40f219cfdaca0f85deb9ac.svg"
                                                    alt="" class="d-none d-sm-block w-max-100 mt-5 mb-3" />
                                                <img src="https://vietpost.com.au/_next/static/about-us-m-0481ffc90ae51d35e2ee96b703948c75.svg"
                                                    alt="" class="d-sm-none w-max-100 mt-5 mb-3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="home-info-section bg-primary text-white">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12 col-lg-6">
                                            <h1 class="text-bold text-center text-lg-left font-size-x-large my-5">Vận chuyển hàng
                                                hóa về
                                                Việt Nam</h1>
                                            <div>
                                                <a class="btn btn-secondary text-bold p-3 mb-4 mb-lg-5 mr-2 mr-sm-4" href="#">ĐÂNG
                                                    KÝ
                                                    VẬN CHUYỂN NGAY</a>
                                                <a class="btn btn-secondary text-bold p-3 mb-4 mb-lg-5" href="#">BẢNG GIÁ DỊCH
                                                    VỤ</a>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-6">
                                            <p class="text-bold font-size-large mb-3 mt-lg-5">Nhanh chóng, uy tín và chuyên nghiệp
                                                là
                                                những gì mà VIETPOST đang thực hiện đối với khách hàng. Liên hệ chúng tôi để được
                                                phục
                                                vụ:</p>
                                            <p class="font-size-x-large">Hotline:
                                                0451818366</p>
                                            <p class="font-size-x-large mb-5">
                                                Email:
                                                online@vietpost.com.au
                                                <a href="#" class="__cf_email__"
                                    data-cfemail="721d1c1e1b1c1732041b1706021d01065c111d1f5c1307">online@vietpost.com.au</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

