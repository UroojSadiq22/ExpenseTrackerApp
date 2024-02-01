import './App.css';
import { useState } from 'react';
import ExpenseList from './Components/ExpenseList'
import ExpenseForm from './Components/ExpenseForm'
import Header from './Components/Header'

function App() {

  const [expenses , setExpenses] = useState([
    {id: 1 , title: 'eggs' , amount: '20' , date: "2021-1-12"},
    {id: 2 , title: 'meat' , amount: '50' , date: '2021-7-22'},
    {id: 3 , title: 'bread' , amount: '30' , date: '2021-9-10'},
    {id: 4 , title: 'floor' , amount: '40' , date: '2021-5-11'},
  ]);

  //const [formdata, setFormdata] = useState(arr);
  const getData = (data) => {
    setExpenses([
      ...expenses,
      { id: Math.floor(Math.random() * 9999), ...data },
      
    ]);
  };

  const deleteItem = (id) => {
    setExpenses(expenses.filter( expenses => (expenses.id !== id)))
  }


  return (
    <>
    <Header/>
    <ExpenseForm getformdata={getData}/>
    <ExpenseList items ={expenses} deleteI={deleteItem}/>
    
    
    </>
    
  );
}

export default App;
