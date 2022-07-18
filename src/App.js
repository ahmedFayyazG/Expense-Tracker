import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Expense from './Components/Expenses/Expense';
import NewExpense from './Components/NewExpense/NewExpense';

function App() {


  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'HeadPhones',
      amount: 5000,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'Pod Juice',
      amount: 3000,
      date: new Date(2022, 7, 14),
    },
    {
      id: 'e6',
      title: 'Printer Paper',
      amount: 94.12,
      date: new Date(2022, 7, 14),
    },
    {
      id: 'e7',
      title: 'Car Oil',
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: 'e8',
      title: 'Lcd Tv',
      amount: 20000,
      date: new Date(2022, 7, 14),
    },
  ];
        const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

const addExpenseHandler = (expense) => {
  
  setExpenses((prevexpenses) => {
    return [expense ,...prevexpenses]
  })
}
useEffect(() => {
 
  console.log("Expaa", expenses);
}, [])
  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense expenses={expenses}/>
    </div>
  );
}

export default App;
