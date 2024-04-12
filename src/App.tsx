import "./App.css";
import { AuthView } from "./components/authView/AuthView";
import { ErrorBoundry } from "./components/utils/errorboundry/ErrorBoundry";

export function App() {
  return (
    <>
      <ErrorBoundry>
        <AuthView />;
      </ErrorBoundry>
    </>
  );
}
