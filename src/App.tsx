import "./App.css";
import { ErrorBoundry } from "./components/utils/errorboundry/ErrorBoundry";
import { TestView } from "./tests/errorView.tests/TestErrorView.testUtil";

export function App() {
  return (
    <>
      <ErrorBoundry>
        <TestView></TestView>
      </ErrorBoundry>
    </>
  );
}
