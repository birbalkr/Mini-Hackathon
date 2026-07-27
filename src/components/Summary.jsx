import React from 'react'
import { Pencil, Trash2, Check } from "lucide-react";
function Summary() {
    return (
        <div>
            <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between bg-slate-50 border rounded-xl p-4 hover:shadow-md transition">
                    <div className="flex items-center gap-3">
                        <button className="w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white">
                            <Check size={18} />
                        </button>
                        <span className="text-lg text-slate-700">
                            demo
                        </span>
                    </div>

                    <div className="flex gap-2">
                        <button className="p-2 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-200">
                            <Pencil size={18} />
                        </button>

                        <button className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200">
                            <Trash2 size={18} />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Summary
