import { Component, ErrorInfo, PropsWithChildren } from "react";
import { ErrorView } from "../../views/ErrorView";

interface Props extends PropsWithChildren {
  hasError: boolean;
  message: string;
}

export class ErrorBoundry extends Component {
  public state;
  constructor(public props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    if (error) return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorView message={this.props.message} />;
    }
    return this.props.children;
  }
}
