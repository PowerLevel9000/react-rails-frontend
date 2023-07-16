import React from 'react'
import { useSelector } from 'react-redux';
const Greetings = () => {
  const { greet, isLoading } = useSelector((store) => store.greet)
  console.log(greet, isLoading)
  return (
    <div>
      {greet.massage}
    </div>
  )
}

export default Greetings
