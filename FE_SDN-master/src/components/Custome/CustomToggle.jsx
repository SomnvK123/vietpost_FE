import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href="/#"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </a>
));

export default CustomToggle;
