import { Component } from 'react';

export const Errorsimulation = () => {
  return (
    <div>
      <h1>Some random page</h1>
      <ErrorBoundary>
        <Language name="Python" />
        <Language name="Javascript" />
        <Language name="CSS" />
      </ErrorBoundary>
    </div>
  );
};

const Language = ({ name }) => {
  if (name === 'CSS') throw new Error('Not a Programming language');
  return <div>{name}</div>;
};

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hashError: false };
  }

  static getDerivedStateFromError() {
    return {
      hashError: true,
    };
  }

  render() {
    if (this.state.hashError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}
