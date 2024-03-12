import React, {useState, useEffect} from 'react'
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = (props) => {
    let {items, large_logo, small_logo, cta_button} = props;
    if(!small_logo) small_logo = large_logo;
    
    const [isListShown, setIsListShown] = useState(false);
    const reactElement = React.Children.only(cta_button);
    const [logo, setLogo] = useState(small_logo);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1000) {
                setLogo(large_logo);
            }
            else {
                setLogo(small_logo);
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    },[]);


    return (
    <nav className='rui-navbar'>
        <div className="rui-logo">{logo}</div>
        <div className='rui-hamburger-container'>
            <GiHamburgerMenu className="rui-hamburger" onClick={() => {setIsListShown(!isListShown)}}/>
            <div className={`rui-hamburger-list ${isListShown ? 'open' : ''}`}>
                {items.map((item, index) => <div key={index} className="rui-hamburger-item">{item}</div>)}
                <div key={'last'} className={`rui-hamburger-item rui-cta-item`}>{reactElement}</div>
            </div>
        </div>
        <div className="rui-navbar-items">
            {items}
        </div>
        <div className="rui-cta">{cta_button}</div>
    </nav>
  );

}


export default Navbar