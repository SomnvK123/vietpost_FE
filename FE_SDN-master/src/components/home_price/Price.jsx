import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from '@emotion/styled';
import './Price.css';

// Styled component for the container with class "css-2b097c-container"
const StyledContainer = styled.div`
    position: relative;
    box-sizing: border-box;
`;

// Styled component for the invisible text span
const InvisibleTextSpan = styled.span`
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

// Styled component for the control container
const ControlContainer = styled.div`
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

// Styled component for the input container
const InputContainer = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    padding: 2px 8px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
`;

// Styled component for the indicator separator
const IndicatorSeparator = styled.span`
    align-self: stretch;
    background-color: hsl(0, 0%, 80%);
    margin-bottom: 8px;
    margin-top: 8px;
    width: 1px;
    box-sizing: border-box;
`;

// Styled component for the indicator container
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

// Styled component for the SVG icon
const SvgIcon = styled.svg`
    display: inline-block;
    fill: currentColor;
    line-height: 1;
    stroke: currentColor;
    stroke-width: 0;
`;

// Styled component for the container with class "css-2b097c-container"
const StyledContainerr = styled.div`
    position: relative;
    box-sizing: border-box;
`;

// Styled component for the invisible text span
const InvisibleTextSpann = styled.span`
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

// Styled component for the control container
const ControlContainerr = styled.div`
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

// Styled component for the input container
const InputContainerr = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    padding: 2px 8px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
`;

// Styled component for the indicator separator
const IndicatorSeparatorr = styled.span`
    align-self: stretch;
    background-color: hsl(0, 0%, 80%);
    margin-bottom: 8px;
    margin-top: 8px;
    width: 1px;
    box-sizing: border-box;
`;

// Styled component for the indicator container
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

// Styled component for the SVG icon
const SvgIconn = styled.svg`
    display: inline-block;
    fill: currentColor;
    line-height: 1;
    stroke: currentColor;
    stroke-width: 0;
`;

