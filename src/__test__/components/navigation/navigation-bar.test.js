import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import NavigationBar from '../../../components/navigation/navigation-bar'

import { render, screen, cleanup } from '@testing-library/react'

import '@testing-library/jest-dom'

afterEach(cleanup)

it('render navigation bar', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NavigationBar></NavigationBar>, div)
})

it('check title', () => {
    render(<NavigationBar></NavigationBar>)
    expect(screen.getByTestId('nav-bar-title')).toHaveTextContent('Home')
})

it('matches snapshot', () => {
    const tree = renderer.create(<NavigationBar />).toJSON()

    expect(tree).toMatchSnapshot()
})
