import FormSection from '../sections/FormSection'
import { render, screen } from '@testing-library/react'

// Test if form headings is displayed
it('Test to see if headings for FormSection is rendering', () => {
    render(<FormSection />);
    const headingElement = screen.getByText(/Come in Contact with Us/i);
    expect(headingElement).toBeInTheDocument;

})


// Test if there are any inputs in the form seciton
it('Test to see if inputs for form is rendering', () => {
    render(<FormSection />);
    const inputElement = screen.getAllByRole("textbox")
    expect(inputElement).toBeInTheDocument;

})

// Test to see if the array has three elements (inputs)
it('Test to see if ALL three inputs for form is rendering', () => {
    render(<FormSection />);
    const inputElements = screen.getAllByRole("textbox")
    expect(inputElements.length).toBe(3);
})

