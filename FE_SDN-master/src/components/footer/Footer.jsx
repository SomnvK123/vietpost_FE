import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col xs={12} sm={8} md={3} className="offset-sm-2 offset-md-0" style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
                        <div className="intro">
                            <img src="https://vietpost.com.au/_next/static/logo-header-d003d2174319c9c12a4071ecb632a963.svg"
                                alt="" />
                            <div className="desc">Vietpost là dịch vụ Thương mại điện tử &amp;Logistic của Vpost. Đây là
                                dịch vụ vận chuyển quốc tế mang đến cho bạn lựa chọn mua sắm thoải mái và chuyển các mặt
                                hàng từ các cửa hàng của Úc, Trung Quốc, Nhật Bản, Châu Âu và Hoa Kỳ về Việt Nam với mức
                                giá cạnh tranh!</div>
                        </div>
                    </Col>
                    <Col xs={12} sm={8} md={3} className="offset-sm-2 offset-md-0">
                        <div className="heading">Chính sách</div>
                        <ul className="list-unstyled links-list">
                            <li>
                                <a className="gf-link" href="https://vietpost.com.au/help/chinh-sach-den-bu">
                                    <img src="https://vietpost.com.au/_next/static/right-angle-c4b7d5566fb4b356822df3dd87556b1f.svg" alt="" />
                                    <span>Chính sách đền bù</span>
                                </a>
                            </li>
                            <li>
                                <a className="gf-link" href="https://www.shirogane.vn">
                                    <img src="https://vietpost.com.au/_next/static/right-angle-c4b7d5566fb4b356822df3dd87556b1f.svg" alt="" />
                                    <span>Vận chuyển Việt - Úc</span>
                                </a>
                            </li>
                            <li>
                                <a className="gf-link"
                                    href="https://vietpost.com.au/help/huong-dan-dang-ky-tai-khoan-tren-vietpostcomau">
                                    <img src="https://vietpost.com.au/_next/static/right-angle-c4b7d5566fb4b356822df3dd87556b1f.svg" alt="" />
                                    <span>Hướng dẫn đăng ký tài khoản</span>
                                </a>
                            </li>
                            <li>
                                <a className="gf-link"
                                    href="https://vietpost.com.au/help/huong-dan-tao-van-don-tai-vietpostcomau">
                                    <img src="https://vietpost.com.au/_next/static/right-angle-c4b7d5566fb4b356822df3dd87556b1f.svg" alt="" />
                                    <span>Hướng dẫn tạo vận đơn</span>
                                </a>
                            </li>
                            <li>
                                <a className="gf-link" href="https://vietpost.com.au/help/quy-dinh-chung">
                                    <img src="https://vietpost.com.au/_next/static/right-angle-c4b7d5566fb4b356822df3dd87556b1f.svg" alt="" />
                                    <span>Chính sách riêng tư</span>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={8} md={3} className="offset-sm-2 offset-md-0">
                        <div className="heading">Về chúng tôi</div>
                        <ul className="list-unstyled links-list">
                            <li>
                                <a className="gf-link" href="https://zalo.me/g/zaqhuu493">
                                    <img src="https://vietpost.com.au/_next/static/right-angle-c4b7d5566fb4b356822df3dd87556b1f.svg" alt="" />
                                    <span>Group hỗ trợ zalo</span>
                                </a>
                            </li>
                            <li>
                                <a className="gf-link" href="https://tocamart.com">
                                    <img src="https://vietpost.com.au/_next/static/right-angle-c4b7d5566fb4b356822df3dd87556b1f.svg" alt="" />
                                    <span>Dịch vụ Order hàng Úc</span>
                                </a>
                            </li>
                            <li>
                                <a className="gf-link" href="/#how-it-works">
                                    <img src="https://vietpost.com.au/_next/static/right-angle-c4b7d5566fb4b356822df3dd87556b1f.svg" alt="" />
                                    <span>Phương thức hoạt động</span>
                                </a>
                            </li>
                            <li>
                                <a className="gf-link" href="/#about-us">
                                    <img src="https://vietpost.com.au/_next/static/right-angle-c4b7d5566fb4b356822df3dd87556b1f.svg" alt="" />
                                    <span>Giới thiệu về Vietpost</span>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={8} md={3} className="offset-sm-2 offset-md-0">
                        <div className="heading">An Inch Aways</div>
                        <div className="address">
                            <p>
                                VietPost Pty Ltd<br />Lot. 06 , 14-16 Belmore Road, Punchbowl NSW 2196
                            </p>
                            <p>Tel:
                                0451818366
                            </p>
                            <p>
                                Email:
                                <a href="#" className="__cf_email__"
                                    data-cfemail="721d1c1e1b1c1732041b1706021d01065c111d1f5c1307">online@vietpost.com.au</a>
                            </p>
                            <p>8am to 6pm</p>
                            <p>7 Days a Week</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="payment">
                        <img src="https://vietpost.com.au/_next/static/visa-14b038ba4bc83aa4cb762a85c87652ea.svg"
                            alt="Visa" />
                        <img src="https://vietpost.com.au/_next/static/mastercard-292021d0fa9109e19ed85e37f54143c8.svg"
                            alt="Mastercard" />
                        <img src="https://vietpost.com.au/_next/static/paypal-4d8f620a87eb3a2748cce6c788c88627.svg"
                            alt="Paypal" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={8} md={3} className="offset-md-9 offset-sm-2 share">
                        <img src="https://vietpost.com.au/_next/static/facebook-6909aae3cd905604189e27e2d47facda.svg"
                            alt="Facebook" />
                        <img src="https://vietpost.com.au/_next/static/twitter-ab343e12db6f3e59ed0fef9338c5cc1a.svg"
                            alt="Twitter" />
                        <img src="https://vietpost.com.au/_next/static/linked-in-1e9e773028fcbc2b1b3db43402e7e849.svg"
                            alt="Linked In" />
                        <img src="https://vietpost.com.au/_next/static/instargram-a926322e396c031ffaf7708af6a95f45.svg"
                            alt="Instagram" />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
