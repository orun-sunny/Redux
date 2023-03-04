import { useState } from "react";
import Counter from "./Components/Counter/Counter";
import Stats from "./Components/Counter/Stats";

const initialState = [{
  id: 1,
  count: 0
}, {
  id: 2,
  count: 0,
},
];

export default function App() {
  const [state, setState] = useState(initialState);

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);

  }



  const increment = (id) => {
    const updatedCounter = state.map(c => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count + 1,

        };
      }
      return { ...c };
    })

    setState(updatedCounter);

  };
  const decrement = (id) => {
    const updatedCounter = state.map(c => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count - 1,

        };
      }
      return { ...c };
    })

    setState(updatedCounter);

  };
  return (
    <div class="h-screen w-screen  p-10 bg-gray-100 text-slate-700 w-full ">
      <h1 className="max-w-md mx-auto text-center text-2xl font0bold">Simple Counter</h1>


      <div class="max-w-md mx-auto mt-10 space-y-5">
        {state.map(count => (

          < Counter
            key={count.id}
            count={count.count}
            id={count.id}
            increment={increment}
            decrement={decrement} >
          </ Counter>
        ))}
        {/* <Counter increment={increment} decrement={decrement}></Counter> */}
        <Stats count={totalCount()}></Stats>

      </div>
    </div >
  )
}