import React, { useState,useContext } from "react";
import TodoContext from "../context/TodoContext";
import TodoList from "./TodoList";

const TodoForm = () => {
    const [title,setTitle] = useState("")
    const [editBtn,setEditBtn] = useState(false)
    const {actions,todoArray} = useContext(TodoContext)
    console.log(todoArray)
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(title)
      actions.onSubmit(title)
      setTitle("")

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <button>SUBMIT</button>
            </form>
            {todoArray.map((todo) => {
                return <TodoList key={todo.id}
                id={todo.id}
                title={todo.title}
                setTitle={setTitle}
                editBtn={editBtn}
                setEditBtn={setEditBtn} />
            })}
        </div>

    )
}
export default TodoForm