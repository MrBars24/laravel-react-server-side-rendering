import React, { useState } from 'react'
import { MenuItems } from "./MenuItems"
// import AuthButton from "../Auth/AuthButton";
import './Navbar.css'
import logo from '../../assets/images/logo/logo.png'
import { Link ,withRouter } from 'react-router-dom';
import cartIcon from "../../assets/cart-arrow-down-solid.svg";
import { useStateValue } from "../../context";

const Navbar = ({history}) => {
    const [clicked, setClicked] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    // const [{cart}] = useStateValue();

    const handleClick = (item = [], isParent = true) => {
        if (isParent) {
            setClicked(!clicked);
        }
        if (!item.external) {
            history.push(item.url);
        } else {
            window.location.href = item.url;
        }
    }

    return(
        <div className = "nav-bg-color">
        <nav className="NavbarItems container">
            <a href = "https://pogs.ph/"> <img className="navbar-logo "  src = {logo} alt = "pogs.ph"/></a>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-hamburger'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key = {index}>
                            <a className = {item.cName} onClick={(e) => handleClick(item)}>
                                {item.title}
                             </a>
                            {item.children ? (
                                <ul className = {dropdown ? 'show' : ' '}>
                                    {item.children.map((i, index) => {
                                        return (<li key = {index}>
                                            <a onClick={(e) => handleClick(i, false)}>
                                                {i.title}
                                            </a>
                                        </li>)
                                    })}
                                </ul>
                            ) : (
                                <span></span>
                            )}
                            
                        </li>   
                    )
                })}
            </ul>
         
            {/* <div className = "nav-cart">
                <Link to="/cart">
                    <img src={cartIcon} alt = "cart" width ="20"/>
                </Link>
                <span>{cart.qty}</span>
               
            </div> */}
            {/* <AuthButton /> */}
            
        </nav>
        </div>
    )

}

export default withRouter(Navbar)