// import FormSection from "../sections/FormSection";
import { render, screen } from "@testing-library/react";
import MongoProductAllSection from "../sections/MongoProductAllSection";
import { useEffect } from "react";
import { useMongoContext, MongoContextType } from "../contexts/MongoContext";
import LoginSection from "../sections/AuthLoginSection";
import RegisterSection from "../sections/AuthRegisterSection";


// Test if MongoDB API is working by checking for item Black coat
// Gives error.. Would be cool test if it worked.
it("Test if MongoDB API is working by checking for item Black coat", () => {
    const {
        mongoFeatured,
        mongoGetFeatured
    } = useMongoContext() as MongoContextType
    
    useEffect(() => {
        mongoGetFeatured(3)
    }, [])
    render(<MongoProductAllSection title={"Featured Products"} items={mongoFeatured} />);
    const headingElement = screen.getByText(/Black coat/i);
    expect(headingElement).toBeInTheDocument();
});

// Test to see if the array has two elements (inputs)
it("Test to see if two input for login renders", () => {
    render(<LoginSection />);
    const inputElements = screen.getAllByRole("textbox");
    expect(inputElements.length).toBe(1);
});
