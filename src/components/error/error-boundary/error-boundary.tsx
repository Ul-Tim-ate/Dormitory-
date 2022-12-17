import React, { Component } from "react";
import { ErrorsMessage } from "../../../types/errors";
import ErrorAuth from "../error-auth/error-auth";
import ErrorIndicator from "../error-indicator/error-indicator";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = { hasError: false, errorMessage: "" };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ hasError: true, errorMessage: error.message });
  }

  render() {
    if (this.state.hasError) {
      switch (this.state.errorMessage) {
        case ErrorsMessage.NO_ACCESS:
          return <ErrorAuth />;
        default:
          return <ErrorIndicator />;
      }
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
