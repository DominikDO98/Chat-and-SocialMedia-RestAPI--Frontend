import { Component, ErrorInfo, PropsWithChildren } from "react";
import { ErrorView } from "../../components/views/ErrorView";

export class ErrorBoundry extends Component {
  public state;
  constructor(public props: PropsWithChildren) {
    super(props);
    this.state = {
      hasError: false,
      message: "",
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorView message={this.state.message} />;
    }
    return this.props.children;
  }
}
