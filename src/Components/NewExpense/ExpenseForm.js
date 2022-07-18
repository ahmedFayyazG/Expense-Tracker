import React, { Component, useState } from 'react';
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const [EnteredTitle, setEnteredTitle] = useState("")
    const [EnteredAmount, setEnteredAmount] = useState("")
    const [EnteredDate, setEnteredDate] = useState("")
    const [ValidationCheck, setValidationCheck] = useState(true)



    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredTitle: event.target.value,
        // });
        // setUserInput((prevState) => {
        //   return { ...prevState, enteredTitle: event.target.value };
        // });
      };
    
      const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredAmount: event.target.value,
        // });
      };
    
      const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredDate: event.target.value,
        // });
      };
    
const submitHandler = event => {
    event.preventDefault();
    if(EnteredTitle === "" || EnteredAmount === "" || EnteredDate === ""){
        setValidationCheck(false);
        return alert("Fill All the Fields");
    }
    const expenseData = {
        title: EnteredTitle,
        amount: EnteredAmount,
        date: new Date(EnteredDate)
    }

    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");

}
    return ( 
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'> 
            <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type="text"
                        value={EnteredTitle}
                        onChange={titleChangeHandler}
                    />
            </div>
        </div>
        <div className='new-expense__controls'> 
            <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type="Amount"
                        value={EnteredAmount}
                        onChange={amountChangeHandler}
                    />
            </div>
        </div>
        <div className='new-expense__controls'> 
            <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={EnteredDate}
                        onChange={dateChangeHandler}
                     />
            </div>
        </div>
<div className='new-expense__actions'>
    <button type='submit'>Add Expense</button>
</div>
    </form>
     );
}
 
export default ExpenseForm;