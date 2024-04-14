import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from '@emotion/styled';
import './Price.css';

const StyledContainer = styled.div`
    position: relative;
    box-sizing: border-box;
`;

const StyledText = styled.div`
z-index: 9999;
border: 0;
clip: rect(1px, 1px, 1px, 1px);
height: 1px;
width: 1px;
position: absolute;
overflow: hidden;
padding: 0;
white-space: nowrap;
`;

const StyledControl = styled.div`
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

    &:hover {
        border-color: hsl(0, 0%, 70%);
    }
`;

const StyledControll = styled.div `
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
`;

const Price = () => {
    return (
        <div className="home-price-estimate-section">
            <div className="anchor" id="price-estimate"></div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1 className="text-bold text-primary text-uppercase text-center font-size-x-large font-size-lg-xx-large mt-5">
                            ƯỚC TÍNH GIÁ
                        </h1>
                        <div className="text-bold text-uppercase text-center font-size-large mt-3 mb-5">
                            CÔNG CỤ GIÚP KHÁCH HÀNG ƯỚC TÍNH GIÁ VẬN CHUYỂN
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="px-4 py-3 py-md-5 mt-md-5 text-center">
                            <img src="https://vietpost.com.au/_next/static/estimate-price-874460f9b200eb1a922a6a0d0ece7615.svg" alt="" className="w-80" />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="mb-4">Vui lòng nhập các thông tin liên quan đến mặt hàng bạn cần vận chuyển. Chúng tôi sẽ giúp bạn ước lượng giá cuối cùng khi sản phẩm đến tay người nhận.</div>
                        <form>
                            <div className="form-group">
                                <label className="text-bold">Nơi gửi *</label>
                                <StyledContainer data-emotion="css 2b097c-container">
                                </StyledContainer>
                                <div className="css-2b097c-container" id="sendLocation">
                                    <StyledText data-emotion="css 7pg0cj-a11yText">
                                    </StyledText>
                                    <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span>
                                    <StyledControl data-emotion="css yk16xz-control">
                                    </StyledControl>
                                    <div class=" css-yk16xz-control">
                                        <StyledControll data-emotion="css 1hwfws3">
                                        </StyledControll>
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
                                            <div class=" css-1wa3eu0-placeholder"></div>
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
                                                <div style={{ display: 'inline-block' }}>
                                                    <input
                                                        type="text"
                                                        autoCapitalize="none"
                                                        autoComplete="off"
                                                        autoCorrect="off"
                                                        id="react-select-sendLocation-input"
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
                                                    <div style={{ position: 'absolute', top: '0', left: '0', visibility: 'hidden', height: '0', overflow: 'scroll', whiteSpace: 'pre' }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <style data-emotion="css 1wy0on6">
                                            {`
                                                .css-1wy0on6 {
                                                    -webkit-align-items: center;
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
                                                        -webkit-transition: color 150ms;
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
                                <label class="text-bold">Nơi nhận *</label>
                                <style data-emotion="css 2b097c-container">
                                    {`
                                    .css-2b097c-container {
                                        position: relative;
                                        box-sizing: border-box;
                                    }
                                `}
                                </style>
                                <div class=" css-2b097c-container" id="receiveLocation">
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
                                            <div class=" css-1wa3eu0-placeholder"></div>
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
                                                <div style={{ display: 'inline-block' }}>
                                                    <input
                                                        type="text"
                                                        autoCapitalize="none"
                                                        autoComplete="off"
                                                        autoCorrect="off"
                                                        id="react-select-receiveLocation-input"
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
                                                    -webkit-transition: color 150ms;
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Price;
