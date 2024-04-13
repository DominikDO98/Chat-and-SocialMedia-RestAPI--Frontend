import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import React from "react";
import { ErrorBoundry } from "../../utils/errorUtils/ErrorBoundry";
import { TestView } from "../testUtils/TestErrorView.testUtil";
describe("ErrorBoundry tests", () => {
  test("ErrorBoundry catches error in component, and displayes errorView with correct message", async () => {
    render(
      <ErrorBoundry>
        <TestView message="testError" />
      </ErrorBoundry>
    );
    await UserEvent.click(screen.getByTestId("fireError"));

    expect(await screen.findByTestId("errorMessage")).toHaveTextContent(
      "testError"
    );
    cleanup();
  });
});
