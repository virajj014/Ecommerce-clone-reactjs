import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { HiOutlineLocationMarker } from "react-icons/hi";
import SearchBar from './SearchBar';
import CountrySelector from './CountrySelector';
import AccountAndLists from './AccountAndLists';
import CartIndicator from './CartIndicator';

const Navbar = () => {

    const navigate = useNavigate()
    return (
        <div className='navbar'>
            <img src={logo} onClick={() => navigate('/')} />
            <div className='addressContainer'>
                <HiOutlineLocationMarker color='white' size={25} />
                <div className='addressContainer_in'>
                    <p>Deliver to Harshal</p>
                    <h3>Jabalpur 482002</h3>
                </div>
            </div>
            <SearchBar />
            <div className='right'>
                <CountrySelector />
                <div onClick={() => navigate('/login')}>
                    <AccountAndLists />
                </div>
                <div onClick={() => navigate('/cart')}>
                    <CartIndicator />
                </div>
            </div>
        </div>
    )
}

export default Navbar