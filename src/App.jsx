import React, { Component } from 'react'
import Button from './components/button/button'
import NavigationBar from './components/navigation/navigation-bar'

export default class App extends Component {
    render() {
        return (
            <div className="flex h-screen bg-slate-800">
                <NavigationBar />
                <div className="m-auto">
                    <div className="flex gap-4">
                        <Button label={'button 1'} />
                        <Button label={'button 2'} />
                    </div>
                </div>
            </div>
        )
    }
}
