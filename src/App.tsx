import "./App.css";
import { ErrorBoundry } from "./components/utils/errorboundry/ErrorBoundry";
import { TestView } from "./components/views/TestView";

export function App() {
  return (
    <>
      <ErrorBoundry message="error">
        <TestView></TestView>
      </ErrorBoundry>
    </>
  );
}
