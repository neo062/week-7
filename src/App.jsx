import { useState } from 'react';
import './App.css';
import { CountContext } from './context/countContext';
function App() {
  // const [count, setCount] = useState()
  return (
    <div>
      <CountContext.Provider>
        <CountRender />
        {/* <Count count={count} setCount={setCount} /> */}
      </CountContext.Provider>
    </div>

  );
}

function Count() {
  return (
    <>
      {count}
    </>
  )
}
function Buttons() {
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
const CountRender = () => {
  return (
    <>
      <Count />
      <Buttons />
    </>
  )
}
export default App;
