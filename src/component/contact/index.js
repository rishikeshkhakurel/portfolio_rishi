import React from 'react'
import ContactStyle from './contact-style'
import TitleButton from '../skills/title-button'
import { useForm } from '@formcarry/react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Contact = () => {
    const { state, submit } = useForm({
        id: 'b2bganBrhY'
    });

    // Success message
    if (state.submitted) {
        return ("Thank you! We received your submission");
    }

    return (
        <ContactStyle>
            <div id="title">
                <TitleButton>Contact</TitleButton>
            </div>
            <form onSubmit={submit}>
                <input type="text" name="FullName" placeholder='ENTER YOUR NAME*' />
                <input type="email" name="Email" placeholder='ENTER YOUR EMAIL* ' />
                <textarea type="text" name="Message" placeholder='YOUR MESSAGE * ' rows="10" cols="100" />
                <div id="button-div">
                    <button type="submit">Submit</button>
                </div>
            </form>

            <footer>
                <div id="connect">
                    <Link to='https://github.com/rishikeshkhakurel'>
                        <AiFillGithub className='icons' />
                    </Link>
                    <Link to='https://www.linkedin.com/in/rishikesh-khakurel-bb5b22215/'>
                        <AiFillLinkedin className='icons' />
                    </Link>
                    <Link to='mailto:khakurel.rishikesh1@gmail.com'>
                        <AiFillMail className='icons' />
                    </Link>
                </div>

            </footer>

        </ContactStyle>
    )
}

export default Contact