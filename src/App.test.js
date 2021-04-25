import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("check if meals are displayed", async () => {
  render(<App />);

  const menuItemCards = await screen.findAllByTestId("menu-item-card");
  expect(menuItemCards.length).toBeGreaterThanOrEqual(1);
});

test("add a menu to cart", async () => {
  render(<App />);

  const menuItemCards = await screen.findAllByTestId("menu-item-card");

  userEvent.click(menuItemCards[0]);
  userEvent.click(menuItemCards[2]);

  const cartAmount = screen.getByTestId("cart-amount");
  const total = Number(
    cartAmount.textContent.replace(" €", "").replace(",", ".")
  );
  expect(total).toEqual(37.9);
});

test("modify amount and quantity in cart", async () => {
  render(<App />);

  const menuItemCards = await screen.findAllByTestId("menu-item-card");

  userEvent.click(menuItemCards[0]);
  userEvent.click(menuItemCards[1]);

  const cartLines = screen.getAllByTestId("cart-line");
  expect(cartLines.length).toEqual(2);

  const plusButton = screen.getAllByTestId("plus-button");
  const minusButton = screen.getAllByTestId("minus-button");

  const itemsQuantities = screen.getAllByTestId("item-quantity");

  expect(itemsQuantities[0].textContent).toEqual("1");

  userEvent.click(plusButton[0]);
  userEvent.click(plusButton[0]);
  expect(itemsQuantities[0].textContent).toEqual("3");

  userEvent.click(minusButton[0]);
  expect(itemsQuantities[0].textContent).toEqual("2");

  const newCartAmount = screen.getByTestId("cart-amount");
  const total = Number(
    newCartAmount.textContent.replace(" €", "").replace(",", ".")
  );

  expect(total).toEqual(77.5);
});
