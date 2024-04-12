import "./App.css";
import { ErrorBoundry } from "./components/utils/errorboundry/ErrorBoundry";
import { TestView } from "./tests/testUtils/TestErrorView.testUtil";

export function App() {
  return (
    <>
      <ErrorBoundry>
        <TestView message="devError"></TestView>
      </ErrorBoundry>
    </>
  );
}
