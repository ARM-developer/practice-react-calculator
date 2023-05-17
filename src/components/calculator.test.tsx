import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'

import { Calculator, rows } from './calculator'

const equalSign = '='

describe('Calculator', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<Calculator />)
  })

  it('should render numbers', () => {
    render(<Calculator />)
    rows
      .flat()
      .filter((item) => item.type === 'number')
      .forEach((item) => {
        screen.getByText(item.id)
      })
  })

  it('soulder render 5 rows', () => {
    render(<Calculator />)

    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(5)
  })

  it('soulder render operations', () => {
    render(<Calculator />)

    rows
      .flat()
      .filter((item) => item.type === 'operator')
      .forEach((item) => {
        screen.getByText(item.id)
      })
  })

  it('should render equal sign', () => {
    render(<Calculator />)

    screen.getByText(equalSign)
  })

  it('should render dot sign', () => {
    render(<Calculator />)

    screen.getByText('.')
  })

  it('should render an input', () => {
    render(<Calculator />)

    screen.getByRole('textbox')
  })

  it('should user input after clicking a number', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('1')
  })

  it('should user input after clicking several numbers', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const two = screen.getByText('2')
    fireEvent.click(two)

    const three = screen.getByText('3')
    fireEvent.click(three)

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('123')
  })

  it('should show user input afeter clicking numbers and operations', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('1+1')
  })

  it('should calculate based on user input and show the calculation', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const equal = screen.getByText(equalSign)
    fireEvent.click(equal)

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('2')
  })

  it('should calculate based on user input and show the calculation after first calculation', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const equal = screen.getByText(equalSign)
    fireEvent.click(equal)
    fireEvent.click(plus)
    fireEvent.click(one)

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('3')
  })
})
