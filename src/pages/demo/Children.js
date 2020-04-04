import React from "react";

export default class Children extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   count: 0
    // };
  }
  // add2 = () => {

  // };
  // add1 ()  {

  // };
  render() {
    const {count,add2,add1}=this.props
    return (
      <div>
        <button onClick={add2}>儿bind</button>
        <button onClick={add1}>儿rnobind</button>
    <p>{count}</p>
      </div>
    );
  }
}