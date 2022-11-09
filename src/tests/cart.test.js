import FormSection from '../sections/FormSection'
import { render, fireEvent, screen } from '@testing-library/react'

it('Check to see if headings for FormSection is rendering', () => {
    render(<FormSection />);
    const headingElement = screen.getByText(/Come in Contact with Us/i);
    expect(headingElement).toBeInTheDocument;

})


// returns an array getAllbyRole. Does not work with getByText
it('Check to see if inputs for form is rendering', () => {
    render(<FormSection />);
    const inputElement = screen.getAllByRole("textbox")
    expect(inputElement).toBeInTheDocument;

})

// Check to see if the array has three elements
it('Check to see if ALL three inputs for form is rendering', () => {
    render(<FormSection />);
    const inputElements = screen.getAllByRole("textbox")
    expect(inputElements.length).toBe(3);
})

