import React from 'react'
import UrlForm from './UrlForm'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event'

describe('UrlForm', () => {
  it('should render two input fields and a submit button', () => {
    const { getByPlaceholderText, getByRole } = render(<UrlForm />)

    const titleInput = getByPlaceholderText('Title...')
    const urlInput = getByPlaceholderText('URL to Shorten...')
    const button = getByRole('button', {name: 'Shorten Please!'})

    expect(titleInput).toBeInTheDocument()
    expect(urlInput).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should update inputs while typing', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(<UrlForm />)

    const titleInput = getByPlaceholderText('Title...')
    const urlInput = getByPlaceholderText('URL to Shorten...')

    fireEvent.change(titleInput, { target: { value: 'Test Title' } })
    fireEvent.change(urlInput, { target: { value: 'Test URL' } })

    const typedTitle = getByDisplayValue('Test Title')
    const typedUrl = getByDisplayValue('Test URL')

    expect(typedTitle).toBeInTheDocument()
    expect(typedUrl).toBeInTheDocument()
  })

  it('should invoke fakeUrlPost when the shorten please button is clicked', () => {
  const fakeUrlPost = jest.fn();
  const { getByRole } = render(<UrlForm makeUrlPost={fakeUrlPost} />)
  const button = getByRole("button", 'Shorten Please!')

  fireEvent.click(button)
  expect(fakeUrlPost).toHaveBeenCalledTimes(1);
  })
})
