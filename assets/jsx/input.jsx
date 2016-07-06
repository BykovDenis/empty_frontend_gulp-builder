import React from 'react';

const Input = React.createClass({
  render: ()=>{
  const text = "begin state 2";
  return <input type="text" placeholder="Hello" value={text} />;
  }
});

export default Input;