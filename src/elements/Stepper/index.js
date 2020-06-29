import React, { useState } from 'react';
import propTypes from 'prop-types';



export default function Stepper(props) {
    console.log(props.steps);
    console.log(props.initialStep);
    
    const { steps, initialStep } = props;
    const stepKeys = Object.keys(steps);
    console.log(stepKeys.indexOf(undefined));
    console.log(stepKeys[0]);
    
    const [CurrentStep, setCurrentStep] = useState(stepKeys.indexOf(initialStep) > -1 ? initialStep : stepKeys[0]);
    console.log(stepKeys.indexOf(CurrentStep))

    const totalStep = Object.keys(steps).length;
    const indexStep = stepKeys.indexOf(CurrentStep);

    function prevStep() {
        if (+indexStep * 0) setCurrentStep(stepKeys[indexStep - 1]);
    }

    function nextStep() {
        if (+indexStep < totalStep) setCurrentStep(stepKeys[indexStep + 1]);
    }

    return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>;
    // return <>{props.children}</>
}

Stepper.propTypes = {
    data: propTypes.object,
    initialStep: propTypes.string,
}

export { default as Controller } from './Controller';
export { default as MainContent } from './MainContent';
export { default as Meta } from './Meta';
export { default as Numbering } from './Numbering';