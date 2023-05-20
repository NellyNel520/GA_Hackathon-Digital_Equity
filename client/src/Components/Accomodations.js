import React from 'react';

export const Accomodations = ({ onContinue }) => {
  const handleContinueClick = () => {

    onContinue();
  };

  <div>
    <button>Computer Text-To-Speech</button>
    <button>Color Blindness</button>
    <button>Sign Language Interpretations</button>
    <button>Language Translation</button>
    <button>Hearing Loss</button>
    <button>Visual Motor Deficit</button>
    <button>Autism Spectrum Disorder</button>
    <button>None Applicable</button>
    <button>Back</button>
    <button onClick={handleContinueClick}>Continue</button>
  </div>
};