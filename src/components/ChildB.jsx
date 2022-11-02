import React, { Component } from 'react';
class ChildB extends Component {
    state = {  }
    constructor() {
        super();
        console.log("ChildB_Constructor");
      }
      static getDerivedStateFromProps() {
        console.log("ChildB_getDerivedStateFormProps");
      }
      componentDidMount() {
        console.log("ChildB_DidMount");
      }
      componentDidUpdate(PrevProps,PrevState){
    
        console.log(" ChildB updated");
       
    }
    componentWillUnmount(){
      console.log("ChildB Unmount");
    }
    render() {
      console.log("ChildB Render") 
        return (
            <>
            <h3>Child B</h3>
            </>
        );
    }
}
 
export default ChildB;