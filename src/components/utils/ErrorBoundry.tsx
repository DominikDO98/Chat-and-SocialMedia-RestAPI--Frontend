import { Component, ErrorInfo, PropsWithChildren } from "react";
import { ErrorView } from "../views/ErrorView";

interface Props extends PropsWithChildren {
  hasError: boolean;
  fallback: string;
}

export class ErrorBoundry extends Component {
  public state;
  constructor(public props: Props) {
    super(props);
    this.state = {
      hasError: false,
      fallback: "Oh no! Something went wrong...",
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorView message={this.props.fallback} />;
    }
    return this.props.children;
  }
}
