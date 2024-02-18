import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, prettyDOM, fireEvent } from "@testing-library/react";
import Note from "./Note";

test("renders content", () => {
  const note = {
    content: "Component testing is done with react-testing-library",
    important: true,
  };

  const clickButton = () => {
    console.log("You are clicking button");
  };

  const component = render(<Note note={note} sayClick={clickButton} />);

  //   a smaller part of the component and print its HTML code
  const li = component.container.querySelector("li");

  console.log(prettyDOM(li));

  component.debug();

  // method 1
  expect(component.container).toHaveTextContent(
    "Component testing is done with react-testing-library"
  );

  // method 2
  const element = component.getByText(
    "Component testing is done with react-testing-library"
  );
  expect(element).toBeDefined();

  // method 3
  const div = component.container.querySelector(".note");
  expect(div).toHaveTextContent(
    "Component testing is done with react-testing-library"
  );
});

test("clicking the button calls event handler once", () => {
  const note = {
    content: "Component testing is done with react-testing-library",
    important: true,
  };

  const mockHandler = jest.fn();

  const component = render(<Note note={note} sayClick={mockHandler} />);

  const button = component.getByText("Please click here");
  fireEvent.click(button);

  expect(mockHandler.mock.calls).toHaveLength(1);
});
