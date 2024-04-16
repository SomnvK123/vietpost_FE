import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';



const Delivery = () => {

    return (
        <>
            <div className="home-delivery-section">
                <div className="anchor" id="how-it-works"></div>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-bold text-primary text-uppercase text-center font-size-x-large font-size-lg-xx-large my-5">
                                GIAO HÀNG TIẾT KIỆM &amp; THÔNG MINH
                            </h1>
                        </Col>
                    </Row>
                    <Row className="pl-3">
                        <Col xs={12} sm={6} lg={3} className="pl-0 pr-3 mb-3 d-flex align-items-stretch">
                            <div className="delivery-item text-center cursor-pointer p-3 p-lg-4 p-xl-5">
                                <div className="image">
                                    <img src="https://vietpost.com.au/_next/static/global-aa53b2fc3cdf21a31acd48787549c44f.svg" alt="" />
                                </div>
                                <div className="text-bold mt-3">Nhiều điểm gửi hàng</div>
                                <div className="mt-3">Công ty có hệ thống đại lý gom hàng ở tất cả các tiểu bang của Úc.</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="pl-0 pr-3 mb-3 d-flex align-items-stretch">
                            <div className="delivery-item text-center cursor-pointer p-3 p-lg-4 p-xl-5">
                                <div className="image">
                                    <img src="https://vietpost.com.au/_next/static/cost-13d0121319ef94ccabca06dc636fd848.svg" alt="" />
                                </div>
                                <div className="text-bold mt-3">Cước phí cạnh tranh</div>
                                <div className="mt-3">Vận chuyển bằng máy bay chuyên dụng, kết hợp mạng lưới vận chuyển từ các đối tác lớn giúp Vietpost cung cấp dịch vụ vận chuyển nhanh với giá cước cạnh tranh.</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="pl-0 pr-3 mb-3 d-flex align-items-stretch">
                            <div className="delivery-item text-center cursor-pointer p-3 p-lg-4 p-xl-5">
                                <div className="image">
                                    <img src="https://vietpost.com.au/_next/static/payment-248583dfc45304c823157e186f4f8300.svg" alt="" />
                                </div>
                                <div className="text-bold mt-3">Thanh toán an toàn, linh hoạt</div>
                                <div className="mt-3">Đa dạng các phương thức thanh toán: chuyển khoản, visa, trực tiếp... giúp khách hàng có thêm nhiều lựa chọn.</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="pl-0 pr-3 mb-3 d-flex align-items-stretch">
                            <div className="delivery-item text-center cursor-pointer p-3 p-lg-4 p-xl-5">
                                <div className="image">
                                    <img src="https://vietpost.com.au/_next/static/tracking-18c8c3e5b6d311d85f1d0dd595b73738.svg" alt="" />
                                </div>
                                <div className="text-bold mt-3">Kiểm soát hành trình vận đơn</div>
                                <div className="mt-3">Thông tin đến khách hàng hành trình của vận đơn tại từng trạm trung chuyển</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </ >
    );
};

export default Delivery;