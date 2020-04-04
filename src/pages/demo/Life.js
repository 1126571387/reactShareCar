import React from "react";
import Children from "./Children";

export default class Life extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  add2 = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  add1() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.add1.bind(this)}>父亲bind</button>
        <button onClick={this.add2}>父亲nobind</button>
        <Children count={count} add2={this.add2} add1={this.add1.bind(this)} />
        <p>{count}</p>
      </div>
    );
  }
}
