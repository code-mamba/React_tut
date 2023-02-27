import logo from './logo.svg';
import './App.css';
import { EmployeeDetails,EmployeeSalaryDetails } from './components/Hoc/HigherOrderComponent';
import CreateRefApiExample from './components/forwardingRef/createRef';
import React from 'react';
import Main from './components/context/Main';

export const ApplicationContext = React.createContext()
function App() {

  const menu = [1,2,3,4,5,6,7,8,9]
  
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
     
    </div>
    
  );
}

export default App;
