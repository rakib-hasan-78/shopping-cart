import React from 'react';
import FooterNav from './../FooterNav/FooterNav';
import Divider from './../Divider/Divider';
import Copy from './../Copy/Copy';

const Footer = ({children, className}) => {
    return (
        <footer className={`w-full h-auto ${className}`}>
            <main className="main flex flex-col items-center justify-center">
                {children}
                <Divider />
                <FooterNav />
                <Divider />
                <Copy />
            </main>
        </footer>
    );
};

export default Footer;