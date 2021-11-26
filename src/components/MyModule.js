import React from 'react'
import style from "./MyModule.module.css"

const MyModule = ({ children, modul, setModule }) => {

   const rootClass = [style.mymodule]
   if (modul) {
      rootClass.push(style.active)
   }

   return (
      <div className={rootClass.join(" ")} onClick={() => setModule(false)}>
         <div classNmae={style.mymodule__content} onClick={(e) => e.stopPropagation()}>
            {children}
         </div>
      </div>
   )
}

export default MyModule
