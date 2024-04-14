import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import './About.css';

const Info = () => {
    return (
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
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Info;
