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
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="home-po-lookup-section">
                                <div class="anchor" id="locations"></div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1
                                                class="text-bold text-primary text-uppercase text-center font-size-x-large font-size-lg-xx-large my-5">
                                                TRA CỨU ĐIỂM GỬI HÀNG CỦA VIETPOST</h1>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-md-6 col-lg-5">
                                            <form>
                                                <div class="form-group">
                                                    <label>Bang/Lãnh thổ</label>
                                                    <style data-emotion="css 2b097c-container">
                                                        {`
                                                        .css-2b097c-container {
                                                            position: relative;
                                                            box-sizing: border-box;
                                                        }
                                                        `}
                                                    </style>

                                                    <div class=" css-2b097c-container" id="region">
                                                        <style data-emotion="css 7pg0cj-a11yText">
                                                            {`
                                                        .css-7pg0cj-a11yText {
                                                            z-index: 9999;
                                                            border: 0;
                                                            clip: rect(1px, 1px, 1px, 1px);
                                                            height: 1px;
                                                            width: 1px;
                                                            position: absolute;
                                                            overflow: hidden;
                                                            padding: 0;
                                                            white-space: nowrap;
                                                        }
                                                        `}
                                                        </style>

                                                        <span aria-live="polite" aria-atomic="false" aria-relevant="additions text"
                                                            class="css-7pg0cj-a11yText"></span>
                                                        <style data-emotion="css yk16xz-control">
                                                            {`
                                                            .css-yk16xz-control {
                                                                align-items: center;
                                                                background-color: hsl(0, 0%, 100%);
                                                                border-color: hsl(0, 0%, 80%);
                                                                border-radius: 4px;
                                                                border-style: solid;
                                                                border-width: 1px;
                                                                cursor: default;
                                                                display: flex;
                                                                flex-wrap: wrap;
                                                                justify-content: space-between;
                                                                min-height: 38px;
                                                                outline: 0 !important;
                                                                position: relative;
                                                                transition: all 100ms;
                                                                box-sizing: border-box;
                                                            }

                                                            .css-yk16xz-control:hover {
                                                                border-color: hsl(0, 0%, 70%);
                                                            }
                                                            `}
                                                        </style>
                                                        <div class=" css-yk16xz-control">
                                                            <style data-emotion="css 1hwfws3">
                                                                {`.css-1hwfws3 {
                                                                    align-items: center;
                                                                    display: flex;
                                                                    flex: 1;
                                                                    flex-wrap: wrap;
                                                                    padding: 2px 8px;
                                                                    position: relative;
                                                                    overflow: hidden;
                                                                    box-sizing: border-box;
                                                                }`}
                                                            </style>
                                                            <div class=" css-1hwfws3">
                                                                <style data-emotion="css 1wa3eu0-placeholder">
                                                                    {`
                                                                .css-1wa3eu0-placeholder {
                                                                    color: hsl(0, 0%, 50%);
                                                                    margin-left: 2px;
                                                                    margin-right: 2px;
                                                                    position: absolute;
                                                                    top: 50%;
                                                                    transform: translateY(-50%);
                                                                    box-sizing: border-box;
                                                                }`}
                                                                </style>
                                                                <div class=" css-1wa3eu0-placeholder">Chọn Bang/Lãnh thổ</div>
                                                                <style data-emotion="css 1hwfws3">
                                                                    {`.css-1hwfws3 {
                                                                            align-items: center;
                                                                            display: flex;
                                                                            flex: 1;
                                                                            flex-wrap: wrap;
                                                                            padding: 2px 8px;
                                                                            position: relative;
                                                                            overflow: hidden;
                                                                            box-sizing: border-box;
                                                                        }`}
                                                                </style>
                                                                <div className="css-1g6gooi">
                                                                    <div style={{ display: 'inline-block' }}>
                                                                        <input
                                                                            type="text"
                                                                            autoCapitalize="none"
                                                                            autoComplete="off"
                                                                            autoCorrect="off"
                                                                            id="react-select-region-input"
                                                                            spellCheck="false"
                                                                            tabIndex="0"
                                                                            value=""
                                                                            aria-autocomplete="list"
                                                                            style={{
                                                                                boxSizing: 'content-box',
                                                                                width: '1px',
                                                                                background: 'none',
                                                                                border: '0',
                                                                                fontSize: 'inherit',
                                                                                opacity: '1',
                                                                                outline: 'none',
                                                                                padding: '0',
                                                                                color: 'inherit'
                                                                            }}
                                                                        />
                                                                        <div style={{
                                                                            position: 'absolute',
                                                                            top: '0',
                                                                            left: '0',
                                                                            visibility: 'hidden',
                                                                            height: '0',
                                                                            overflow: 'scroll',
                                                                            whiteSpace: 'pre'
                                                                        }}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <style data-emotion="css 1wy0on6">
                                                                {`
                                                                .css-1wy0on6 {
                                                                    align-items: center;
                                                                    align-self: stretch;
                                                                    display: flex;
                                                                    flex-shrink: 0;
                                                                    box-sizing: border-box;
                                                                }
                                                                `}
                                                            </style>
                                                            <div class=" css-1wy0on6">
                                                                <style data-emotion="css 1okebmr-indicatorSeparator">
                                                                    {`
                                                                    .css-1okebmr-indicatorSeparator {
                                                                        align-self: stretch;
                                                                        background-color: hsl(0, 0%, 80%);
                                                                        margin-bottom: 8px;
                                                                        margin-top: 8px;
                                                                        width: 1px;
                                                                        box-sizing: border-box;
                                                                    }
                                                                    `}
                                                                </style>
                                                                <span class=" css-1okebmr-indicatorSeparator"></span>
                                                                <style data-emotion="css tlfecz-indicatorContainer">
                                                                    {`
                                                                    .css-tlfecz-indicatorContainer {
                                                                        color: hsl(0, 0%, 80%);
                                                                        display: flex;
                                                                        padding: 8px;
                                                                        transition: color 150ms;
                                                                        box-sizing: border-box;
                                                                    }

                                                                    .css-tlfecz-indicatorContainer:hover {
                                                                        color: hsl(0, 0%, 60%);
                                                                    }
                                                                    `}
                                                                </style>
                                                                <div class=" css-tlfecz-indicatorContainer" aria-hidden="true">
                                                                    <style data-emotion="css 8mmkcg">
                                                                        {`
                                                                    .css-8mmkcg {
                                                                        display: inline-block;
                                                                        fill: currentColor;
                                                                        line-height: 1;
                                                                        stroke: currentColor;
                                                                        stroke-width: 0;
                                                                    }
                                                                    `}
                                                                    </style>
                                                                    <svg height="20" width="20" viewBox="0 0 20 20"
                                                                        aria-hidden="true" focusable="false" class="css-8mmkcg">
                                                                        <path
                                                                            d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
                                                                        </path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label>Vùng đô thị</label>
                                                    <style data-emotion="css 2b097c-container">
                                                        {`
                                                        .css-2b097c-container {
                                                            position: relative;
                                                            box-sizing: border-box;
                                                        }
                                                        `}
                                                    </style>
                                                    <div class=" css-2b097c-container" id="metroArea">
                                                        <style data-emotion="css 7pg0cj-a11yText">
                                                            {`
                                                        .css-7pg0cj-a11yText {
                                                            z-index: 9999;
                                                            border: 0;
                                                            clip: rect(1px, 1px, 1px, 1px);
                                                            height: 1px;
                                                            width: 1px;
                                                            position: absolute;
                                                            overflow: hidden;
                                                            padding: 0;
                                                            white-space: nowrap;
                                                        }
                                                        `}
                                                        </style>
                                                        <span aria-live="polite" aria-atomic="false" aria-relevant="additions text"
                                                            class="css-7pg0cj-a11yText"></span>
                                                        <style data-emotion="css yk16xz-control">
                                                            {`
                                                                .css-yk16xz-control {
                                                                    align-items: center;
                                                                    background-color: hsl(0, 0%, 100%);
                                                                    border-color: hsl(0, 0%, 80%);
                                                                    border-radius: 4px;
                                                                    border-style: solid;
                                                                    border-width: 1px;
                                                                    cursor: default;
                                                                    display: flex;
                                                                    flex-wrap: wrap;
                                                                    justify-content: space-between;
                                                                    min-height: 38px;
                                                                    outline: 0 !important;
                                                                    position: relative;
                                                                    transition: all 100ms;
                                                                    box-sizing: border-box;
                                                                }

                                                                .css-yk16xz-control:hover {
                                                                    border-color: hsl(0, 0%, 70%);
                                                                }
                                                                `}
                                                        </style>
                                                        <div class=" css-yk16xz-control">
                                                            <style data-emotion="css 1hwfws3">
                                                                {`
                                                                .css-1hwfws3 {
                                                                    align-items: center;
                                                                    display: flex;
                                                                    -webkit-flex: 1;
                                                                    -ms-flex: 1;
                                                                    flex: 1;
                                                                    flex-wrap: wrap;
                                                                    padding: 2px 8px;
                                                                    position: relative;
                                                                    overflow: hidden;
                                                                    box-sizing: border-box;
                                                                }
                                                                `}
                                                            </style>
                                                            <div class=" css-1hwfws3">
                                                                <style data-emotion="css 1wa3eu0-placeholder">
                                                                    {`
                                                                        '.css-1wa3eu0-placeholder': {
                                                                            color: 'hsl(0, 0%, 50%)',
                                                                            marginLeft: '2px',
                                                                            marginRight: '2px',
                                                                            position: 'absolute',
                                                                            top: '50%',
                                                                            transform: 'translateY(-50%)',
                                                                            boxSizing: 'border-box'
                                                                        }
                                                                    `}
                                                                </style>
                                                                <div class=" css-1wa3eu0-placeholder">Chọn Vùng đô thị</div>
                                                                <style data-emotion="css 1g6gooi">
                                                                    {`
                                                                            .css-1g6gooi {
                                                                                margin: 2px;
                                                                                padding-bottom: 2px;
                                                                                padding-top: 2px;
                                                                                visibility: visible;
                                                                                color: hsl(0, 0%, 20%);
                                                                                box-sizing: border-box;
                                                                            }
                                                                        `}
                                                                </style>
                                                                <div className="css-1g6gooi">
                                                                    <div className="" style={{ display: 'inline-block' }}>
                                                                        <input
                                                                            type="text"
                                                                            autoCapitalize="none"
                                                                            autoComplete="off"
                                                                            autoCorrect="off"
                                                                            id="react-select-metroArea-input"
                                                                            spellCheck="false"
                                                                            tabIndex="0"
                                                                            value=""
                                                                            aria-autocomplete="list"
                                                                            style={{
                                                                                boxSizing: 'content-box',
                                                                                width: '1px',
                                                                                background: 'none',
                                                                                border: 'none',
                                                                                fontSize: 'inherit',
                                                                                opacity: '1',
                                                                                outline: 'none',
                                                                                padding: '0',
                                                                                color: 'inherit'
                                                                            }}
                                                                        />
                                                                        <div
                                                                            style={{
                                                                                position: 'absolute',
                                                                                top: '0',
                                                                                left: '0',
                                                                                visibility: 'hidden',
                                                                                height: '0',
                                                                                overflow: 'scroll',
                                                                                whiteSpace: 'pre'
                                                                            }}
                                                                        ></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <style data-emotion="css 1wy0on6">
                                                                {`
                                                                    .css-1wy0on6 {
                                                                        align-items: center;
                                                                        align-self: stretch;
                                                                        display: flex;
                                                                        flex-shrink: 0;
                                                                        box-sizing: border-box;
                                                                    }
                                                                `}
                                                            </style>
                                                            <div class=" css-1wy0on6">
                                                                <style data-emotion="css 1okebmr-indicatorSeparator">
                                                                    {`
                                                                        .css-1okebmr-indicatorSeparator {
                                                                            align-self: stretch;
                                                                            background-color: hsl(0, 0%, 80%);
                                                                            margin-bottom: 8px;
                                                                            margin-top: 8px;
                                                                            width: 1px;
                                                                            box-sizing: border-box;
                                                                        }
                                                                    `}
                                                                </style>
                                                                <span class=" css-1okebmr-indicatorSeparator"></span>
                                                                    <style data-emotion="css tlfecz-indicatorContainer">
                                                                        {`
                                                                            .css-tlfecz-indicatorContainer {
                                                                                color: hsl(0, 0%, 80%);
                                                                                display: flex;
                                                                                padding: 8px;
                                                                                transition: color 150ms;
                                                                                box-sizing: border-box;
                                                                            }

                                                                            .css-tlfecz-indicatorContainer:hover {
                                                                                color: hsl(0, 0%, 60%);
                                                                            }
                                                                        `}
                                                                    </style>
                                                                <div class=" css-tlfecz-indicatorContainer" aria-hidden="true">
                                                                <style data-emotion="css 8mmkcg">
                                                                    {`
                                                                        .css-8mmkcg {
                                                                            display: inline-block;
                                                                            fill: currentColor;
                                                                            line-height: 1;
                                                                            stroke: currentColor;
                                                                            stroke-width: 0;
                                                                        }
                                                                    `}
                                                                </style>
                                                                    <svg height="20" width="20" viewBox="0 0 20 20"
                                                                        aria-hidden="true" focusable="false" class="css-8mmkcg">
                                                                        <path
                                                                            d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
                                                                        </path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="po-list p-3 mb-3 mb-md-4 mb-lg-5">
                                                    <div class="text-bold text-uppercase">Vietpost</div>
                                                    <div class="mt-2">Địa điểm pick hàng</div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-7">
                                            <div class="px-4 py-5 text-center">
                                                <img src="https://vietpost.com.au/_next/static/map-56d9690d6c2b1c119e13d3099d161966.svg"
                                                    alt="" class="w-80" />
                                            </div>
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

