import { useState } from "react"
const InputForm = (props) => {
    const { rcCount, children } = props
    const [inputValue, setInputValue] = useState('')
    return <form>
        <div>Count In Form : {rcCount}</div>
        {children}
        <input type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
        <div>{inputValue}</div>
        <input type="submit" />
    </form>
}
export { InputForm };
