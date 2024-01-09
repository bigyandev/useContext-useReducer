import React,{useContext, useState} from "react";
import TodoContext from "../context/TodoContext";


const TodoList = ({id,title, editBtn,setEditBtn}) => {
    const {actions} = useContext(TodoContext)
    const [editedText,setEditedText] = useState(title)
    const handleDelete = (id) => {
        console.log(id)
        actions.onDelete(id)
    }
    const handleEditText = (id,editedText) => {
     actions.onEdit(id,editedText)
     setEditBtn(!editBtn)
    }
   return (
    <ul>
        <li> { editBtn ? <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)}/> : title}</li>
        <button onClick={() => handleDelete(id)}>DELETE</button>
        {editBtn ? 
        <button onClick={() => handleEditText(editedText,id)}>SET</button> : 
        <button onClick={() => setEditBtn(!editBtn)}>EDIT</button>
        }
    </ul>
   )

   
}
export default TodoList