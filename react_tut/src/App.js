import logo from './logo.svg';
import './App.css';
import { EmployeeDetails,EmployeeSalaryDetails } from './components/Hoc/HigherOrderComponent';
import CreateRefApiExample from './components/forwardingRef/createRef';
import React, { useState } from 'react';
import Main from './components/context/Main';
import TodoCount from './components/LiftingUpState/TodoCount';
import TodoList from './components/LiftingUpState/TodoList';
import AddTodo from './components/LiftingUpState/AddTodo';
import State from './components/useStatehook/useStateHook';
import EffectsDemoNoDependency from './components/useEffect/useEffect';
import Counter from './components/useReducer/useReducer';

export const ApplicationContext = React.createContext()
function App() {

const[todos,setTodos] = useState([])
 

  
  return (
    <div className="App">
      <ApplicationContext.Provider value="Dhanush">
      <h1>EmployeeDetails</h1>
      <EmployeeDetails></EmployeeDetails>
      <h2>EmployeeSalaryDetails</h2>
      <EmployeeSalaryDetails></EmployeeSalaryDetails>
      <CreateRefApiExample></CreateRefApiExample>
      
        <Main></Main>
      </ApplicationContext.Provider>
      
     <TodoCount todos = {todos}></TodoCount>
     <TodoList todos = {todos}></TodoList>
     <AddTodo todos = {todos} setTodos = {setTodos} ></AddTodo>
     <State></State>
     <br></br>
     <br></br>
     <EffectsDemoNoDependency></EffectsDemoNoDependency>
     <Counter></Counter>
    </div>
    
  );
}

export default App;
