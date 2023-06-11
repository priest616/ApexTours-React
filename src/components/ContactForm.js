import React, { useState } from 'react';
import './componentstyles/footer.css';

export default function ContactForm(props) {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [subject, setsubject] = useState('');
    const [message, setmessage] = useState('');
    

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                setname('');
                setemail('');
                setsubject('');
                setmessage('');
                
                props.add(name, email, subject, message);

            }} id="form1">
                <label htmlFor="contact form"></label>
                <input required placeholder="Your name" type="text" value={name} onChange={((e) => setname(e.target.value))} />
                <input placeholder="Your email" type="text" value={email} onChange={((e) => setemail(e.target.value))} />
                <input placeholder="Subject" type="text" value={subject} onChange={((e) => setsubject(e.target.value))} />
                <textarea placeholder="message" name="" id="" cols="30" rows="10" value={message} onChange={((e) => setmessage(e.target.value))}>

                </textarea>
                <button type="submit">
                    submit
                </button>

            </form>

        </>
    )
}