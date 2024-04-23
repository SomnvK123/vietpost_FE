import React, { useEffect, useRef } from 'react';
// import './Carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import { Container, Row, Col, Image } from 'react-bootstrap';


const CustomPrevArrow = (props) => (
    <div
        className="slider-button slider-button--prev slick-arrow slick-prev"
        onClick={props.onClick}
        style={{ display: 'block' }}
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.66 64.66">
            <circle cx="32.33" cy="32.33" r="32.21" opacity="0.5" fill="#fff" stroke="#231f20" strokeWidth="0.25" strokeMiterlimit="10"></circle>
            <path d="M38.64 30.98l-9.91-9.91c-.75-.75-1.96-.75-2.7 0-.75.75-.75 1.96 0 2.7l8.56 8.56-8.56 8.56c-.75.75-.75 1.96 0 2.7a1.909 1.909 0 002.7 0l9.91-9.91c.74-.74.74-1.95 0-2.7z" fill="#e9ecec"></path>
        </svg>
    </div>
);

const CustomNextArrow = (props) => (
    <div
        className="slider-button slider-button--next slick-arrow slick-next"
        onClick={props.onClick}
        style={{ display: 'block' }}
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.66 64.66">
            <circle cx="32.33" cy="32.33" r="32.21" opacity="0.5" fill="#fff" stroke="#231f20" strokeWidth="0.25" strokeMiterlimit="10"></circle>
            <path d="M38.64 30.98l-9.91-9.91c-.75-.75-1.96-.75-2.7 0-.75.75-.75 1.96 0 2.7l8.56 8.56-8.56 8.56c-.75.75-.75 1.96 0 2.7a1.909 1.909 0 002.7 0l9.91-9.91c.74-.74.74-1.95 0-2.7z" fill="#e9ecec"></path>
        </svg>
    </div>
);

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };


    return (
        <div className="home-top-banner-section">
            <Container fluid>
                <Row>
                    <Col className="px-0 position-relative">
                        <div className="slider-area">
                            <Slider {...settings}>
                                <div>
                                    <Image className="top-banner--slider-img w-100" src="https://static.vietpost.com.au/static-vietpost/public/banner/photo/2022/2/23/2c525b94-d9a9-4da5-ab60-ad66e18d5ec2.jpg" alt="63" />
                                </div>
                                <div>
                                    <Image className="top-banner--slider-img w-100" src="https://static.vietpost.com.au/static-vietpost/public/banner/photo/2021/12/20/5cc38295-6173-4d59-9935-078f76f5f9e2.jpg" alt="giao nhan" />
                                </div>
                                <div>
                                    <Image className="top-banner--slider-img w-100" src="https://static.vietpost.com.au/static-vietpost/public/banner/photo/2022/2/23/511dadee-10a2-4e36-ad0b-b3458328bbab.jpg" alt="64 tinh" />
                                </div>
                                <div>
                                    <Image className="top-banner--slider-img w-100" src="https://static.vietpost.com.au/static-vietpost/public/banner/photo/2021/12/20/3a736b1e-895d-4905-874c-9e4bf97a7500.jpg" alt="kho hang" />
                                </div>
                            </Slider>
                        </div>
                        <div className="overlay-area">
                            <div className="tracking mt-4 mb-4 d-none d-lg-block">
                                <form className="d-flex">
                                    <div className="wrapped-input">
                                        <input placeholder="Nhập số vận đơn để tra cứu" value="" className="px-4 py-3 form-control wrapped-input--input" />
                                    </div>
                                    <button type="submit" className="btn btn-secondary text-bold text-uppercase px-4 py-3 clearfix flex-grow-0 flex-shrink-0">TRA CỨU ĐƠN VẬN</button>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="d-lg-none">
                    <Col className="bg-gray-200 py-2">
                        <div className="tracking">
                            <form className="d-flex">
                                <div className="wrapped-input">
                                    <input placeholder="Nhập số vận đơn để tra cứu" value="" className="form-control wrapped-input--input" />
                                </div>
                                <button type="submit" className="btn btn-secondary text-bold text-uppercase clearfix flex-grow-0 flex-shrink-0">TRA CỨU ĐƠN VẬN</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default Carousel;
