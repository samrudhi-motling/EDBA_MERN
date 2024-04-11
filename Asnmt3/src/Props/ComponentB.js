import React from 'react';

const ComponentB = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>email: {props.email}</p>
      <p>phone_number: {props.phone_number}</p>
    </div>
  );
};

export default ComponentB;


