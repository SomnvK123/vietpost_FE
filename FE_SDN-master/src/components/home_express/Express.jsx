import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Express = () => {
    return (
        <div className="home-express-section bg-primary text-white">
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1 className="text-bold text-center font-size-x-large font-size-lg-xx-large mt-5 mb-3">
                            Chuyển phát nhanh
                        </h1>
                        <div className="text-center font-size-large font-size-lg-x-large">Từ Australia đến 64 tỉnh thành tại Việt Nam</div>
                        <div>
                            <img src="https://vietpost.com.au/_next/static/express-4996162dc89416d24558e14d3959818f.svg" alt="" className="d-none d-sm-block w-max-100 mt-3 mb-3" />
                            <img src="https://vietpost.com.au/_next/static/express-m-34d96d9b32aa81152be434252130a64d.svg" alt="" className="d-sm-none w-max-100 mt-5 mb-5" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Express;
