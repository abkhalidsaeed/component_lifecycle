import React, { Component } from "react";
import ChildB from "./ChildB";

class ChildA extends Component {
  state = {};
  constructor() {
    super();
    console.log("ChildA_Constructor");
  }
  static getDerivedStateFromProps() {
    console.log("ChildA_getDerivedStateFormProps");
  }
  componentDidMount() {
    console.log("ChildA_DidMount");
  }
  componentDidUpdate(PrevProps, PrevState) {
    console.log(" ChildA updated");
  }
  componentWillUnmount() {
    console.log("ChildA Unmount");
  }
  render() {
    return (
      <>
        <h2>Child A</h2>
        <ChildB />
      </>
    );
  }
}

export default ChildA;
