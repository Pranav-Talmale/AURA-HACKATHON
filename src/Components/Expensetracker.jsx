/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { AddExpense } from '../api/DashboardAPI';
import '../Css/dashboard.css'; // Import your CSS file for styling
import { FetchExpensesByUserID } from '../api/DashboardAPI';

export const Expensetracker = () => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [note, setNote] = useState('');
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        // Fetch daily expenses when the component mounts
        fetchDailyExpenses();
    }, []); 

    const fetchDailyExpenses = async () => {
        try {
            const userID = localStorage.getItem('userID');

            // Call the API function to fetch daily expenses
            const fetchedExpenses = await FetchExpensesByUserID(userID);

            // Update the state with the fetched expenses
            setExpenses(fetchedExpenses);

            // Log the expenses array
            console.log('Fetched Expenses:', fetchedExpenses);
        } catch (error) {
            console.error('Error fetching daily expenses:', error);
        }
    };

    const handleAddExpense = async (e) => {
        e.preventDefault();

        try {
            const userID = localStorage.getItem('userID');

            // Call the API function to add the expense
            await AddExpense(userID, amount, category, date, note);

            // Reset the form fields after adding the expense
            setAmount('');
            setCategory('');
            setDate('');
            setNote('');
            
            // After adding an expense, fetch updated expenses
            fetchDailyExpenses();
        } catch (error) {
            console.error('Error adding expense:', error);
            // Handle error as needed
        }
    };

    return (
        <div className="expense-tracker">
            <h2>Daily Transactions</h2>
            <form className="expense-form">
            
                <label>
                    Amount:
                    <input
                        required
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                    />
                </label>
                <label>
                    Category:
                    <input
                        required
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Enter category"
                    />
                </label>
                <label>
                    Date:
                    <input
                        required
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Select date"
                    />
                </label>
                <label>
                    Note:
                    <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Add a note"
                    />
                </label>

                <button onClick={handleAddExpense}>Add Expense</button>
            </form>
            <h3>Expenses List</h3>
            <div className="expenses-list-container">
                <div className="expenses-list">
                    {expenses.map((expense) => (
                        <div key={expense.expenseID} className="expense-item">
                            <div>Date: {expense.date}</div>
                            <div>Category: {expense.category}</div>
                            <div>Amount: {expense.amount}</div>
                            <div>Note: {expense.note}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
