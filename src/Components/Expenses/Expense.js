import React, { Component, useState } from 'react';
import "./Expense.css";
import Card from "./../Ui/Card";
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';



const Expense = ({expenses}) => {
    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expenseContent

    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map(expense => {
            return <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        })
    }


    return (
        //  <div className='expenses'>
        //      {expenses.map(e => {
        //          return <h3>hello</h3>
        //      })}   
        //     </div> 
        <div>
            <Card className="expenses">
            <ExpensesFilter selected = {filteredYear}  onChangeFilter={filterChangeHandler} />
            {expenseContent ? expenseContent : <h2 style={{color: "white",fontSize: '50px'}}>No Expense Found</h2>}
            </Card>
            </div>
        )
}
 
export default Expense;


