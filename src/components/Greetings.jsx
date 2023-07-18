import React from 'react';
import { useSelector } from 'react-redux';

const Greetings = () => {
  const { greet, isLoading } = useSelector((store) => store.greet);
  return (
    <div>
      <h1>{isLoading ? 'loading ...' : greet.massage}</h1>
    </div>
  );
};

export default Greetings;
