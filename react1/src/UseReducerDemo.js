import { useState, useReducer } from "react"

const reducer = (state, action) => {
  console.log({ action, state })
  switch (action) {
    case 'pluseOne':
      return ++state
    case 'pluseHundrad':
      state += 100
      return state
    case 'divideBy2':
      state /= 2
      return state
    case 'multiplyBy10':
      state *= 10
      return state
      default :
      return state
  }
}
const initState = 0
export const UseReducerDemo = () => {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, initState)
  // const incrementBy1 = () => {
  //   setCount(state + 1)
  // }
  // const incrementBy100 = () => {
  //   setCount(state + 100)
  // }
  // const divideBy2 = () => {
  //   setCount(state / 2)
  // }
  // const multiplyBy10 = () => {
  //   setCount(state * 10)
  // }
  return (<>
    <button onClick={() => { dispatch('pluseOne') }}>+1 </button>
    <button onClick={() => { dispatch('pluseHundrad') }}>+100</button>
    <button onClick={() => { dispatch('divideBy2') }}>/2</button>
    <button onClick={() => { dispatch('multiplyBy10') }}>*10</button>
    {state}
  </>
  )
}

