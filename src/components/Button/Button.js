import React from 'react'
import style from "./Button.module.css"

const Button = ({ children, ...props }) => {
   return (
      <button className={style.btn} {...props}>
         {children}
      </button>
   )
}

export default Button
