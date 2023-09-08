import { useState,createContext } from 'react'
import { Comp1 } from './contextFiles/comp1'
export const CountContext = createContext(0)
export const UseContextdemo = () => {
    const [count, setCount] = useState(0)
    console.log({ count })
    return (
        <CountContext.Provider value={{ count }}>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <Comp1 />
        </CountContext.Provider>
    )
}

