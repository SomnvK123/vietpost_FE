import React, { useState } from 'react';
import { Button, Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import CustomToggle from '../Custome/CustomToggle';
// import './Header.css';


function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <header id="header" className="header">
                <div className="header-bg"></div>
                <div className="header-section">
                    <div className="nav-container container">
                        <div className="position-relative">
                            <Navbar expand="xl" variant="light">
                                <Navbar.Brand href="/">
                                    <img src="https://vietpost.com.au/_next/static/logo-header-d003d2174319c9c12a4071ecb632a963.svg" alt="VietPost Logo" />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-label="Toggle navigation" className="btn sidebar-toggle navbar-toggler collapsed" />
                                <Navbar.Collapse className="navbar-collapse collapse" id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <div className="navbar-nav">
                                            <div className="nav-item">
                                                <Nav.Link href="/" className="nav-link active">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.29 13.15" className="mr-1 d-none d-xl-inline">
                                                        <path fill="#f26b30" d="M8.64 0L0 5.17h3.15v7.98h3.64V7.64h3.7v5.51h3.65V5.17h3.15z"></path>
                                                    </svg>
                                                    Trang chủ
                                                </Nav.Link>
                                            </div>
                                            <div className="nav-item">
                                                <Nav.Link className="nav-link" href="#">Dịch vụ</Nav.Link>
                                            </div>
                                            <div className="nav-item">
                                                <Nav.Link className="nav-link" href="#">Bảng giá</Nav.Link>
                                            </div>
                                            <div className="nav-item">
                                                <Nav.Link className="nav-link" href="#">Chính sách</Nav.Link>
                                            </div>
                                            <div className="d-xl-none nav-item">
                                                <Nav.Link className="nav-link d-xl-none" href="#">Hướng dẫn</Nav.Link>
                                            </div>
                                            <div className="d-xl-none nav-item dropdown">
                                                <Dropdown show={isDropdownOpen} onToggle={handleToggle}>
                                                    <Dropdown.Toggle as="a" id="nav-home-dropdown" className="dropdown-toggle nav-link" role="button">
                                                        Hotline
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="tel:0987654321">0987654321</Dropdown.Item>
                                                        <Dropdown.Item href="tel:0123456789">0123456789</Dropdown.Item>
                                                        <Dropdown.Item href="#">Hotline 3</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="d-xl-none nav-item">
                                                <Nav.Link className="nav-link d-xl-none" href="#">Liên hệ</Nav.Link>
                                            </div>
                                            <div className="d-xl-none nav-item">
                                                <Nav.Link className="nav-link d-xl-none" href="#">Tin tức</Nav.Link>
                                            </div>
                                        </div>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <div className="top-button-container d-flex flex-row align-items-center justify-content-end">
                                <a className="link-btn d-none d-xl-block" href="#">Hướng dẫn</a>
                                <div className="header--top-links-dropdown d-none d-xl-block dropdown">
                                    <a className="text-dropdown-toggle link-btn user-select-none white dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                                        Hotline
                                        <svg viewBox="0 0 13.05 6.53" className="text-dropdown-toggle--icon">
                                            <path fill="#f26b30" d="M0 0l6.53 6.53L13.05 0z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <a className="link-btn d-none d-xl-block" href="#">Liên hệ</a>
                                <a className="link-btn d-none d-xl-block" href="#">Tin tức</a>
                                <Button variant="primary-light" className="ml-4 transport-registration-btn">Đăng ký vận chuyển</Button>
                                <Button variant="primary-light" className="ml-2">Đăng nhập</Button>
                            </div>
                            <div className="hot-button-container d-flex flex-row justify-content-end align-items-center">
                                <a className="btn-icon ml-4" href="#">
                                    <svg id="calculator_svg__Layer_1" x="0" y="0" viewBox="0 0 20.43 20.43">
                                        <style>{`.calculator_svg__st4 { fill: #fafbfc }`}</style>
                                        <path fill="#f26b30" d="M10.22 10.22v10.22H3.83A3.845 3.845 0 010 16.6v-6.39h10.22z"></path>
                                        <path d="M20.43 10.22v6.39c0 2.11-1.72 3.83-3.83 3.83h-6.39V10.22h10.22z"
                                            fill="#154476"></path>
                                        <path d="M20.43 3.83v6.39H10.22V0h6.39c2.11 0 3.82 1.72 3.82 3.83z" fill="#fdc113">
                                        </path>
                                        <path d="M10.22 0v10.22H0V3.83C0 1.72 1.72 0 3.83 0h6.39z" fill="#0a51a0"></path>
                                        <path className="calculator_svg__st4"
                                            d="M8.09 5.96H2.98c-.24 0-.43-.19-.43-.43s.19-.43.43-.43h5.11c.24 0 .43.19.43.43s-.2.43-.43.43z">
                                        </path>
                                        <path className="calculator_svg__st4"
                                            d="M5.53 8.51c-.24 0-.43-.19-.43-.43v-5.1c0-.24.19-.43.43-.43s.43.19.43.43v5.11c0 .23-.19.42-.43.42zM17.45 5.96H13.2c-.24 0-.43-.19-.43-.43s.19-.43.43-.43h4.26c.24 0 .43.19.43.43s-.2.43-.44.43zM7.24 17.88c-.13 0-.25-.06-.33-.16L3.5 13.46c-.15-.18-.12-.45.07-.6s.45-.12.6.07l3.41 4.26c.15.18.12.45-.07.6a.46.46 0 01-.27.09z">
                                        </path>
                                        <path className="calculator_svg__st4"
                                            d="M3.83 17.88c-.24 0-.43-.19-.43-.43 0-.1.03-.19.09-.27l3.41-4.26c.15-.18.41-.21.6-.07s.21.41.07.6l-3.41 4.26c-.08.11-.2.17-.33.17zM16.6 17.88c-.15 0-.29-.08-.37-.21l-2.55-4.26a.42.42 0 01.16-.58c.2-.11.45-.05.57.14l2.55 4.26c.12.2.06.46-.14.58a.34.34 0 01-.22.07z">
                                        </path>
                                    </svg>
                                    <span>Ước tính giá</span>
                                </a>
                                <a className="btn-icon ml-4" href="#">
                                    <svg id="location_svg__Layer_1" x="0" y="0" viewBox="0 0 21.29 22.6">
                                        <style>{`.location_svg__st0 { fill: #233973 } .location_svg__st2 { fill: #0a51a0 }`}</style>
                                        <path className="location_svg__st0"
                                            d="M5.75 6.91a.407.407 0 00-.4-.02L.23 9.39c-.14.06-.23.21-.23.36v12.43c0 .14.07.28.19.35a.428.428 0 00.4.02l5.12-2.5c.14-.07.23-.21.23-.37V7.26c0-.14-.07-.28-.19-.35zM15.98 6.91a.407.407 0 00-.4-.02l-5.12 2.5c-.14.07-.23.21-.23.37v12.43c0 .14.07.28.19.35a.428.428 0 00.4.02l5.12-2.5c.14-.07.23-.21.23-.37V7.26c0-.14-.07-.28-.19-.35z">
                                        </path>
                                        <path
                                            d="M15.37 4.7c0-2.6-2.1-4.7-4.7-4.7s-4.7 2.1-4.7 4.7c0 0-.12 4.73 4.7 9.55 4.82-4.82 4.7-9.55 4.7-9.55z"
                                            fill="#fbb042"></path>
                                        <path className="location_svg__st2"
                                            d="M21.06 9.38l-5.12-2.5a.392.392 0 00-.18-.04v13.31l4.93 2.41a.428.428 0 00.4-.02.42.42 0 00.19-.35V9.75c.01-.15-.08-.3-.22-.37zM10.64 9.29l-4.93-2.4c-.02-.01-.05-.02-.07-.03v13.26l4.82 2.44c.06.03.12.04.18.04V9.29z">
                                        </path>
                                        <path d="M10.74 0h-.07c-2.6 0-4.7 2.1-4.7 4.7 0 0-.12 4.73 4.7 9.55l.07-.07V0z"
                                            fill="#f89521"></path>
                                        <path d="M12.59 4.69a1.92 1.92 0 11-3.841-.001 1.92 1.92 0 013.841.001z"
                                            fill="#fff"></path>
                                    </svg>
                                    <span>Điểm gửi hàng</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>

    );
}

export default Header;
