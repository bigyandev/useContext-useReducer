import React, {useReducer} from 'react';

import './App.css';

import TodoAction from './reducer/TodoAction';
import TodoContext from './context/TodoContext';
import TodoForm from './components/TodoForm';
import { reducer } from './reducer/TodoReducer';

function App() {
 const [todoArray, dispatch] = useReducer(reducer,[])
 const actions = TodoAction(dispatch)

 return (
  <TodoContext.Provider value={{actions,todoArray}}>
  <TodoForm />
  </TodoContext.Provider>
 )
    
}

export default App;
