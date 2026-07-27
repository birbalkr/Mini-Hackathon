import React from 'react'
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/features/ExpenseTrackerSlice';

function ExpenseInput() {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="flex gap-3 mt-8">
                <input
                    type="text"
                    placeholder="Enter a new task..."
                    className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 rounded-xl hover:bg-blue-700 transition" onClick={() => { dispatch(addExpense())}}>
                    Add
                </button>
            </div>
        </div>
    )
}

export default ExpenseInput
