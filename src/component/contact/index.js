import React from 'react'
import ContactStyle from './contact-style'
import TitleButton from '../skills/title-button'
import { useForm } from '@formcarry/react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

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
                    <AiFillGithub className='icons' />
                    <AiFillLinkedin className='icons' />
                    <AiFillMail className='icons' />
                </div>

            </footer>

        </ContactStyle>
    )
}

export default Contact