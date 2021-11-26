import React from "react"
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import PostItem from './components/PostItem/PostItem';

function App() {

  const [posts, setPosts] = React.useState([])
  const [valueInput, setValueInput] = React.useState({ body: "" })
  const [modul, setModule] = React.useState(false)
  const [editIndex, setEditIndex] = React.useState(null);

  function edit(event) {
    setPosts(
      [
        ...posts.slice(0, editIndex),
        event.current.value,
        ...posts.slice(editIndex + 1)
      ]
    );
  }

  function stopEdit() {
    setEditIndex(null);
  }

  const addPost = () => {
    if (valueInput.body.length === 0) {
      alert("Напишите заметку")
    } else {
      let newPost = {
        ...valueInput,
        id: Date.now(),
      }
      setPosts([...posts, newPost])
      setValueInput({ body: "" })
    }
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <Input value={valueInput.body} onChange={e => setValueInput({ ...valueInput, body: e.target.value })} />
      <Button onClick={addPost}>Добавить</Button>
      <center>
        {
          posts.length
            ? posts.map((post, index) => <PostItem posts={posts} edit={edit} stopEdit={stopEdit} editIndex={editIndex} setModule={setModule} modul={modul} remove={removePost} post={post} number={index + 1} />)
            : <h1>Заметок нет</h1>
        }
      </center>
    </div >
  );
}

export default App;
