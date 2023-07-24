import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { getGreet } from './redux/greets/greetSlice';
import Greetings from './components/Greetings';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreet());
  }, [dispatch]);
  return (
    <div className="App">
      <>hi how are you</>
      <Greetings />
    </div>
  );
}

export default App;
