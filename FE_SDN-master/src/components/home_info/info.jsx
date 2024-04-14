import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Info = () => {
    return (
        <div className="home-info-section bg-primary text-white">
            <Container>
                <Row>
                    <Col xs={12} lg={6}>
                        <h1 className="text-bold text-center text-lg-left font-size-x-large my-5">
                            Vận chuyển hàng hóa về Việt Nam
                        </h1>
                        <div>
                            <Button variant="secondary" className="text-bold p-3 mb-4 mb-lg-5 mr-2 mr-sm-4">
                                ĐĂNG KÝ VẬN CHUYỂN NGAY
                            </Button>
                            <Button variant="secondary" className="text-bold p-3 mb-4 mb-lg-5">
                                BẢNG GIÁ DỊCH VỤ
                            </Button>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <p className="text-bold font-size-large mb-3 mt-lg-5">
                            Nhanh chóng, uy tín và chuyên nghiệp là những gì mà VIETPOST đang thực hiện đối với khách hàng. Liên hệ chúng tôi để được phục vụ:
                        </p>
                        <p className="font-size-x-large">Hotline: 0451818366</p>
                        <p className="font-size-x-large mb-5">Email: online@vietpost.com.au</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Info;
