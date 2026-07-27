import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/features/expenseTrackerSlice';
import { nanoid } from '@reduxjs/toolkit';

function ExpenseInput() {
    const dispatch = useDispatch();
    const [addExpenseInput, setAddExpenseInput] = useState("");

    const handleAddExpense = () => {

        if (addExpenseInput.trim() === "") return;
        dispatch(
            addExpense({
                id: nanoid(),
                title: addExpenseInput,
            })
        );
        setAddExpenseInput("");
    }

    return (
        <div>
            <div className="flex gap-3 mt-8">
                <input
                    type="text"
                    value={addExpenseInput}
                    onChange={(e) => setAddExpenseInput(e.target.value)}
                    placeholder="Enter a new task..."
                    className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 rounded-xl hover:bg-blue-700 transition" onClick={handleAddExpense}>
                    Add
                </button>
            </div>
        </div>
    )
}

export default ExpenseInput
