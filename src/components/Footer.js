import {React, useState} from 'react';
import './componentstyles/footer.css';
import ContactForm from './ContactForm';

export default function Footer() {

    const [subscriber, setsubscriber] = useState('');

    const add=(name, email, subject, message)=>{
        console.log(subject)
        console.log(name)
        console.log(email)
        console.log(message)
    }
    return (
        <>
            <section className="foot">
                <div className="flag">
                    <div className="the-flag">

                    </div>
                </div>
                <div className="content-con">
                    <div className="head-con">
                        <p>
                            contact us
                        </p>
                        <h2>
                            Reach out for an event or tours or just say hi!
                        </h2>
                    </div>
                </div>
                <div className="form-con">
                    <ContactForm add={add}/>
                    <div className="finds">
                        <div className="find">
                            <h4>
                                where to find us
                            </h4>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="find">
                            <h4>
                                email us at
                            </h4>
                            <p className="p-special">

                                <span style={{display:'inline-block'}}>apextoursandevents</span><span style={{display:'inline-block'}}>@gmail.com</span>
                            </p>
                        </div>
                        <div className="find">
                            <h4>
                                call us at
                            </h4>
                            <p>
                                072497881
                                <br />
                                0701505366
                            </p>
                        </div>
                        <div className="find-i">
                            <div className="icon1" id="whatsapp"></div>
                            <div className="icon2" id="instagram"></div>
                            <div className="icon3" id="tiktok"></div>
                            <div className="icon4" id="twitter"></div>
                        </div>
                        <div className="owners-pam">
                            <div className="owners-pam-con">
                                <div className="owners-frem">
                                    <div className="owne">
                                        <img src="" alt="" />
                                        <p>
                                            <span>Randall Mutie</span>
                                            <br />
                                            CEO, Apex
                                        </p>
                                    </div>
                                </div>
                                <div className="owners-frem">
                                    <div className="owne">
                                        <img src="" alt="" />
                                            <p>
                                                <span>Dave</span>
                                                <br />
                                                    CFO, Apex
                                            </p>
                                    </div>
                                </div>
                                <div className="owners-frem">
                                    <div className="owne">
                                        <img src="" alt="" />
                                            <p>
                                                <span>Jerry Prestley</span>
                                                <br />
                                                    COO, Apex
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="notif">
                        <div className="notif-head">
                            <h2>
                                Get Notified
                            </h2>
                            <p>
                                Get the latest news and updates from us. Get information of the latest Tours event rates and
                                stay in the loop!
                            </p>
                        </div>
                        <form 
                        
                        onSubmit={(e) => {
                            e.preventDefault();
                            setsubscriber('');            
                        }}>
                            <input placeholder="email address" type="email" value={subscriber} onChange={((e) => setsubscriber(e.target.value))}/>
                                <button type="submit">
                                    subscribe
                                </button>
                        </form>
                    </div>
                </div>
            </section>
            <footer>
                <p>
                    Apex &copy;
                </p>
            </footer>

        </>
    )
}