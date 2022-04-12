import React from 'react'

export default function NavigationBar() {
    return (
        <div
            data-testid="nav-bar-background"
            className="fixed top-0 left-0 bg-white w-full p-3">
            <div
                data-testid="nav-bar-container"
                className="flex container mx-auto justify-between">
                <div data-testid="nav-bar-title">Home</div>
            </div>
        </div>
    )
}
