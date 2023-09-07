import { useEffect, useState } from "react"
export const UseEffectComp = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Called from effect")
    },[count])
    return (<>
        <div onClick={() => { setCount(count + 1) }}>{count}</div>
    </>)
}