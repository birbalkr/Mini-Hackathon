import { createSlice } from '@reduxjs/toolkit';


const expensesSlice = createSlice({
    name: 'expensesTracker',
    initialState: {
        expenses: JSON.parse(localStorage.getItem("expenses")) || [],
    },
    reducers: {
        addExpense: (state, action) => {
            console.log("addd .......");
            state.expenses.push(action.payload);

            localStorage.setItem(
                "expenses",
                JSON.stringify(state.expenses)
            );
        },
        deleteExpense: (state, action) => {
            console.log("delete ...........");
            state.expenses = state.expenses.filter(expense => expense.id !== action.payload);

            localStorage.setItem(
                "expenses",
                JSON.stringify(state.expenses)
            );
        },
        editExpense: (state, action) => {
            console.log("edit .............");
            const { id, title } = action.payload;
            const expense = state.expenses.find((item) => item.id === id);
            if (expense) {
                expense.title = title;
            }

            localStorage.setItem(
                "expenses",
                JSON.stringify(state.expenses)
            );
        }
    }
})


export const { addExpense, deleteExpense, editExpense } = expensesSlice.actions;
export default expensesSlice.reducer;