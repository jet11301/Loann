import 'bootstrap/dist/css/bootstrap.css';
import React, {useRef } from 'react';

import Header from '../contents/Header';
import NavBar from '../contents/Navbar';
import Register from '../contents/Register';
import Advantage from '../contents/Advantage';
import Characteristic from '../contents/Characteristic';
import MoreDetails from '../contents/MoreDetails';
import FeedBack from '../contents/FeedBack';
import StepLoan from '../contents/StepLoan';
import Footer from '../contents/Footer';


import { useNavigate } from 'react-router-dom';

export default function MainHome() {
    const phoneNumber = '0935279940';
    const navigate = useNavigate();

    const handleZaloCall = () => {
        const zaloChatLink = `https://zalo.me/${phoneNumber}`;
        window.open(zaloChatLink, '_blank');
        navigate('/');
    };

    const registerRef = useRef(null);
    const scrollToRegister = () => {
        if (registerRef.current) {
            const registerTop = registerRef.current.offsetTop;
            const windowHeight = window.innerHeight;
            const scrollPosition = registerTop - (windowHeight / 2);
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
    };

    const stepLoanRef = useRef(null);
    const scrollToStepLoan = () => {
        if (stepLoanRef.current) {
            const stepLoanTop = stepLoanRef.current.offsetTop;
            const windowHeight = window.innerHeight;
            const scrollPosition = stepLoanTop - (windowHeight / 2);
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
    };

    const advantageRef = useRef(null);
    const scrollToAddvantage = () => {
        if (advantageRef.current) {
            const advantageTop = advantageRef.current.offsetTop;
            const windowHeight = window.innerHeight;
            const scrollPosition = advantageTop - (windowHeight / 2);
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
    };

    const contactRef = useRef(null);
    const scrollToContact = () => {
        if (contactRef.current) {
            const contactTop = contactRef.current.offsetTop;
            const windowHeight = window.innerHeight;
            const scrollPosition = contactTop - (windowHeight / 2);
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
    };

    const characteristicRef = useRef(null);
    const scrollTocharacteristic = () => {
        if (characteristicRef.current) {
            const characteristicTop = characteristicRef.current.offsetTop;
            const windowHeight = window.innerHeight;
            const scrollPosition = characteristicTop - (windowHeight / 2);
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='wrapper w-100' style={{ overflow: 'hidden' }}>
                <Header onCharacteristicClick={scrollTocharacteristic} />
                <NavBar onRegisterClick={scrollToRegister} onStepLoanClick={scrollToStepLoan} onAdvantageClick={scrollToAddvantage} onContactClick={scrollToContact} />
                <div ref={registerRef}>
                    <Register />
                </div>
                <div ref={advantageRef}>
                    <Advantage />
                </div>
                <div ref={characteristicRef}>
                    <Characteristic onRegisterClick={scrollToRegister} />
                </div>
                <MoreDetails onRegisterClick={scrollToRegister} />
                <FeedBack />
                <div ref={contactRef}>
                    <StepLoan />
                </div>
                <div ref={stepLoanRef}>
                    <Footer />
                </div>
                <div className="zalo-icon-container" onClick={handleZaloCall} style={{ position: 'fixed', bottom: '20px', right: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', zIndex: '9999' }}>
                    <img src="../img/7044033_zalo_icon.png" alt="" width={60} />
                    <div id="zalo-chat-widget" />
                </div>
            </div>

        </>
    )
}