import { configureStore } from '@reduxjs/toolkit'
import expensesTrackerReducer from './features/ExpenseTrackerSlice'

export const store = configureStore({
    reducer: {
        expensesTracker: expensesTrackerReducer,
    },
})