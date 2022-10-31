import React, { Component } from "react";
import ChildA from "./ChildA";

class Parent extends Component {
  constructor() {
    super();
    console.log("Parent_Constructor");
  }
  static getDerivedStateFromProps() {
    console.log("Parent_getDerivedStateFormProps");
  }
  componentDidMount() {
    console.log("Parent_DidMount");
  }
  componentDidUpdate(PrevProps,PrevState){

    console.log(" Parent updated");
   
}
componentWillUnmount(){
  console.log("Parent Unmount");
}
  render() {
    console.log("Parent Rendered");
    return (
      <>
        <h1>Parent Component</h1>
        <ChildA />
      </>
    );
  }
}

export default Parent;
