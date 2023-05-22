import React, { useState, useEffect } from 'react';
import { UserInfo } from '../Components/UserInfo';
import  SignUp  from '../Pages/SignUp';
import { HowTech } from '../Components/HowTech';
import { EmailVerification } from '../Components/EmailVerification';


export const Onboarding = () => {
    const [step, setStep] = useState(1);

    const handleContinue = () => {
        setStep(prevStep => prevStep + 1);
    };

    return (
        <>
            {step === 1 && <SignUp onContinue={handleContinue} />}
            {step === 2 && <HowTech onContinue={handleContinue} />}
            {step === 3 && <EmailVerification onContinue={handleContinue}/>}
            {step === 4 && <UserInfo onContinue={handleContinue} />}
        </>

    )

}