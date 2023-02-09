import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/e-commerce.jpg'

const Navbar = () => {

    const menuItmes = <>
        <li className='font-bold text-[18px] '><Link to='/'>Home</Link></li>
        <li className='font-bold text-[18px]  '><Link to='/card'>Cart</Link></li>
    </>

    return (
        <div className='container mx-auto'>
            <div className="navbar  flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItmes}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl font-bold"><img className='h-20 w-20' src={img} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItmes}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;