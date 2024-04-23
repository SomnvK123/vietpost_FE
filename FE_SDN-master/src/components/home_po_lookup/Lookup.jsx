import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import styled from '@emotion/styled';
// import './Lookup.css';

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

const provinces = [
    { id: 1, name: 'Hà Nội' },
    { id: 2, name: 'Hồ Chí Minh' },
    { id: 3, name: 'Đà Nẵng' },
];

const districtsByProvince = {
    'Hà Nội': ['Ba Đình', 'Hoàn Kiếm', 'Hai Bà Trưng', 'Đống Đa', 'Tây Hồ'],
    'Hồ Chí Minh': ['Quận 1', 'Quận 3', 'Quận 5', 'Quận 10', 'Quận Bình Thạnh'],
    'Đà Nẵng': ['Quận Hải Châu', 'Quận Thanh Khê', 'Quận Sơn Trà', 'Quận Ngũ Hành Sơn', 'Quận Liên Chiểu'],
};

const Lookup = () => {
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [districts, setDistricts] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleProvinceChange = (event) => {
        const province = event.target.value; //lấy giá trị province
        setSelectedProvince(province); // cập nhật giá trị biến
        const districts = districtsByProvince[province] || []; //lấy danh sách districts từ province tương ứng
        setDistricts(districts); // cập nhất giá trị biến

        if (districts.length > 0) { // ktra ko rỗng
            setSelectedDistrict(districts[0]); // lấy districts đầu tiên
        } else {
            setSelectedDistrict(''); // nếu rỗng thì xóa.....
        }
    };

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
                                    <Control style={{ width: '100%', position: 'relative', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                                        <div style={{ cursor: 'pointer', width: '100%' }}>
                                            {selectedProvince ? null : (
                                                <Placeholder>Chọn Bang/Lãnh thổ</Placeholder> // Placeholder cho Bang/Lãnh thổ
                                            )}
                                            <div style={{ position: 'relative', cursor: 'pointer', width: '100%' }}>
                                                <select
                                                    id="react-select-province-input"
                                                    value={selectedProvince}
                                                    onChange={handleProvinceChange}
                                                    onClick={toggleDropdown}
                                                    onBlur={() => setShowDropdown(false)}
                                                    style={{
                                                        boxSizing: 'content-box',
                                                        width: '100%', // Chiều rộng đầy đủ
                                                        background: 'none',
                                                        border: '0',
                                                        fontSize: 'inherit',
                                                        opacity: '1',
                                                        outline: 'none',
                                                        padding: '0',
                                                        color: 'inherit',
                                                        overflowY: 'auto',
                                                        appearance: 'none',
                                                    }}
                                                >
                                                    {selectedProvince ? null : <option value="" style={{ width: '100%' }}></option>}
                                                    {provinces.map((province) => (
                                                        <option key={province.id} value={province.name}>{province.name}</option>
                                                    ))}
                                                </select>
                                                <IndicatorSvg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                                                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                                </IndicatorSvg>
                                            </div>
                                        </div>
                                    </Control>
                                    <IndicatorSeparator></IndicatorSeparator>
                                    <IndicatorContainer></IndicatorContainer>
                                </Containerr>
                            </Form.Group>
                            <Form.Group>
                                <label>Vùng đô thị</label>
                                <Containerx>
                                    <A11yTextt aria-live="polite" aria-atomic="false" aria-relevant="additions text"></A11yTextt>
                                    <Controll style={{ width: '100%', position: 'relative', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                                        <Placeholderr>{selectedDistrict ? null : 'Chọn Vùng đô thị'}</Placeholderr>
                                        <div className="css-1g6gooi" style={{ cursor: 'pointer', width: '100%' }}>
                                            {selectedDistrict ? null : (
                                                <Placeholder>Chọn Vùng đô thị</Placeholder> // Placeholder cho Vùng đô thị
                                            )}
                                            <div style={{ position: 'relative', cursor: 'pointer', width: '100%' }}>
                                                <select
                                                    id="react-select-district-input"
                                                    value={selectedDistrict}
                                                    onChange={(e) => setSelectedDistrict(e.target.value)}
                                                    onClick={toggleDropdown}
                                                    onBlur={() => setShowDropdown(false)}
                                                    style={{
                                                        boxSizing: 'content-box',
                                                        width: '100%', // Chiều rộng đầy đủ
                                                        background: 'none',
                                                        border: '0',
                                                        fontSize: 'inherit',
                                                        opacity: '1',
                                                        outline: 'none',
                                                        padding: '0',
                                                        color: 'inherit',
                                                        overflowY: 'auto',
                                                        appearance: 'none',
                                                    }}
                                                >
                                                    {selectedDistrict ? null : <option value=""></option>}
                                                    {districts.map((district, index) => (
                                                        <option key={index} value={district}>{district}</option>
                                                    ))}
                                                </select>
                                                <IndicatorSvg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                                                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                                </IndicatorSvg>
                                            </div>
                                        </div>
                                    </Controll>
                                    <IndicatorSeparatorr></IndicatorSeparatorr>
                                    <IndicatorContainerr></IndicatorContainerr>
                                </Containerx>
                            </Form.Group>
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
        </div >
    );
};


export default Lookup;