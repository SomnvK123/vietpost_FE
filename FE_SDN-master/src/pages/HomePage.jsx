import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Carousel from "../components/slider/Carousel";
import Footerr from "../components/footer/Footer";

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
                                                <a href="#" class="__cf_email__"
                                                    data-cfemail="4d2223212423280d3b2428393d223e39632e2220632c38">scadjk@gmail.com</a>
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
                                                                {`
    .css-1hwfws3 {
        align-items: center;
        display: flex;
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
    .css-1wa3eu0-placeholder {
        color: hsl(0, 0%, 50%);
        margin-left: 2px;
        margin-right: 2px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        box-sizing: border-box;
    }
    `}
                                                                </style>

                                                                <div class=" css-1wa3eu0-placeholder">Chọn Bang/Lãnh thổ</div>
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

                                                                <div class="css-1g6gooi">
                                                                    <div class="" style="display:inline-block">
                                                                        <input type="text" autoCapitalize="none" autoComplete="off"
                                                                            autoCorrect="off" id="react-select-region-input"
                                                                            spellcheck="false" tabindex="0" value=""
                                                                            aria-autocomplete="list"
                                                                            style="box-sizing: content-box; width: 1px; background: none; border: 0; font-size: inherit; opacity: 1; outline: none; padding: 0; color: inherit;" />
                                                                        <div
                                                                            style="position:absolute;top:0;left:0;visibility:hidden;height:0;overflow:scroll;white-space:pre">
                                                                        </div>
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
    .css-1wa3eu0-placeholder {
        color: hsl(0, 0%, 50%);
        margin-left: 2px;
        margin-right: 2px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        box-sizing: border-box;
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

                                                                <div class="css-1g6gooi">
                                                                    <div class="my-class" style="display: inline-block;">
                                                                        <input type="text"
                                                                            autoCapitalize="none"
                                                                            autoComplete="off"
                                                                            autoCorrect="off"
                                                                            id="react-select-metroArea-input"
                                                                            spellcheck="false"
                                                                            tabindex="0"
                                                                            value=""
                                                                            aria-autocomplete="list"
                                                                            style="box-sizing: content-box; 
              width: 1px; 
              background: none; 
              border: none; 
              font-size: inherit; 
              opacity: 1; 
              outline: none; 
              padding: 0; 
              color: inherit;"
                                                                        />
                                                                        <div style="position: absolute; 
            top: 0; 
            left: 0; 
            visibility: hidden; 
            height: 0; 
            overflow: scroll; 
            white-space: pre;">
                                                                        </div>

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
                            <div class="home-express-section bg-primary text-white">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1 class="text-bold text-center font-size-x-large font-size-lg-xx-large mt-5 mb-3">
                                                Chuyển
                                                phát nhanh</h1>
                                            <div class="text-center font-size-large font-size-lg-x-large">Từ Australia đến 64 tỉnh
                                                thành
                                                tại Việt Nam</div>
                                            <div>
                                                <img src="https://vietpost.com.au/_next/static/express-4996162dc89416d24558e14d3959818f.svg"
                                                    alt="" class="d-none d-sm-block w-max-100 mt-3 mb-3" />
                                                <img src="https://vietpost.com.au/_next/static/express-m-34d96d9b32aa81152be434252130a64d.svg"
                                                    alt="" class="d-sm-none w-max-100 mt-5 mb-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="home-price-estimate-section">
                                <div class="anchor" id="price-estimate"></div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1
                                                class="text-bold text-primary text-uppercase text-center font-size-x-large font-size-lg-xx-large mt-5">
                                                ƯỚC TÍNH GIÁ</h1>
                                            <div class="text-bold text-uppercase text-center font-size-large mt-3 mb-5">CÔNG CỤ GIÚP
                                                KHÁCH HÀNG ƯỚC TÍNH GIÁ VẬN CHUYỂN</div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-md-6">
                                            <div class="px-4 py-3 py-md-5 mt-md-5 text-center">
                                                <img src="https://vietpost.com.au/_next/static/estimate-price-874460f9b200eb1a922a6a0d0ece7615.svg"
                                                    alt="" class="w-80" />
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 ">
                                            <div class="mb-4">Vui lòng nhập các thông tin liên quan đến mặt hàng bạn cần vận chuyển.
                                                Chúng tôi sẽ giúp bạn ước lượng giá cuối cùng khi sản phẩm đến tay người nhận.</div>
                                            <form>
                                                <div class="form-group">
                                                    <label class="text-bold">Nơi gửi *</label>
                                                    <style data-emotion="css 2b097c-container">
                                                        {`
    .css-2b097c-container {
        position: relative;
        box-sizing: border-box;
    }
    `}
                                                    </style>

                                                    <div class=" css-2b097c-container" id="sendLocation">
                                                        <style data-emotion="css 7pg0cj-a11yText">
                                                            .css-7pg0cj-a11yText {
                                                                z - index: 9999;
                                                            border: 0;
                                                            clip: rect(1px, 1px, 1px, 1px);
                                                            height: 1px;
                                                            width: 1px;
                                                            position: absolute;
                                                            overflow: hidden;
                                                            padding: 0;
                                                            white-space: nowrap;
                                                }
                                                        </style>
                                                        <span aria-live="polite" aria-atomic="false" aria-relevant="additions text"
                                                            class="css-7pg0cj-a11yText"></span>
                                                        <style data-emotion="css yk16xz-control">
                                                            .css-yk16xz-control {
                                                                align - items: center;
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
                                                                border - color: hsl(0, 0%, 70%);
                                                }
                                                        </style>
                                                        <div class=" css-yk16xz-control">
                                                            <style data-emotion="css 1hwfws3">
                                                                .css-1hwfws3 {
                                                                    align - items: center;
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
                                                            </style>
                                                            <div class=" css-1hwfws3">
                                                                <style data-emotion="css 1wa3eu0-placeholder">
                                                                    .css-1wa3eu0-placeholder {
                                                                        color: hsl(0, 0%, 50%);
                                                                    margin-left: 2px;
                                                                    margin-right: 2px;
                                                                    position: absolute;
                                                                    top: 50%;
                                                                    transform: translateY(-50%);
                                                                    box-sizing: border-box;
                                                        }
                                                                </style>
                                                                <div class=" css-1wa3eu0-placeholder"></div>
                                                                <style data-emotion="css 1g6gooi">
                                                                    .css-1g6gooi {
                                                                        margin: 2px;
                                                                    padding-bottom: 2px;
                                                                    padding-top: 2px;
                                                                    visibility: visible;
                                                                    color: hsl(0, 0%, 20%);
                                                                    box-sizing: border-box;
                                                        }
                                                                </style>
                                                                <div class="css-1g6gooi">
                                                                    <div class="" style="display:inline-block">
                                                                        <input type="text" autoCapitalize="none" autoComplete="off"
                                                                            autoCorrect="off" id="react-select-sendLocation-input"
                                                                            spellcheck="false" tabindex="0" value=""
                                                                            aria-autocomplete="list"
                                                                            style="box-sizing: content-box; width: 1px; background: none; border: none; font-size: inherit; opacity: 1; outline: none; padding: 0; color: inherit;" />
                                                                        <div
                                                                            style="position:absolute;top:0;left:0;visibility:hidden;height:0;overflow:scroll;white-space:pre">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <style data-emotion="css 1wy0on6">
                                                                .css-1wy0on6 {
                                                                    -webkit - align - items: center;
                                                                -webkit-box-align: center;
                                                                -ms-flex-align: center;
                                                                align-items: center;
                                                                -webkit-align-self: stretch;
                                                                -ms-flex-item-align: stretch;
                                                                align-self: stretch;
                                                                display: flex;
                                                                -webkit-flex-shrink: 0;
                                                                -ms-flex-negative: 0;
                                                                flex-shrink: 0;
                                                                box-sizing: border-box;
                                                    }
                                                            </style>
                                                            <div class=" css-1wy0on6">
                                                                <style data-emotion="css 1okebmr-indicatorSeparator">
                                                                    .css-1okebmr-indicatorSeparator {
                                                                        align - self: stretch;
                                                                    background-color: hsl(0, 0%, 80%);
                                                                    margin-bottom: 8px;
                                                                    margin-top: 8px;
                                                                    width: 1px;
                                                                    box-sizing: border-box;
                                                        }
                                                                </style>
                                                                <span class=" css-1okebmr-indicatorSeparator"></span>
                                                                <style data-emotion="css tlfecz-indicatorContainer">
                                                                    .css-tlfecz-indicatorContainer {
                                                                        color: hsl(0, 0%, 80%);
                                                                    display: flex;
                                                                    padding: 8px;
                                                                    -webkit-transition: color 150ms;
                                                                    transition: color 150ms;
                                                                    box-sizing: border-box;
                                                        }

                                                                    .css-tlfecz-indicatorContainer:hover {
                                                                        color: hsl(0, 0%, 60%);
                                                        }
                                                                </style>
                                                                <div class=" css-tlfecz-indicatorContainer" aria-hidden="true">
                                                                    <style data-emotion="css 8mmkcg">
                                                                        .css-8mmkcg {
                                                                            display: inline-block;
                                                                        fill: currentColor;
                                                                        line-height: 1;
                                                                        stroke: currentColor;
                                                                        stroke-width: 0;
                                                            }
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
                                                    <label class="text-bold">Nơi nhận *</label>
                                                    <style data-emotion="css 2b097c-container">
                                                        .css-2b097c-container {
                                                            position: relative;
                                                        box-sizing: border-box;
                                            }
                                                    </style>
                                                    <div class=" css-2b097c-container" id="receiveLocation">
                                                        <style data-emotion="css 7pg0cj-a11yText">
                                                            .css-7pg0cj-a11yText {
                                                                z - index: 9999;
                                                            border: 0;
                                                            clip: rect(1px, 1px, 1px, 1px);
                                                            height: 1px;
                                                            width: 1px;
                                                            position: absolute;
                                                            overflow: hidden;
                                                            padding: 0;
                                                            white-space: nowrap;
                                                }
                                                        </style>
                                                        <span aria-live="polite" aria-atomic="false" aria-relevant="additions text"
                                                            class="css-7pg0cj-a11yText"></span>
                                                        <style data-emotion="css yk16xz-control">
                                                            .css-yk16xz-control {
                                                                align - items: center;
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
                                                                border - color: hsl(0, 0%, 70%);
                                                }
                                                        </style>
                                                        <div class=" css-yk16xz-control">
                                                            <style data-emotion="css 1hwfws3">
                                                                .css-1hwfws3 {
                                                                    align - items: center;
                                                                display: flex;
                                                                flex: 1;
                                                                flex-wrap: wrap;
                                                                padding: 2px 8px;
                                                                position: relative;
                                                                overflow: hidden;
                                                                box-sizing: border-box;
                                                    }
                                                            </style>
                                                            <div class=" css-1hwfws3">
                                                                <style data-emotion="css 1wa3eu0-placeholder">
                                                                    .css-1wa3eu0-placeholder {
                                                                        color: hsl(0, 0%, 50%);
                                                                    margin-left: 2px;
                                                                    margin-right: 2px;
                                                                    position: absolute;
                                                                    top: 50%;
                                                                    transform: translateY(-50%);
                                                                    box-sizing: border-box;
                                                        }
                                                                </style>
                                                                <div class=" css-1wa3eu0-placeholder"></div>
                                                                <style data-emotion="css 1g6gooi">
                                                                    .css-1g6gooi {
                                                                        margin: 2px;
                                                                    padding-bottom: 2px;
                                                                    padding-top: 2px;
                                                                    visibility: visible;
                                                                    color: hsl(0, 0%, 20%);
                                                                    box-sizing: border-box;
                                                        }
                                                                </style>
                                                                <div class="css-1g6gooi">
                                                                    <div class="" style="display:inline-block">
                                                                        <input type="text" autoCapitalize="none" autoComplete="off"
                                                                            autoCorrect="off"
                                                                            id="react-select-receiveLocation-input"
                                                                            spellcheck="false" tabindex="0" value=""
                                                                            aria-autocomplete="list"
                                                                            style="box-sizing: content-box; width: 1px; background: none; border: none; font-size: inherit; opacity: 1; outline: none; padding: 0; color: inherit;" />
                                                                        <div
                                                                            style="position:absolute;top:0;left:0;visibility:hidden;height:0;overflow:scroll;white-space:pre">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <style data-emotion="css 1wy0on6">
                                                                .css-1wy0on6 {
                                                                    align - items: center;
                                                                align-self: stretch;
                                                                display: flex;
                                                                -webkit-flex-shrink: 0;
                                                                -ms-flex-negative: 0;
                                                                flex-shrink: 0;
                                                                box-sizing: border-box;
                                                    }
                                                            </style>
                                                            <div class=" css-1wy0on6">
                                                                <style data-emotion="css 1okebmr-indicatorSeparator">
                                                                    .css-1okebmr-indicatorSeparator {
                                                                        align - self: stretch;
                                                                    background-color: hsl(0, 0%, 80%);
                                                                    margin-bottom: 8px;
                                                                    margin-top: 8px;
                                                                    width: 1px;
                                                                    box-sizing: border-box;
                                                        }
                                                                </style>
                                                                <span class=" css-1okebmr-indicatorSeparator"></span>
                                                                <style data-emotion="css tlfecz-indicatorContainer">
                                                                    .css-tlfecz-indicatorContainer {
                                                                        color: hsl(0, 0%, 80%);
                                                                    display: flex;
                                                                    padding: 8px;
                                                                    -webkit-transition: color 150ms;
                                                                    transition: color 150ms;
                                                                    box-sizing: border-box;
                                                        }

                                                                    .css-tlfecz-indicatorContainer:hover {
                                                                        color: hsl(0, 0%, 60%);
                                                        }
                                                                </style>
                                                                <div class=" css-tlfecz-indicatorContainer" aria-hidden="true">
                                                                    <style data-emotion="css 8mmkcg">
                                                                        .css-8mmkcg {
                                                                            display: inline-block;
                                                                        fill: currentColor;
                                                                        line-height: 1;
                                                                        stroke: currentColor;
                                                                        stroke-width: 0;
                                                            }
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
                                                    <label class="text-bold">Trọng lượng *</label>
                                                    <div class="w-100 wrapped-input">
                                                        <input type="number" name="weight" maxLength="10" placeholder="kg"
                                                            class="form-control wrapped-input--input" />
                                                    </div>
                                                </div>
                                                <div class="d-flex">
                                                    <div class="w-33 mr-2">
                                                        <div class="form-group">
                                                            <label class="text-bold">Dài *</label>
                                                            <div class="w-100 wrapped-input">
                                                                <input type="number" name="length" maxLength="10" placeholder="cm"
                                                                    class="form-control wrapped-input--input" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="w-33 mr-2">
                                                        <div class="form-group">
                                                            <label class="text-bold">Rộng *</label>
                                                            <div class="w-100 wrapped-input">
                                                                <input type="number" name="width" maxLength="10" placeholder="cm"
                                                                    class="form-control wrapped-input--input" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="w-33">
                                                        <div class="form-group">
                                                            <label class="text-bold">Cao *</label>
                                                            <div class="w-100 wrapped-input">
                                                                <input type="number" name="height" maxLength="10" placeholder="cm"
                                                                    class="form-control wrapped-input--input" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mt-2 mb-3">
                                                    <button type="submit"
                                                        class="btn btn-secondary text-bold text-uppercase py-3 w-100">ƯỚC TÍNH GIÁ
                                                        (AUD)</button>
                                                </div>
                                                <div class="form-group">
                                                    <label class="text-bold">Giá ước tính </label>
                                                    <div class="w-100 wrapped-input">
                                                        <input type="text" disabled="" value="" placeholder="AUD"
                                                            class="form-control wrapped-input--input" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="home-delivery-section">
                                <div class="anchor" id="how-it-works"></div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1
                                                class="text-bold text-primary text-uppercase text-center font-size-x-large font-size-lg-xx-large my-5">
                                                GIAO HÀNG TIẾT KIỆM &amp;THÔNG MINH</h1>
                                        </div>
                                    </div>
                                    <div class="row pl-3">
                                        <div class="col-12 col-sm-6 col-lg-3 pl-0 pr-3 mb-3 d-flex align-items-stretch">
                                            <div class="delivery-item text-center cursor-pointer p-3 p-lg-4 p-xl-5">
                                                <div class="image">
                                                    <img src="https://vietpost.com.au/_next/static/global-aa53b2fc3cdf21a31acd48787549c44f.svg"
                                                        alt="" />
                                                </div>
                                                <div class="text-bold mt-3">Nhiều điểm gửi hàng</div>
                                                <div class="mt-3">Công ty có hệ thống đại lý gom hàng ở tất cả các tiểu bang của Úc.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-6 col-lg-3 pl-0 pr-3 mb-3 d-flex align-items-stretch">
                                            <div class="delivery-item text-center cursor-pointer p-3 p-lg-4 p-xl-5">
                                                <div class="image">
                                                    <img src="https://vietpost.com.au/_next/static/cost-13d0121319ef94ccabca06dc636fd848.svg"
                                                        alt="" />
                                                </div>
                                                <div class="text-bold mt-3">Cước phí cạnh tranh</div>
                                                <div class="mt-3">Vận chuyển bằng máy bay chuyên dụng, kết hợp mạng lưới vận chuyển
                                                    từ các đối tác lớn giúp Vietpost cung cấp dịch vụ vận chuyển nhanh với giá cước
                                                    cạnh tranh.</div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-6 col-lg-3 pl-0 pr-3 mb-3 d-flex align-items-stretch">
                                            <div class="delivery-item text-center cursor-pointer p-3 p-lg-4 p-xl-5">
                                                <div class="image">
                                                    <img src="https://vietpost.com.au/_next/static/payment-248583dfc45304c823157e186f4f8300.svg"
                                                        alt="" />
                                                </div>
                                                <div class="text-bold mt-3">Thanh toán an toàn, linh hoạt</div>
                                                <div class="mt-3">Đa dạng các phương thức thanh toán: chuyển khoản, visa, trực
                                                    tiếp... giúp khách hàng có thêm nhiều lựa chọn.</div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-6 col-lg-3 pl-0 pr-3 mb-3 d-flex align-items-stretch">
                                            <div class="delivery-item text-center cursor-pointer p-3 p-lg-4 p-xl-5">
                                                <div class="image">
                                                    <img src="https://vietpost.com.au/_next/static/tracking-18c8c3e5b6d311d85f1d0dd595b73738.svg"
                                                        alt="" />
                                                </div>
                                                <div class="text-bold mt-3">Kiểm soát hành trình vận đơn</div>
                                                <div class="mt-3">Thông tin đến khách hàng hành trình của vận đơn tại từng trạm
                                                    trung chuyển</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="home-send-process-section">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1
                                                class="text-bold text-primary text-uppercase text-center font-size-x-large font-size-lg-xx-large mt-5">
                                                QUY TRÌNH GỬI HÀNG</h1>
                                            <div class="text-bold text-uppercase text-center font-size-large mt-3 mb-5">ÁP DỤNG HÀNG
                                                GỬI TỪ ÚC VỀ VIỆT NAM</div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 px-0">
                                            <div class="d-flex flex-column flex-lg-row pl-3 mb-2">
                                                <div class="send-process-item-wrapper pr-3 mb-3 d-flex align-items-stretch">
                                                    <div class="bg-white flex-grow-1 flex-shrink-1">
                                                        <div class="number bg-primary">
                                                            <div class="text-bold text-center text-white font-size-large">1</div>
                                                        </div>
                                                        <div class="send-process-item px-3 pb-3">
                                                            <div class="image text-center mt-3">
                                                                <img src="https://vietpost.com.au/_next/static/logon-11b32ac084a6dbd2cf42c3e673b28edb.svg"
                                                                    alt="" />
                                                            </div>
                                                            <div class="sign text-center mt-3">
                                                                <img src="https://vietpost.com.au/_next/static/multiply-581c8ebba42ea0be11135f66afe59cc3.svg"
                                                                    alt="" />
                                                            </div>
                                                            <div class="text-bold mt-3">Đăng ký tài khoản</div>
                                                            <div class="mt-3">
                                                                <div class="html-content ql-editor html-content--block">
                                                                    <p>
                                                                        <span style="color: rgb(33, 37, 41); font-size: 14px;">Quý
                                                                            khách cần đăng ký một tài khoản online trên
                                                                            website trước khi thực hiện tạo vận đơn</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="mt-3 text-center">
                                                                <a class="btn btn-secondary text-bold text-uppercase py-2"
                                                                    href="#">Đăng ký tài khoản</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="send-process-item-wrapper pr-3 mb-3 d-flex align-items-stretch">
                                                    <div class="bg-white flex-grow-1 flex-shrink-1">
                                                        <div class="number bg-primary">
                                                            <div class="text-bold text-center text-white font-size-large">2</div>
                                                        </div>
                                                        <div class="send-process-item px-3 pb-3">
                                                            <div class="image text-center mt-3">
                                                                <img src="https://vietpost.com.au/_next/static/check-list-c7130f794082ca7be233cf20e18590b3.svg"
                                                                    alt="" />
                                                            </div>
                                                            <div class="sign text-center mt-3">
                                                                <img src="https://vietpost.com.au/_next/static/plus-be8ee6bcf9b10efd17b7066c93f6e48a.svg"
                                                                    alt="" />
                                                            </div>
                                                            <div class="text-bold mt-3">Khai báo hàng gửi</div>
                                                            <div class="mt-3">
                                                                <div class="html-content ql-editor html-content--block">
                                                                    <p>
                                                                        <span style="font-size: 14px; color: rgb(33, 37, 41);">Sau
                                                                            khi mở tài khoản online thành công, Quý khách cần
                                                                        </span>
                                                                        <a href="https://vp2-web.faskera.com/auth/login"
                                                                            rel="noopener noreferrer" target="_blank"
                                                                            style="font-size: 14px; color: rgb(33, 37, 41);">
                                                                            <strong>ĐĂNG NHẬP (Login)</strong>
                                                                            v
                                                                        </a>
                                                                        <span style="font-size: 14px; color: rgb(33, 37, 41);">ào
                                                                            tài khoản của bạn rồi thực hiện khai báo gửi
                                                                            hàng (thông tin người gửi, thông tin người
                                                                            nhận, danh sách hàng gửi, thông tin về kiện hàng
                                                                            gửi, ...) theo mẫu form đã cung cấp
                                                                            sẵn.&nbsp;</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="send-process-item-wrapper pr-3 mb-3 d-flex align-items-stretch">
                                                    <div class="bg-white flex-grow-1 flex-shrink-1">
                                                        <div class="number bg-primary">
                                                            <div class="text-bold text-center text-white font-size-large">3</div>
                                                        </div>
                                                        <div class="send-process-item px-3 pb-3">
                                                            <div class="image text-center mt-3">
                                                                <img src="https://vietpost.com.au/_next/static/payment-hand-b3473d462a8ee325bf622c7bafc84cfd.svg"
                                                                    alt="" />
                                                            </div>
                                                            <div class="sign text-center mt-3">
                                                                <img src="https://vietpost.com.au/_next/static/plus-be8ee6bcf9b10efd17b7066c93f6e48a.svg"
                                                                    alt="" />
                                                            </div>
                                                            <div class="text-bold mt-3">Thanh toán</div>
                                                            <div class="mt-3">
                                                                <div class="html-content ql-editor html-content--block">
                                                                    <p>
                                                                        <span style="font-size: 14px; color: rgb(33, 37, 41);">Quý
                                                                            khách sẽ nhận được 01 thông gửi hàng từ công ty
                                                                            qua email. Nếu không có thắc mắc gì về vận đơn
                                                                            thì bạn thực hiện thanh toán tiền vận chuyển qua
                                                                            hình thức chuyển khoản hoặc Quý khách có thể trả
                                                                            tiền mặt ở nơi gửi/Pick hàng(Nếu địa chỉ gửi hàng
                                                                            của bạn nằm trong khu vực hỗ trợ pick hàng hoặc có đại
                                                                            lý thu gom của Vietpost)</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="send-process-item-wrapper pr-3 mb-3 d-flex align-items-stretch">
                                                    <div class="bg-white flex-grow-1 flex-shrink-1">
                                                        <div class="number bg-primary">
                                                            <div class="text-bold text-center text-white font-size-large">4</div>
                                                        </div>
                                                        <div class="send-process-item px-3 pb-3">
                                                            <div class="image text-center mt-3">
                                                                <img src="https://vietpost.com.au/_next/static/transport-car-572e0606e5218054a1205cc7275158c5.svg"
                                                                    alt="" />
                                                            </div>
                                                            <div class="sign text-center mt-3">
                                                                <img src="https://vietpost.com.au/_next/static/plus-be8ee6bcf9b10efd17b7066c93f6e48a.svg"
                                                                    alt="" />
                                                            </div>
                                                            <div class="text-bold mt-3">Gửi hàng</div>
                                                            <div class="mt-3">
                                                                <div class="html-content ql-editor html-content--block">
                                                                    <p>
                                                                        <span style="font-size: 14px; color: rgb(33, 37, 41);">Hàng
                                                                            hóa cần được đóng gói cẩn thận trước khi đem đi gửi đến
                                                                            điểm gom hàng/Kho Sydney của Vietpost hoặc giao cho nhân
                                                                            viên pick hàng tại địa điểm gửi hàng của quý khách. Vui
                                                                            lòng tham khảo quy cách đóng gói của Vietpost</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="mt-3 text-center">
                                                                <a class="btn btn-secondary text-bold text-uppercase py-2"
                                                                    href="https://www.shirogane.vn/">Quy cách đóng gói</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="send-process-item-wrapper pr-3 mb-3 d-flex align-items-stretch">
                                                    <div class="bg-white flex-grow-1 flex-shrink-1">
                                                        <div class="number bg-primary">
                                                            <div class="text-bold text-center text-white font-size-large">5</div>
                                                        </div>
                                                        <div class="send-process-item px-3 pb-3">
                                                            <div class="image text-center mt-3">
                                                                <img src="https://vietpost.com.au/_next/static/receive-014a476ed64a0543f660c259c5cdc484.svg"
                                                                    alt="" />
                                                            </div>
                                                            <div class="sign text-center mt-3">
                                                                <img src="https://vietpost.com.au/_next/static/plus-be8ee6bcf9b10efd17b7066c93f6e48a.svg"
                                                                    alt="" />
                                                            </div>
                                                            <div class="text-bold mt-3">Nhận hàng tại Việt Nam</div>
                                                            <div class="mt-3">
                                                                <div class="html-content ql-editor html-content--block">
                                                                    <p>
                                                                        <span style="font-size: 14px; color: rgb(33, 37, 41);">Hàng
                                                                            sẽ được giao cho người nhận từ 7 – 10 ngày làm việc (tùy
                                                                            theo vị trí địa lý) kể từ ngày hàng lên máy bay rời khỏi
                                                                            Úc. Quý khách có thể theo dõi kiện hàng của mình trực
                                                                            tiếp trên website của công ty. Hệ thống sẽ tự động cập
                                                                            nhật thông tin đến email của quý khách về các trạng
                                                                            thái, lịch trình của vận đơn</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Footerr />
                        </div>
                    </main>
                </div>
            </body>
        </>
    );
};

export default HomePage;

