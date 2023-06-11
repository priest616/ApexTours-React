import {React, useState} from "react";
import open from './img/free_icon_1.svg'
import close from './img/free_icon.svg'
import './componentstyles/header.css'

export default function Header(props) {
    const [navShow, setNavShow] = useState(true)



    return(
        <>
            <header className="main-item" >
        <div className="apexttl">
            <h1>
                Apex
                <span className="bigdot">
                    .
                </span>
            </h1>
            <div className="bigdot"></div>
        </div>
        <div className="mobile-nav" onClick={()=>{setNavShow(!navShow)}} aria-expanded={navShow}>
            {navShow? <img src={open} alt="open" />:<img src={close} alt="close" />}
        </div>
        <nav>
            <ul className="mobilelst" data-visible={navShow}>
                <li>home</li>
                <li>about</li>
                <li id="togalla">gallery</li>
                <li>contact</li>
                <div className="navcomm">
                    <div className="navcomment">
                        <p>
                            Reach out and connect with us. Leave your comfort zone and go on an  <span>adventure</span> with us see the best kenya has to offer!!!
                        </p>
                    </div>
                    <div className="findus">
                        <div className="icon1" id="whatsapp"></div>
                        <div className="icon2" id="instagram"></div>
                        <div className="icon3" id="tiktok"></div>
                        <div className="icon4" id="twitter"></div>
                    </div>
                </div>
            </ul>
        </nav>
    </header>

        {props.children}
        </>
    )
}