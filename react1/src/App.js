import { UseEffectComp } from "./UseEffect";
import { useState } from "react"
import { InputForm } from "./InputForm"
import { DataList, dataArray } from "./DataList"
import { UseRefDemo } from "./UseRefDemo";
import { UseContextdemo } from "./UseContextdemo";
import { UseReducerDemo } from "./UseReducerDemo";
import { ReduxDemo } from "./reduxFiles/reduxDemo";
const ReactComp = () => {

  return (<>
    {/* <UseEffectComp /> */}
    {/* <UseRefDemo /> */}
    {/* <UseContextdemo /> */}
    {/* <UseReducerDemo /> */}
    <ReduxDemo/>
  </>)

  //   const increaseCount = () => {
  //     setCount(count + 1)
  //   }
  //   const [count, setCount] = useState(0)
  //   return <>
  //     <button onClick={() => { setCount(count - 1) }} id="subtractBtn">Subtract</button>
  //     <span>Count:{count}</span>
  //     <button onClick={increaseCount} id="addBtn">Add</button>
  //     <InputForm rcCount={count}  >
  //       {count > 5 ? 
  //       (<Comp1 compCount={count * 3000} />) : (<Comp1 compCount={count * 1000} />)}



  //       {count > 5 && <div>Hello from div</div>}
  //     </InputForm>
  //     {dataArray.map((obj, idx) =>{
  //       const {a , b} = obj
  //       return <DataList order={idx+1} a={a} b={b} />
  //     })}
  //   </>;
  // }

  // const Comp1 = (props) => {
  //   const { compCount } = props
  //   return <div>From Comp1: {compCount}</div>
}
export default ReactComp;


