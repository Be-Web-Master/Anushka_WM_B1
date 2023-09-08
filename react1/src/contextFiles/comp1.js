import { Comp2 } from "./comp2"
export const Comp1 = () => {
    console.log('comp1')
    return <>
        <div id='comp1'>
            <Comp2 />
        </div></>
}