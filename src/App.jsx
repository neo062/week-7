import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState()
  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  );
}

function Count(props) {
  const { count, setCount } = props
  return (
    <>
      {count}
      < Buttons />
    </>
  )
}
function Buttons({ setCount }) {
  return (
    <div>
      <button
        onClick={() => {
          setCount((preValue) => preValue - 1)
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount((preValue) => preValue + 1)

        }}
      >
        Increase
      </button>
    </div>
  )
}
export default App;
