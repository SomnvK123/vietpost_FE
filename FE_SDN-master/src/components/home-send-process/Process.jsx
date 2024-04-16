import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Process = () => {
    return (
        <div className="home-send-process-section">
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-bold text-primary text-uppercase text-center font-size-x-large font-size-lg-xx-large mt-5">
                            QUY TRÌNH GỬI HÀNG
                        </h1>
                        <div className="text-bold text-uppercase text-center font-size-large mt-3 mb-5">
                            ÁP DỤNG HÀNG GỬI TỪ ÚC VỀ VIỆT NAM
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="px-0">
                        <div className="d-flex flex-column flex-lg-row pl-3 mb-2">

                            <div className="send-process-item-wrapper pr-3 mb-3 d-flex align-items-stretch">
                                <div className="bg-white flex-grow-1 flex-shrink-1">
                                    <div className="number bg-primary">
                                        <div className="text-bold text-center text-white font-size-large">1</div>
                                    </div>
                                    <div className="send-process-item px-3 pb-3">
                                        <div className="image text-center mt-3">
                                            <img src="https://vietpost.com.au/_next/static/logon-11b32ac084a6dbd2cf42c3e673b28edb.svg" alt="" />
                                        </div>
                                        <div className="sign text-center mt-3">
                                            <img src="https://vietpost.com.au/_next/static/multiply-581c8ebba42ea0be11135f66afe59cc3.svg" alt="" />
                                        </div>
                                        <div className="text-bold mt-3">Đăng ký tài khoản</div>
                                        <div className="mt-3">
                                            <p>Quý khách cần đăng ký một tài khoản online trên website trước khi thực hiện tạo vận đơn</p>
                                        </div>
                                        <div className="mt-3 text-center">
                                            <Button variant="secondary" className="text-bold text-uppercase py-2">Đăng ký tài khoản</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="send-process-item-wrapper pr-3 mb-3 d-flex align-items-stretch">
                                <div className="bg-white flex-grow-1 flex-shrink-1">
                                    <div className="number bg-primary">
                                        <div className="text-bold text-center text-white font-size-large">2</div>
                                    </div>
                                    <div className="send-process-item px-3 pb-3">
                                        <div className="image text-center mt-3">
                                            <img src="https://vietpost.com.au/_next/static/check-list-c7130f794082ca7be233cf20e18590b3.svg" alt="" />
                                        </div>
                                        <div className="sign text-center mt-3">
                                            <img src="https://vietpost.com.au/_next/static/plus-be8ee6bcf9b10efd17b7066c93f6e48a.svg" alt="" />
                                        </div>
                                        <div className="text-bold mt-3">Khai báo hàng gửi</div>
                                        <div className="mt-3">
                                            <p>Sau khi mở tài khoản online thành công, Quý khách cần đăng nhập và thực hiện khai báo gửi hàng theo mẫu form đã được cung cấp.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="send-process-item-wrapper pr-3 mb-3 d-flex align-items-stretch">
                                <div className="bg-white flex-grow-1 flex-shrink-1">
                                    <div className="number bg-primary">
                                        <div className="text-bold text-center text-white font-size-large">3</div>
                                    </div>
                                    <div className="send-process-item px-3 pb-3">
                                        <div className="image text-center mt-3">
                                            <img src="https://vietpost.com.au/_next/static/payment-hand-b3473d462a8ee325bf622c7bafc84cfd.svg" alt="" />
                                        </div>
                                        <div className="sign text-center mt-3">
                                            <img src="https://vietpost.com.au/_next/static/plus-be8ee6bcf9b10efd17b7066c93f6e48a.svg" alt="" />
                                        </div>
                                        <div className="text-bold mt-3">Thanh toán</div>
                                        <div className="mt-3">
                                            <p>Quý khách sẽ nhận được thông báo gửi hàng qua email và thực hiện thanh toán tiền vận chuyển.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="send-process-item-wrapper pr-3 mb-3 d-flex align-items-stretch">
                                <div className="bg-white flex-grow-1 flex-shrink-1">
                                    <div className="number bg-primary">
                                        <div className="text-bold text-center text-white font-size-large">4</div>
                                    </div>
                                    <div className="send-process-item px-3 pb-3">
                                        <div className="image text-center mt-3">
                                            <img src="https://vietpost.com.au/_next/static/transport-car-572e0606e5218054a1205cc7275158c5.svg" alt="" />
                                        </div>
                                        <div className="sign text-center mt-3">
                                            <img src="https://vietpost.com.au/_next/static/plus-be8ee6bcf9b10efd17b7066c93f6e48a.svg" alt="" />
                                        </div>
                                        <div className="text-bold mt-3">Gửi hàng</div>
                                        <div className="mt-3">
                                            <p>Hàng hóa cần được đóng gói cẩn thận trước khi gửi đến điểm gom hàng hoặc giao cho nhân viên pick hàng.</p>
                                        </div>
                                        <div className="mt-3 text-center">
                                            <Button variant="secondary" className="text-bold text-uppercase py-2">Quy cách đóng gói</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="send-process-item-wrapper pr-3 mb-3 d-flex align-items-stretch">
                                <div className="bg-white flex-grow-1 flex-shrink-1">
                                    <div className="number bg-primary">
                                        <div className="text-bold text-center text-white font-size-large">5</div>
                                    </div>
                                    <div className="send-process-item px-3 pb-3">
                                        <div className="image text-center mt-3">
                                            <img src="https://vietpost.com.au/_next/static/receive-014a476ed64a0543f660c259c5cdc484.svg" alt="" />
                                        </div>
                                        <div className="sign text-center mt-3">
                                            <img src="https://vietpost.com.au/_next/static/plus-be8ee6bcf9b10efd17b7066c93f6e48a.svg" alt="" />
                                        </div>
                                        <div className="text-bold mt-3">Nhận hàng tại Việt Nam</div>
                                        <div className="mt-3">
                                            <p>Hàng sẽ được giao cho người nhận từ 7 – 10 ngày làm việc kể từ ngày hàng lên máy bay rời khỏi Úc. Quý khách có thể theo dõi kiện hàng trực tiếp trên website của công ty.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Process;