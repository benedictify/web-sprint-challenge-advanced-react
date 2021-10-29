import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
	render(<CheckoutForm/>);
});

test("shows success message on submit with form details", () => {
	render(<CheckoutForm/>);
	
	// WHEN all forms are filled with valid data:
	// look for div or element with class="success-message"

	// what does it mean when an input is valid?
	
	// input name="firstName"
	// any letters a-z/i

	// input name="lastName"


	// input name="address"


	// input name="city"


	// input name="state"


	// input name="zip"


});
