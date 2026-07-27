import React from "react";
import { Wallet, Bell, User, LogOut } from "lucide-react";

function Navbar() {
    return (
        <nav className="bg-white shadow-md border-b sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="bg-blue-600 p-2 rounded-xl">
                        <Wallet className="text-white" size={24} />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-slate-800">
                            Expense Tracker
                        </h1>
                    </div>
                </div>
                <button>
                    <LogOut/>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;