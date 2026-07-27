import { configureStore } from '@reduxjs/toolkit'
import expensesTrackerReducer from './features/expenseTrackerSlice'

export const store = configureStore({
    reducer: {
        expensesTracker: expensesTrackerReducer,
    },
})