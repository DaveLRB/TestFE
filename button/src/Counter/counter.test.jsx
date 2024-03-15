import "@testing-library/jest-dom";
//import '@testing-library/jest-dom/extend-expect';
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./counter";

test("it should render the component", () => {
  render(<Counter />);
  screen.debug();
});

test('it should increment when the "Increment" button is pressed', async () => {
  // Setup
  const user = userEvent.setup();
  render(<Counter />);
  const increment = screen.getByRole("button", { name: "+" });
  const count = screen.getByTestId("current-count");
  // Act
  await user.click(increment);
  // Assert
  expect(count).toHaveTextContent("1");
});

test("it should render the component with an initial count", () => {
  // Setup
  const initialCount = 5; 
  render(<Counter initialCount={initialCount} />);
  const count = screen.getByTestId("current-count");

  // Assert
  expect(count).toHaveTextContent(initialCount.toString());
});

test("it should reset the count when 'Reset' button is pressed", async () => {
  // Setup
  const initialCount = 5; 
  render(<Counter initialCount={initialCount} />);
  const reset = screen.getByTestId("reset-button");
  const count = screen.getByTestId("current-count");
  console.log(count)
  // Act
  await userEvent.click(reset);
  // Assert
  expect(count).toHaveTextContent("0");
});

