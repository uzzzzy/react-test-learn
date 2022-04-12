import React from 'react'

function Button({ label }) {
    return (
        <div
            data-testid="button"
            className="rounded border px-3 py-1 border-teal-300 font-bold text-teal-300 cursor-pointer hover:bg-teal-300 hover:text-slate-800 hover:shadow-teal-300 hover:shadow">
            Hi, {label}
        </div>
    )
}
export default Button
