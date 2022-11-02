import React, { Component } from "react";
import { Link } from "react-router-dom";
import ChildA from "./ChildA";

class Parent extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      count: 0,
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    console.log("Parent_Constructor");
  }
  static getDerivedStateFromProps() {
    console.log("Parent_getDerivedStateFormProps");
  }
  componentDidMount() {
    console.log("Parent_DidMount");
  }
  componentDidUpdate(PrevProps, PrevState) {
    console.log(" Parent updated");
  }
  componentWillUnmount() {
    console.log("Parent Unmount");
  }
  increment() {
    this.setState(x => ({
      count: x.count + 1,
    }));
  }

  decrement() {
    this.setState(previousValue => ({
      count: previousValue.count - 1,
    }));
  }
  render() {
    console.log("Parent Rendered");
    return (
      <>
        <ChildA />
        <h1>Parent Component {this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <Link to="/childa">childa</Link>
      </>
    );
  }
}

export default Parent;
