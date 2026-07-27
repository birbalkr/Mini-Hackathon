import { createSlice } from '@reduxjs/toolkit';


const expensesSlice = createSlice({
    name: 'expensesTracker',
    initialState: {
        expenses: [],
    },
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
        },
        deleteExpense: (state, action) => {
            state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
        },
        editExpense: (state, action) => {
            state.expenses = state.expenses.map(expense =>
                expense.id === action.payload.id ? action.payload : expense
            );
        }
    }
})


export const { addExpense, deleteExpense, editExpense } = expensesSlice.actions;
export default expensesSlice.reducer;