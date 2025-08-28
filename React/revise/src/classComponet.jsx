import { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0, name: 'Ebi' };
  }

  componentDidMount() {
    console.log('mounted');
  }

  componentDidUpdate() {
    console.log('updated');
  }

  render() {
    const increment = () => {
      this.setState({
        count: this.state.count + 1,
        name: this.state.name == 'Ebi' ? 'Manoj' : 'Ebi',
      });
    };
    return (
      <div>
        <h1>Class Component</h1>
        <p>Props:{this.props.name}</p>
        <p onClick={() => increment()}>count:{this.state.count}</p>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default Counter;
