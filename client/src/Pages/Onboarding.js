import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserInfo } from '../Components/UserInfo';
import { Accomodations } from '../Components/Accomodations';
import { FirstSignup } from '../Components/FirstSignup';
import { EmailVerification } from '../Components/EmailVerification';


export const Onboarding = () => {
    const [step, setStep] = useState(1);

    const handleContinue = () => {
        setStep(prevStep => prevStep + 1);
    };

    return (
        <>
            {step === 1 && <FirstSignup onContinue={handleContinue} />}
            {step === 2 && <UserInfo onContinue={handleContinue} />}
            {step === 3 && <Accomodations onContinue={handleContinue} />}
            {step === 4 && <EmailVerification onContinue={handleContinue}/>}
        </>

    )

}