const Price = () => {
    const [weight, setWeight] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [estimatedPrice, setEstimatedPrice] = useState('');

    const handleCalculatePrice = () => {
        // For simplicity, let's assume the price is calculated based on weight * (length + width + height)
        const calculatedPrice = weight * (parseInt(length) + parseInt(width) + parseInt(height));
        setEstimatedPrice(calculatedPrice);
    };

    const provinces = [
        'Hanoi',
        'Ho Chi Minh City',
        'Da Nang',
        'Hai Phong',
        'Can Tho',
        'Quang Ninh',
        'Hai Duong',
        'Thanh Hoa',
        'Nghe An',
        'Ha Tinh',
        'Quang Binh',
        'Quang Tri'
    ];

    const [selectedLocation, setSelectedLocation] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

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
                                <StyledContainer>
                                    <InvisibleTextSpan aria-live="polite" aria-atomic="false" aria-relevant="additions text"></InvisibleTextSpan>
                                    <ControlContainer>
                                        <InputContainer>
                                            <div className=" css-1wa3eu0-placeholder"></div>
                                            <div className="css-1g6gooi">
                                                <div className="" style={{ display: 'inline-block' }}>
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
                                                            border: '0',
                                                            fontSize: 'inherit',
                                                            opacity: '1',
                                                            outline: 'none',
                                                            padding: '0',
                                                            color: 'inherit'
                                                        }}
                                                    />
                                                    <div style={{ position: 'absolute', top: '0', left: '0', visibility: 'hidden', height: '0', overflow: 'scroll', whiteSpace: 'pre' }}></div>
                                                </div>
                                            </div>
                                        </InputContainer>
                                        <IndicatorContainer aria-hidden="true">
                                            <SvgIcon height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                                                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                            </SvgIcon>
                                        </IndicatorContainer>
                                    </ControlContainer>
                                </StyledContainer>
                            </div>
                            <div className="form-group">
                                <label className="text-bold">Nơi nhận *</label>
                                <StyledContainerr>
                                    <InvisibleTextSpann aria-live="polite" aria-atomic="false" aria-relevant="additions text"></InvisibleTextSpann>
                                    <ControlContainerr>
                                        <InputContainerr>
                                            <div className="css-1wa3eu0-placeholder"></div>
                                            <div
                                                className="css-1g6gooi"
                                                style={{ position: 'relative', cursor: 'pointer' }}
                                                onClick={toggleDropdown} // Show dropdown when clicking anywhere in the container
                                            >
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <select
                                                        id="react-select-receiveLocation-input"
                                                        tabIndex="0"
                                                        aria-autocomplete="list"
                                                        style={{
                                                            flex: 1,
                                                            background: 'none',
                                                            border: 'none',
                                                            fontSize: 'inherit',
                                                            opacity: '0.7', 
                                                            outline: 'none', 
                                                            padding: '0',
                                                            color: 'inherit'
                                                        }}
                                                        onChange={(e) => handleLocationChange(e.target.value)}
                                                        value={selectedLocation}
                                                    >
                                                        <option value=""></option>
                                                        {provinces.map((province, index) => (
                                                            <option key={index} value={province}>
                                                                {province}
                                                            </option>
                                                        ))}
                                                    </select>

                                                    <div
                                                        style={{
                                                            cursor: 'pointer',
                                                            marginLeft: '10px' // Adjust spacing as needed
                                                        }}
                                                    >
                                                        <SvgIcon height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                                                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                                        </SvgIcon>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        top: '100%',
                                                        left: 0,
                                                        visibility: showDropdown ? 'visible' : 'hidden', // Show/hide dropdown based on state
                                                        zIndex: 1,
                                                        background: 'white',
                                                        border: '1px solid #ccc',
                                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                                        borderRadius: '4px',
                                                        marginTop: '4px',
                                                        width: '100%',
                                                        maxHeight: '200px',
                                                        overflowY: 'auto'
                                                    }}
                                                >
                                                    {/* Dropdown options */}
                                                    {showDropdown &&
                                                        provinces.map((province, index) => (
                                                            <div key={index} onClick={() => setSelectedLocation(province)}>
                                                                {province}
                                                            </div>
                                                        ))}
                                                </div>
                                            </div>
                                        </InputContainerr>
                                    </ControlContainerr>
                                </StyledContainerr>
                            </div>
                            <div className="form-group">
                                <label className="text-bold">Trọng lượng *</label>
                                <div className="w-100 wrapped-input">
                                    <input
                                        type="number"
                                        name="weight"
                                        maxLength="10"
                                        placeholder="kg"
                                        className="form-control wrapped-input--input"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="w-33 mr-2">
                                    <div className="form-group">
                                        <label className="text-bold">Dài *</label>
                                        <div className="w-100 wrapped-input">
                                            <input
                                                type="number"
                                                name="length"
                                                maxLength="10"
                                                placeholder="cm"
                                                className="form-control wrapped-input--input"
                                                value={length}
                                                onChange={(e) => setLength(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-33 mr-2">
                                    <div className="form-group">
                                        <label className="text-bold">Rộng *</label>
                                        <div className="w-100 wrapped-input">
                                            <input
                                                type="number"
                                                name="width"
                                                maxLength="10"
                                                placeholder="cm"
                                                className="form-control wrapped-input--input"
                                                value={width}
                                                onChange={(e) => setWidth(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-33">
                                    <div className="form-group">
                                        <label className="text-bold">Cao *</label>
                                        <div className="w-100 wrapped-input">
                                            <input
                                                type="number"
                                                name="height"
                                                maxLength="10"
                                                placeholder="cm"
                                                className="form-control wrapped-input--input"
                                                value={height}
                                                onChange={(e) => setHeight(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 mb-3">
                                <button
                                    type="button"
                                    className="btn btn-secondary text-bold text-uppercase py-3 w-100"
                                    onClick={handleCalculatePrice}
                                >
                                    ƯỚC TÍNH GIÁ (AUD)
                                </button>
                            </div>
                            <div className="form-group">
                                <label className="text-bold">Giá ước tính </label>
                                <div className="w-100 wrapped-input">
                                    <input
                                        type="text"
                                        disabled
                                        value={estimatedPrice}
                                        placeholder="AUD"
                                        className="form-control wrapped-input--input"
                                    />
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
