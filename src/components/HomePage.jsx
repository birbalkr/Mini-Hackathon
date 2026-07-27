
import React from 'react'
import Navbar from './Navbar'
import ExpenseInput from './ExpenseInput'
import Summary from './Summary'

function HomePage() {
    return (
        <div>
            <Navbar />
            <div className="max-w-[640px] mx-auto px-5 pt-12 pb-20">
                <header className="text-center mb-7">
                    <h1 className="font-serif text-5xl font-bold m-0 tracking-[-0.01em] text-teal-700">Expense Tracker</h1>
                    <p className="mt-1.5 mb-0 text-[15px] text-[#6b6a5f]">A running record of where your money goes.</p>
                </header>
                <ExpenseInput />
                <Summary />
            </div>
        </div>
    )
}

export default HomePage
