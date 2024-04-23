import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import './About.css';

const About = () => {
    return (
        <div className="home-about-us-section bg-white">
            <div className="anchor" id="about-us"></div>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-bold text-primary font-size-x-large font-size-lg-xx-large text-xl-center py-4">
                            VỀ CHÚNG TÔI
                        </h1>
                        <div className="html-content ql-editor html-content--block mb-2">
                            <p>
                                <em>Tại Vietpost, sứ mệnh của chúng tôi là cung cấp dịch vụ vận chuyển xuất sắc cho
                                    khách hàng và chúng tôi tự hào về sự chuyên nghiệp, tận tâm của mình.</em>
                            </p>
                            <p>
                                <em>Phạm vi dịch vụ của chúng tôi bao gồm nhưng không giới hạn các dịch vụ
                                    chuyển phát hàng hóa quốc tế, chuyển tiếp hàng hóa, vận chuyển hàng thương mại điện
                                    tử.... Đặc biệt, chúng tôi được ra đời nhằm đáp ứng nhu cầu vận chuyển hàng
                                    hóa từ Úc về Việt nam cho các kiều bào, du học sinh đang sinh sống tại Úc cũng
                                    như những khách hàng đang ở tại Việt Nam và có nhu cầu sử dụng, vận chuyển hàng
                                    hóa từ Úc về đến Việt Nam</em>
                            </p>
                            <p>
                                <em>Phương châm của Vietpost là lấy chữ TÍN trong kinh doanh là yếu tố đặc biệt
                                    quan trọng góp phần thành công của chúng tôi và để luôn đảm bảo quyền lợi của
                                    khách hàng.</em>
                            </p>
                        </div>
                        <div>
                            <Image src="https://vietpost.com.au/_next/static/about-us-6c979effed40f219cfdaca0f85deb9ac.svg"
                                alt="" className="d-none d-sm-block w-max-100 mt-5 mb-3" />
                            <Image src="https://vietpost.com.au/_next/static/about-us-m-0481ffc90ae51d35e2ee96b703948c75.svg"
                                alt="" className="d-sm-none w-max-100 mt-5 mb-3" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
