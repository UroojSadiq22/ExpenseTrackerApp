import React from 'react'
import { useState } from 'react'
import StyleForm from './form.module.css'

const ExpenseForm = ({getformdata}) => {

    const [data , setData] = useState({
        title: '',
        amount: '',
        date: ''
    })

  const changeHandler= (e)=>{
    setData({...data , [e.target.name]:e.target.value})
  }  

  const submitHandler = (e)=>{
    e.preventDefault();
    getformdata(data)
    setData({
        title: '',
        amount: '',
        date: ''
    })

  }
  return (
    <form onSubmit={submitHandler} className={StyleForm.form}>
    <div className={StyleForm.heading}>Add Your Expenses</div>
    <div>
        <label className={StyleForm.titles}>Title</label>
        <input  className={StyleForm.textinput} type='text' name='title' value={data.title} onChange={changeHandler} required/>
    </div><br/>

    <div>
        <label>Amount</label>
        <input  className={StyleForm.textinput} type='text' name='amount' value={data.amount} onChange={changeHandler} required/>
    </div><br/>
    
    <div>
        <label>Date</label>
        <input  className={StyleForm.textinput} type='date' name='date' value={data.date} onChange={changeHandler}/>
    </div><br/>
    <div>
        <button  className={StyleForm.addbtn} type='submit'>Add</button>
    </div>
      
    </form>
  )
}

export default ExpenseForm
