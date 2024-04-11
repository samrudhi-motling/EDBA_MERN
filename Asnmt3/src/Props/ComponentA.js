import React from 'react';
import ComponentB from './ComponentB'

const ComponentA = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ComponentB name="John" age={30} email = "johnd.gmail.com" phone_number={9984727534}/>
    </div>
  );
};

export default ComponentA;
