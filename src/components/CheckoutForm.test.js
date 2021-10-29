import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import STATE_ABBREVIATIONS from "./../constants/stateAbbreviations";
import userEvent from "@testing-library/user-event";

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
	const firstName = screen.getByLabelText(/first name/i);
	userEvent.type(firstName, "Benedict")
	// console.log(firstName);
	console.log(expect(firstName).toHaveValue(/first name/i))

	// any letters a-z/i
	// [A-Za-z]+
	
	// input name="lastName"
	// any letters a-z/i
	// [A-Za-z]+

	// input name="address"
	// any amount of numbers, space, any amount of letters or spaces
	// [0-9]* \{1}[a-zA-Z]+

	// input name="city"
	// any letters or spaces
	// [A-Za-z ]+

	// input name="state"
	// string is a member of STATE_ABBREVIATIONS
	// STATE_ABBREVIATIONS.includes(stateStr)

	// input name="zip"
	// any 6 numbers
	// [0-9]{6}

});
