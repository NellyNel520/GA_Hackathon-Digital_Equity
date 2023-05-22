import React, { useState, useEffect } from 'react';
import { UserInfo } from '../Components/UserInfo';
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
            {step === 3 && <EmailVerification onContinue={handleContinue}/>}
        </>

    )

}