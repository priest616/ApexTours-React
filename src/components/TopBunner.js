import React from 'react';
import './componentstyles/header.css'
import imgback from './img/IMG-20221023-WA0061.jpg'



export default function TopBunner() {
    return(
        <>
            <section className="fstsec" >
        <div className="fstsec-con" id="fstsec-con">
            <div className="div1">
                <h4>
                    welcome to Apex
                </h4>
            </div>
            <div className="div2">
                <h2 className="herego">
                    We organize and design superb outdoor events and tours for great experience with friends and family.
                </h2>
            </div>
            <div className="div3">
                <button>join a tour</button>
                <button>book events</button>
            </div>
            <div className="conclude"></div>
        </div>
    </section>

        </>
    )
}