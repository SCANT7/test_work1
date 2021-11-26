import React, { forwardRef } from 'react'
import style from "./Input.module.css"

const Input = (props) => {
   return (
      <input {...props} className={style.inp} />
   )
}

export default Input
