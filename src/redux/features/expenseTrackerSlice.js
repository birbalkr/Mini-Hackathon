import { createSlice } from '@reduxjs/toolkit';


const expensesSlice = createSlice({
    name: 'expensesTracker',
    initialState: {
        expenses: [],
    },
    reducers: {
        addExpense: (state, action) => {
            console.log("addd .......");
            state.expenses.push(action.payload);
        },
        deleteExpense: (state, action) => {
            console.log("delete ...........");
            state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
        },
        editExpense: (state, action) => {
            console.log("edit .............");
            const { id, title } = action.payload;
            const expense = state.expenses.find((item) => item.id === id);
            if (expense) {
                expense.title = title;
            }
        }
    }
})


export const { addExpense, deleteExpense, editExpense } = expensesSlice.actions;
export default expensesSlice.reducer;