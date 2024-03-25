import React from 'react';
import logo from '../../assets/images/logo.png'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="pb-16 pt-18">
            <div className="container">
                <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
                    <div>
                        <img src={logo} alt="" />
                        <p className="text-[16px] leading-7 font-[1000] text-textColor mt-4">
                            Copyright 0 {year} developed by Vaibhav Earande all right reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;