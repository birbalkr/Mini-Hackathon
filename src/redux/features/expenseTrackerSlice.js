import { createSlice } from '@reduxjs/toolkit';


const expensesSlice = createSlice({
    name: 'expensesTracker',
    initialState: {
        expenses: [],
    },
    reducers: {
        addExpense: (state, action) => { },
        deleteExpense: (state, action) => { },
        editExpense: (state, action) => { }
    }
})


export const { addExpense, deleteExpense, editExpense } = expensesSlice.actions;
export default expensesSlice.reducer;