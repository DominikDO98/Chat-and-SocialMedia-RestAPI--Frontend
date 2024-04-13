import "./App.css";
import { AuthView } from "./components/authView/AuthView";
import { ErrorBoundry } from "./utils/errorUtils/ErrorBoundry";

export function App() {
  return (
    <>
      <ErrorBoundry>
        <AuthView />
      </ErrorBoundry>
    </>
  );
}
