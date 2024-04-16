import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import styled from '@emotion/styled';

const Containerr = styled.div`
    position: relative;
    box-sizing: border-box;
`;

const A11yText = styled.span`
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

const Control = styled.div`
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

const Placeholder = styled.div`
    color: hsl(0, 0%, 50%);
    margin-left: 2px;
    margin-right: 2px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    box-sizing: border-box;
`;

const IndicatorSeparator = styled.span`
    align-self: stretch;
    background-color: hsl(0, 0%, 80%);
    margin-bottom: 8px;
    margin-top: 8px;
    width: 1px;
    box-sizing: border-box;
`;

const IndicatorContainer = styled.div`
    color: hsl(0, 0%, 80%);
    display: flex;
    padding: 8px;
    transition: color 150ms;
    box-sizing: border-box;

    &:hover {
        color: hsl(0, 0%, 60%);
    }
`;

const IndicatorSvg = styled.svg`
    display: inline-block;
    fill: currentColor;
    line-height: 1;
    stroke: currentColor;
    stroke-width: 0;
`;

const Containerx = styled.div`
    position: relative;
    box-sizing: border-box;
`;

const A11yTextt = styled.span`
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

const Controll = styled.div`
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

const Placeholderr = styled.div`
    color: hsl(0, 0%, 50%);
    margin-left: 2px;
    margin-right: 2px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    box-sizing: border-box;
`;

const IndicatorContainerr = styled.div`
    color: hsl(0, 0%, 80%);
    display: flex;
    padding: 8px;
    transition: color 150ms;
    box-sizing: border-box;

    &:hover {
        color: hsl(0, 0%, 60%);
    }
`;

const IndicatorSeparatorr = styled.span`
    align-self: stretch;
    background-color: hsl(0, 0%, 80%);
    margin-bottom: 8px;
    margin-top: 8px;
    width: 1px;
    box-sizing: border-box;
`;

const Lookup = () => {
    return (
        <div className="home-po-lookup-section">
            <div className="anchor" id="locations"></div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1 className="text-bold text-primary text-uppercase text-center font-size-x-large font-size-lg-xx-large my-5">
                            TRA CỨU ĐIỂM GỬI HÀNG CỦA VIETPOST
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={5}>
                        <Form>
                            <Form.Group>
                                <Form.Label>Bang/Lãnh thổ</Form.Label>
                                <Containerr>
                                    <A11yText aria-live="polite" aria-atomic="false" aria-relevant="additions text"></A11yText>
                                    <Control>
                                        <div>
                                            <Placeholder>Chọn Bang/Lãnh thổ</Placeholder>
                                            <div>
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
                                                <div></div>
                                            </div>
                                        </div>
                                        <IndicatorSeparator />
                                        <IndicatorContainer aria-hidden="true">
                                            <IndicatorSvg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                                                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                            </IndicatorSvg>
                                        </IndicatorContainer>
                                    </Control>
                                </Containerr>
                            </Form.Group>
                            <div className="form-group">
                                <label>Vùng đô thị</label>
                                <style data-emotion="css 2b097c-container">
                                    {`
                                .css-2b097c-container {
                                    position: relative;
                                    box-sizing: border-box;
                                }
                                `}
                                </style>
                                <div className=" css-2b097c-container" id="metroArea">
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
                                        className="css-7pg0cj-a11yText"></span>
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
                                    <div className=" css-yk16xz-control">
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
                                        <div className=" css-1hwfws3">
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
                                            <div className=" css-1wa3eu0-placeholder">Chọn Vùng đô thị</div>
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
                                        <div className=" css-1wy0on6">
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
                                            <span className=" css-1okebmr-indicatorSeparator"></span>
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
                                            <div className=" css-tlfecz-indicatorContainer" aria-hidden="true">
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
                                                    aria-hidden="true" focusable="false" className="css-8mmkcg">
                                                    <path
                                                        d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="po-list p-3 mb-3 mb-md-4 mb-lg-5">
                                <div className="text-bold text-uppercase">Vietpost</div>
                                <div className="mt-2">Địa điểm pick hàng</div>
                            </div>
                        </Form>
                    </Col>
                    <div className="col-12 col-md-6 col-lg-7">
                        <div className="px-4 py-5 text-center">
                            <img src="https://vietpost.com.au/_next/static/map-56d9690d6c2b1c119e13d3099d161966.svg"
                                alt="" className="w-80" />
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Lookup;
