import React, { useState } from "react";

export const FirstSignup = ({ onContinue }) => {
    const [role, setRole] = useState("");

    const handleRoleSelection = (selectedRole) => {
        setRole(selectedRole);
        handleContinueClick();
    };

    const handleContinueClick = () => { 
        onContinue();
    };

    return (
        <div>
            <h1>Web Wizards</h1>
            <h3>Welcome!</h3>
            <h5>I am a...</h5>
            <button onClick={() => handleRoleSelection("School")}>School</button>
            <button onClick={() => handleRoleSelection("Parent")}>Parent</button>
            <button onClick={() => handleRoleSelection("Student")} >Student</button>
            <h2>OR</h2>
            <button>Contine with Google</button>
            <h3>Already have an account? Sign In</h3>
        </div>
    )
};