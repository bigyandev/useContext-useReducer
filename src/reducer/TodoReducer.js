import React from "react"
import { ACTIONS } from "./actions"

const newTodo = (title) => {
    return {id: new Date().getSeconds(),title:title}
}
export const reducer = (todo,action) => {
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            console.log({title:action.payload.title})
            return [...todo, newTodo(action.payload.title)]
        case ACTIONS.DELETE_TODO: 
          return todo.filter((todo) => todo.id !== action.payload.id)
        case ACTIONS.EDIT_TODO:
            return todo.map((item) => item.id === action.payload.id ? ({ ...item, title:action.payload.title}): item)
        default: 
        return todo
         
    }
}

