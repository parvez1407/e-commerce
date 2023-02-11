import { useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';

function App() {
  const [count, setCount] = useState(0);
  const countIncrease = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <Header count={count}></Header>
      <Shop countIncrease={countIncrease}></Shop>
    </div>
  );
}

export default App;
