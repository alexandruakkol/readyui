import React, {useState} from 'react'
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";

const R_Navbar = (props) => {
    const {items, logo_el} = props;
    const [isListShown, setIsListShown] = useState(false);

  return (
    <nav className='rui-navbar'>
        <>{logo_el}</>
        <div className='rui-hamburger-container'>
            <GiHamburgerMenu className="rui-hamburger" onClick={() => {setIsListShown(!isListShown)}}/>
            <div className={`rui-hamburger-list ${isListShown ? 'open' : ''}`}>
                {items.map((item, index) => <div key={index} className="rui-hamburger-item">{item}</div>)}
            </div>
        </div>
        <div className="rui-navbar-items">
            {items}
        </div>
    </nav>
  )
}


export default R_Navbar