import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/footer.png'

const Footer = () => {
    return (
        <div className='container mx-auto'>
            <div className='mt-10'>
                <footer
                    style={{
                        background: `url(${footer})`,
                        backgroundSize: 'cover'
                    }}
                    className="p-10 ">
                    <div className='footer '>
                        <div>
                            <span className="footer-title">Services</span>
                            <Link className="link link-hover">Branding</Link>
                            <Link className="link link-hover">Design</Link>
                            <Link className="link link-hover">Marketing</Link>
                            <Link className="link link-hover">Advertisement</Link>
                        </div>
                        <div>
                            <span className="footer-title">Company</span>
                            <Link className="link link-hover">About us</Link>
                            <Link className="link link-hover">Contact</Link>
                            <Link className="link link-hover">Jobs</Link>
                            <Link className="link link-hover">Press kit</Link>
                        </div>
                        <div>
                            <span className="footer-title">Legal</span>
                            <Link className="link link-hover">Terms of use</Link>
                            <Link className="link link-hover">Privacy policy</Link>
                            <Link className="link link-hover">Cookie policy</Link>
                        </div>
                    </div>
                    <div className='text-center mt-24'>
                        <p className='font-bold'>Copyright 2023 All Rights Reserved</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;