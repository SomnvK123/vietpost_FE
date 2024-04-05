import React from 'react';
import './Carousel.css';

const Carousel = () => {
    return (
        <div class="home-top-banner-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 px-0 position-relative">
                        <div class="slider-area">
                            <div class="slick-slider slick-initialized" dir="ltr" autoplay="true"
                                data-autoplay-speed="3000">
                                <div className="slider-button slider-button--prev slick-arrow slick-prev" style={{ display: 'block' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.66 64.66">
                                        <circle cx="32.33" cy="32.33" r="32.21" opacity="0.5" fill="#fff"
                                            stroke="#231f20" stroke-width="0.25" stroke-miterlimit="10">
                                        </circle>
                                        <path
                                            d="M38.64 30.98l-9.91-9.91c-.75-.75-1.96-.75-2.7 0-.75.75-.75 1.96 0 2.7l8.56 8.56-8.56 8.56c-.75.75-.75 1.96 0 2.7a1.909 1.909 0 002.7 0l9.91-9.91c.74-.74.74-1.95 0-2.7z"
                                            fill="#e9ecec"></path>
                                    </svg>
                                </div>
                                <div class="slick-list">
                                    <div className="slick-track" style={{ width: '900%', left: '-100%' }}>
                                        <div data-index="-1" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '11.11111111111111%' }}>
                                            <div>
                                                <div>
                                                    <img class="top-banner--slider-img w-100"
                                                        src="https://static.vietpost.com.au/static-vietpost/public/banner/photo/2022/2/23/2c525b94-d9a9-4da5-ab60-ad66e18d5ec2.jpg"
                                                        alt="63" />
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="0" className="slick-slide slick-active slick-current" tabIndex="-1" aria-hidden="false" style={{ outline: 'none', width: '11.11111111111111%' }}>
                                            <div>
                                                <div>
                                                    <img class="top-banner--slider-img w-100"
                                                        src="https://static.vietpost.com.au/static-vietpost/public/banner/photo/2021/12/20/5cc38295-6173-4d59-9935-078f76f5f9e2.jpg"
                                                        alt="giao nhan" />
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="1" className="slick-slide" tabIndex="-1" aria-hidden="true" style={{ outline: 'none', width: '11.11111111111111%' }}>
                                            <div>
                                                <div>
                                                    <img class="top-banner--slider-img w-100"
                                                        src="https://static.vietpost.com.au/static-vietpost/public/banner/photo/2022/2/23/511dadee-10a2-4e36-ad0b-b3458328bbab.jpg"
                                                        alt="64 tinh" />
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="2" className="slick-slide" tabIndex="-1" aria-hidden="true" style={{ outline: 'none', width: '11.11111111111111%' }}>
                                            <div>
                                                <div>
                                                    <img class="top-banner--slider-img w-100"
                                                        src="https://static.vietpost.com.au/static-vietpost/public/banner/photo/2021/12/20/3a736b1e-895d-4905-874c-9e4bf97a7500.jpg"
                                                        alt="kho hang" />
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="3" className="slick-slide" tabIndex="-1" aria-hidden="true" style={{ outline: 'none', width: '11.11111111111111%' }}>
                                            <div>
                                                <div>
                                                    <img class="top-banner--slider-img w-100"
                                                        src="https://static.vietpost.com.au/static-vietpost/public/banner/photo/2022/2/23/2c525b94-d9a9-4da5-ab60-ad66e18d5ec2.jpg"
                                                        alt="63" />
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="4" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '11.11111111111111%' }}>
                                            <div>
                                                <div>
                                                    <img class="top-banner--slider-img w-100"
                                                        src="https://static.vietpost.com.au/static-vietpost/public/banner/photo/2021/12/20/5cc38295-6173-4d59-9935-078f76f5f9e2.jpg"
                                                        alt="giao nhan" />
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="5" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '11.11111111111111%' }}>
                                            <div>
                                                <div>
                                                    <img class="top-banner--slider-img w-100"
                                                        src="https://static.vietpost.com.au/static-vietpost/public/banner/photo/2022/2/23/511dadee-10a2-4e36-ad0b-b3458328bbab.jpg"
                                                        alt="64 tinh" />
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="6" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '11.11111111111111%' }}>
                                            <div>
                                                <div>
                                                    <img class="top-banner--slider-img w-100"
                                                        src="https://static.vietpost.com.au/static-vietpost/public/banner/photo/2021/12/20/3a736b1e-895d-4905-874c-9e4bf97a7500.jpg"
                                                        alt="kho hang" />
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="7" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '11.11111111111111%' }}>
                                            <div>
                                                <div>
                                                    <img class="top-banner--slider-img w-100"
                                                        src="https://static.vietpost.com.au/static-vietpost/public/banner/photo/2022/2/23/2c525b94-d9a9-4da5-ab60-ad66e18d5ec2.jpg"
                                                        alt="63" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-button slider-button--next slick-arrow slick-next" style={{ display: 'block' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.66 64.66">
                                        <circle cx="32.33" cy="32.33" r="32.21" opacity="0.5" fill="#fff"
                                            stroke="#231f20" stroke-width="0.25" stroke-miterlimit="10">
                                        </circle>
                                        <path
                                            d="M38.64 30.98l-9.91-9.91c-.75-.75-1.96-.75-2.7 0-.75.75-.75 1.96 0 2.7l8.56 8.56-8.56 8.56c-.75.75-.75 1.96 0 2.7a1.909 1.909 0 002.7 0l9.91-9.91c.74-.74.74-1.95 0-2.7z"
                                            fill="#e9ecec"></path>
                                    </svg>
                                </div>
                                <ul style={{ display: 'block' }} className="slick-dots">
                                    <li class="slick-active">
                                        <button>1</button>
                                    </li>
                                    <li class="">
                                        <button>2</button>
                                    </li>
                                    <li class="">
                                        <button>3</button>
                                    </li>
                                    <li class="">
                                        <button>4</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="overlay-area">
                            <div class="tracking mt-4 mb-4 d-none d-lg-block">
                                <form class="d-flex">
                                    <div class="wrapped-input">
                                        <input placeholder="Nhập số vận đơn để tra cứu" value=""
                                            class="px-4 py-3 form-control wrapped-input--input" />
                                    </div>
                                    <button type="submit"
                                        class="btn btn-secondary text-bold text-uppercase px-4 py-3 clearfix flex-grow-0 flex-shrink-0">TRA
                                        CỨU ĐƠN VẬN</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row d-lg-none">
                    <div class="col-12 bg-gray-200 py-2">
                        <div class="tracking">
                            <form class="d-flex">
                                <div class="wrapped-input">
                                    <input placeholder="Nhập số vận đơn để tra cứu" value=""
                                        class="form-control wrapped-input--input" />
                                </div>
                                <button type="submit" class="btn btn-secondary text-bold text-uppercase clearfix flex-grow-0 flex-shrink-0">
                                    TRA CỨU ĐƠN VẬN</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
