import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../../../components/button/button'

import { render, screen, cleanup } from '@testing-library/react'

import '@testing-library/jest-dom'

afterEach(cleanup)
it('render without crashing', () => {
    render(<Button></Button>)
})

it('renders button correctly', () => {
    render(<Button label="Click Please!"></Button>)

    expect(screen.getByTestId('button')).toHaveTextContent('Click Please!')
})
it('renders button test', () => {
    render(<Button label="test"></Button>)

    expect(screen.getByTestId('button')).toHaveTextContent('test')
})
it('renders button help', () => {
    render(<Button label="help"></Button>)

    expect(screen.getByTestId('button')).toHaveTextContent('help')
})

it('matches snapshot', () => {
    const tree = renderer.create(<Button label="save" />).toJSON()

    expect(tree).toMatchSnapshot()
})
