import {useState,useRef , useEffect} from "react"

export const UseRefDemo = () => {
    const [toggle, setToggle] = useState(false)
    const countRef = useRef(0)
    useEffect(() => {
      if(countRef.current){
       countRef.current.innerText = 0
      }
    },[])
    console.log(countRef.current)
    return (
        <div>
            <button
                onClick={() => { 
                    setToggle(!toggle)
                    countRef.current.innerText = ++(countRef.current.innerText);
                     }}>add
            </button>
            <div ref={countRef}>
                {countRef.current.innerText}
            </div>
        </div>
    )
}
