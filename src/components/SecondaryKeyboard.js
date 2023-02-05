import React from 'react'

export const SecondaryKeyboard = (props) => {
    let classValue = props.classValue;
    function showClassValue() {
        console.log(classValue);
    }
  return (
    <div id='secondary-keyboard' className={props.classValue === 2 ? "none" 
        : props.classValue === 6 ? "none" 
        : props.classValue === 2 ? "none"
        : props.classValue === 10 ? "none"
        : props.classValue === 13 ? "none"
        : null
    } onClick={showClassValue}></div>
  )
}
