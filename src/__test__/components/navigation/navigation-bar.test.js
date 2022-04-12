import React from 'react'
import renderer from 'react-test-renderer'

import NavigationBar from '../../../components/navigation/navigation-bar'

import { render, screen, cleanup } from '@testing-library/react'

import '@testing-library/jest-dom'

afterEach(cleanup)

it('render navigation bar', () => {
    render(<NavigationBar></NavigationBar>)
})

it('check title', () => {
    render(<NavigationBar></NavigationBar>)
    expect(screen.getByTestId('nav-bar-title')).toHaveTextContent('Home')
})

it('matches snapshot', () => {
    const tree = renderer.create(<NavigationBar />).toJSON()

    expect(tree).toMatchSnapshot()
})
