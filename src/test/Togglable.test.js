import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Togglable from "./Togglable";

describe("<Togglable />", () => {
  let component;

  //   The beforeEach function gets called before each test
  beforeEach(() => {
    component = render(
      <Togglable>
        <div className="testDiv" />
      </Togglable>
    );
  });

  test("renders its children", () => {
    expect(component.container.querySelector(".testDiv")).toBeDefined();
  });

  test("at start the children are not displayed", () => {
    const div = component.container.querySelector(".togglableContent");

    expect(div).toHaveStyle("display: none");
  });

  test("after clicking the button, children are displayed", () => {
    const button = component.getByText("Set Visible");
    fireEvent.click(button);

    const div = component.container.querySelector(".togglableContent");
    expect(div).not.toHaveStyle("display: none");
  });

  //   The component contains two buttons, but since querySelector returns the first matching button, we happen to get the button that we wanted.
  test("toggled content can be closed", () => {
    // const button = component.container.querySelector("button");
    // fireEvent.click(button);

    // using this way but It's not a wise move to depend on the order of the buttons in the component
    // const closeButton = component.container.querySelector(
    //   "button:nth-child(2)"
    // );
    const closeButton = component.getByText("Close Button");
    fireEvent.click(closeButton);

    const div = component.container.querySelector(".togglableContent");
    expect(div).toHaveStyle("display: none");
  });
});
