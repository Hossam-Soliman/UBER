import React from 'react';

const ContactSuccess =({AddedContact}) =>{

    return(
        <div className="contact-succ text-center">
                <div className="container">
                    <h1>Thank you <span>{AddedContact.name}</span> for getting in touch!</h1>
                    <p>We will reply to you at <span>{AddedContact.email}</span> as soon as possible.</p>
                    <img src="https://sun9-44.userapi.com/c858224/v858224972/1c2ff6/F___cdKRHu8.jpg" alt=''></img>
                   
                </div>
        </div>
    )
}

export default ContactSuccess