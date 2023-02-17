import React from 'react'
import styles from "./input.module.css";

function Input({type,pattern="",minLength,required,maxLength}) {
  return (
    <input type={type} 
    // pattern="^[آ-ی]$" 
    minLength={minLength}
    required={required}
    maxLength={maxLength}
    />

  )
}

export default Input