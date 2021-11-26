import React from 'react'
import { unstable_concurrentAct } from 'react-dom/test-utils'
import Button from '../Button/Button'
import Input from '../Input/Input'
import MyModule from '../MyModule'
import style from "./PostItem.module.css"

const PostItem = ({ number, post, posts, remove, setModule, modul, edit, stopEdit, editIndex, index }) => {

   const [mark, setMark] = React.useState(false)

   const rootClass = [style.body]
   if (mark) {
      rootClass.push(style.active)
   }

   const addMark = () => {
      setMark(true)
   }

   return (
      <div className={style.post}>
         <div className={style.mark} onClick={() => addMark(true)}>&times;</div>
         <h3>{number}</h3>
         <div className={rootClass.join(" ")}>{post.body}</div>
         <MyModule setModule={setModule} modul={modul}>
            <Input value={posts[editIndex]} onChange={() => edit} placeholder="Редактировать" />
            <Button onClick={() => stopEdit}>Редактировать</Button>
         </MyModule>
         <Button disabled onClick={() => setModule(true)}>Редактировать</Button>
         <Button onClick={() => remove(post)}>Удалить</Button>
      </div>
   )
}

export default PostItem

