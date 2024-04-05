import React from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
    return (
        <>
            <header id="header" className="header">
                <div className="header-bg"></div>
                <div className="header-section">
                    <div className="nav-container container">
                        <div className="position-relative">
                            <nav className="navbar navbar-expand-xl navbar-light">
                                <a className="navbar-brand" href="/">
                                    <img src="https://vietpost.com.au/_next/static/logo-header-d003d2174319c9c12a4071ecb632a963.svg" alt="VietPost Logo" />
                                </a>
                                <button type="button" aria-label="Toggle navigation" className="btn sidebar-toggle navbar-toggler collapsed">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                <div className="navbar-collapse collapse" id="basic-navbar-nav">
                                    <div className="navbar-nav">
                                        <div className="nav-item">
                                            <a className="nav-link active" href="/">
                                                <svg viewBox="0 0 17.29 13.15" className="mr-1 d-none d-xl-inline">
                                                    <path fill="#f26b30" d="M8.64 0L0 5.17h3.15v7.98h3.64V7.64h3.7v5.51h3.65V5.17h3.15z"></path>
                                                </svg>
                                                Trang chủ
                                            </a>
                                        </div>
                                        <div className="nav-item">
                                            <a className="nav-link" href="#">Dịch vụ</a>
                                        </div>
                                        <div className="nav-item">
                                            <a className="nav-link" href="#">Bảng giá</a>
                                        </div>
                                        <div className="nav-item">
                                            <a className="nav-link" href="#">Chính sách</a>
                                        </div>
                                        <div className="d-xl-none nav-item">
                                            <a className="nav-link" href="#">Hướng dẫn</a>
                                        </div>
                                        <div className="d-xl-none nav-item dropdown">
                                            <a aria-haspopup="true" aria-expanded="false" id="nav-home-dropdown" href="#" className="dropdown-toggle nav-link" role="button">Hotline</a>
                                        </div>
                                        <div className="d-xl-none nav-item">
                                            <a className="nav-link" href="#">Liên hệ</a>
                                        </div>
                                        <div className="d-xl-none nav-item">
                                            <a className="nav-link" href="#">Tin tức</a>
                                        </div>
                                    </div>
                                </div>
                            </nav>
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
                                <a className="btn btn-primary-light ml-4 transport-registration-btn" href="#">Đăng ký vận chuyển</a>
                                <a className="btn btn-primary-light d-block ml-2" href="#">Đăng nhập</a>
                            </div>
                            <div className="hot-button-container d-flex flex-row justify-content-end align-items-center">
                                {/* <a className="btn-icon-order-create" href="#">
                                <svg id="order-create_svg__Layer_1" x="0" y="0" viewBox="0 0 39.36 19.2">
                                    <style>{`.order-create_svg__st3 { fill: #233973 }`}</style>
                                    <path fill="#fbb042" d="M39.29 4.15c-.2-1.02-.83-1.9-1.71-2.42l-.09-.06a8.645 8.645 0 00-7.24-.7h-.01L8.51 10.02a.777.777 0 01-.99-.4l-.92-2-.01-.02c-.36-.67-1.1-1.01-1.83-.86-.91.19-1.5 1.11-1.32 2.05l.82 4.07c.33 1.63 1.75 2.76 3.32 2.76.21 0 .42-.02.64-.06l23.6-4.65c2.69-.24 5.18-1.65 6.82-3.85.62-.83.85-1.89.65-2.91z"></path>
                                    <path fill="#f89521" d="M39 3.27l-.16-.33-20.65 6.45-13.7 4.29.34.49c.64.91 1.68 1.44 2.75 1.44.21 0 .42-.02.64-.06l23.6-4.65c2.69-.24 5.18-1.65 6.82-3.85.81-1.09.95-2.54.36-3.78z"></path>
                                    <path fill="#0a51a0" d="M28.39 6.38L9.15.13C8.43-.1 7.66-.02 7.01.37c-.64.38-1.1 1.03-1.25 1.78-.05.24.05.48.26.61l12.01 7.54c.09.06.19.09.3.09.05 0 .1-.01.15-.02l9.9-2.88a.57.57 0 00.41-.55c0-.26-.16-.49-.4-.56z"></path>
                                    <path className="order-create_svg__st3" d="M38.98 3.24c-.31-.63-.8-1.16-1.4-1.51l-.09-.06A8.634 8.634 0 0032.31.52c-.13.01-.25.09-.32.2-.07.12-.08.26-.03.39l.01.03v.01l1.53 3.77c.07.17.22.27.39.27.04 0 .07-.01.11-.02l4.72-1.32c.12-.03.22-.12.28-.24.04-.12.04-.26-.02-.37zM6.31 19.2c-.19 0-.37-.14-.41-.34-.05-.23.09-.47.32-.52l5.74-1.31c.23-.05.45.1.51.33.05.23-.09.47-.32.52L6.4 19.19c-.03 0-.06.01-.09.01zM.42 15.46c-.19 0-.37-.14-.41-.34-.05-.23.09-.47.32-.52l9.16-2.09c.23-.05.45.09.51.33.05.23-.09.47-.32.52L.52 15.45c-.03.01-.07.01-.1.01zM23.87 8.78L6.52 1.73a.555.555 0 00-.71.28c-.13.27-.04.59.21.75l12.01 7.54c.09.06.19.09.3.09.05 0 .1-.01.15-.02l5.39-1.59z"></path>
                                </svg>
                                <span>Tạo vận đơn</span>
                            </a> */}
                                <a className="btn-icon ml-4" href="#">
                                    <svg id="calculator_svg__Layer_1" x="0" y="0" viewBox="0 0 20.43 20.43">
                                        <style>{`.calculator_svg__st4 { fill: #fafbfc }`}</style>
                                        <path fill="#f26b30" d="M10.22 10.22v10.22H3.83A3.845 3.845 0 010 16.6v-6.39h10.22z"></path>
                                        <path d="M20.43 10.22v6.39c0 2.11-1.72 3.83-3.83 3.83h-6.39V10.22h10.22z"
                                            fill="#154476"></path>
                                        <path d="M20.43 3.83v6.39H10.22V0h6.39c2.11 0 3.82 1.72 3.82 3.83z" fill="#fdc113">
                                        </path>
                                        <path d="M10.22 0v10.22H0V3.83C0 1.72 1.72 0 3.83 0h6.39z" fill="#0a51a0"></path>
                                        <path class="calculator_svg__st4"
                                            d="M8.09 5.96H2.98c-.24 0-.43-.19-.43-.43s.19-.43.43-.43h5.11c.24 0 .43.19.43.43s-.2.43-.43.43z">
                                        </path>
                                        <path class="calculator_svg__st4"
                                            d="M5.53 8.51c-.24 0-.43-.19-.43-.43v-5.1c0-.24.19-.43.43-.43s.43.19.43.43v5.11c0 .23-.19.42-.43.42zM17.45 5.96H13.2c-.24 0-.43-.19-.43-.43s.19-.43.43-.43h4.26c.24 0 .43.19.43.43s-.2.43-.44.43zM7.24 17.88c-.13 0-.25-.06-.33-.16L3.5 13.46c-.15-.18-.12-.45.07-.6s.45-.12.6.07l3.41 4.26c.15.18.12.45-.07.6a.46.46 0 01-.27.09z">
                                        </path>
                                        <path class="calculator_svg__st4"
                                            d="M3.83 17.88c-.24 0-.43-.19-.43-.43 0-.1.03-.19.09-.27l3.41-4.26c.15-.18.41-.21.6-.07s.21.41.07.6l-3.41 4.26c-.08.11-.2.17-.33.17zM16.6 17.88c-.15 0-.29-.08-.37-.21l-2.55-4.26a.42.42 0 01.16-.58c.2-.11.45-.05.57.14l2.55 4.26c.12.2.06.46-.14.58a.34.34 0 01-.22.07z">
                                        </path>
                                    </svg>
                                    <span>Ước tính giá</span>
                                </a>
                                <a className="btn-icon ml-4" href="#">
                                    <svg id="location_svg__Layer_1" x="0" y="0" viewBox="0 0 21.29 22.6">
                                        <style>{`.location_svg__st0 { fill: #233973 } .location_svg__st2 { fill: #0a51a0 }`}</style>
                                        <path class="location_svg__st0"
                                            d="M5.75 6.91a.407.407 0 00-.4-.02L.23 9.39c-.14.06-.23.21-.23.36v12.43c0 .14.07.28.19.35a.428.428 0 00.4.02l5.12-2.5c.14-.07.23-.21.23-.37V7.26c0-.14-.07-.28-.19-.35zM15.98 6.91a.407.407 0 00-.4-.02l-5.12 2.5c-.14.07-.23.21-.23.37v12.43c0 .14.07.28.19.35a.428.428 0 00.4.02l5.12-2.5c.14-.07.23-.21.23-.37V7.26c0-.14-.07-.28-.19-.35z">
                                        </path>
                                        <path
                                            d="M15.37 4.7c0-2.6-2.1-4.7-4.7-4.7s-4.7 2.1-4.7 4.7c0 0-.12 4.73 4.7 9.55 4.82-4.82 4.7-9.55 4.7-9.55z"
                                            fill="#fbb042"></path>
                                        <path class="location_svg__st2"
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
