import React from 'react';
import './call.css'
import callImg from "../../webassets/navbar_img/phone-outline.svg";

const PhoneCallButton = ({ phoneNumber }) => {
    const handleCall = () => {
        navigator.clipboard.writeText(phoneNumber)
            .then(() => {
                alert(`Phone number copied to clipboard.`);
            })
            .catch((error) => {
                console.error('Error copying phone number to clipboard:', error);
            });
    };

    return (
        <button className="phone-call-button" onClick={handleCall}>
        <img src={callImg} className="callLogo" alt='call_img'/>
        Call Me
        </button>
    );
};

export default PhoneCallButton;