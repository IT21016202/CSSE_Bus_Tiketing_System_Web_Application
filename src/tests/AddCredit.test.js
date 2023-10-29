import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import Jest DOM matchers
import AddCredit from "./AddCredit";

test("renders Add Credit component", () => {
  render(<AddCredit />);
  // Check if important elements are present in the component
  expect(screen.getByText("Add Credit")).toBeInTheDocument();
  expect(screen.getByText("Transaction Number")).toBeInTheDocument();
  expect(screen.getByText("Location")).toBeInTheDocument();
  expect(screen.getByText("Amount")).toBeInTheDocument();
  expect(screen.getByText("Enter Bank Details")).toBeInTheDocument();
  // Add more assertions as needed
});

test("form submission opens the bank details modal", () => {
  render(<AddCredit />);
  const submitButton = screen.getByText("Add Credit");

  fireEvent.click(submitButton);

  const modal = screen.getByText("Enter Bank Details");
  expect(modal).toBeInTheDocument();
});

test("entering transaction number generates the transaction number", () => {
  render(<AddCredit />);
  const transactionNumberInput =
    screen.getByPlaceholderText("Transaction Number");
  const submitButton = screen.getByText("Add Credit");

  fireEvent.change(transactionNumberInput, { target: { value: "123" } });
  fireEvent.click(submitButton);

  const generatedTransactionNumber = screen.getByText(/Transaction No:/);
  expect(generatedTransactionNumber).toBeInTheDocument();
  expect(generatedTransactionNumber).toHaveTextContent("Transaction No: 123"); // Adjust this based on the actual behavior
});

// Add more test cases for other interactions, form fields, and scenarios
