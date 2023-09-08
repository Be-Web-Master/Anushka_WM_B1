import { Comp3 } from "./comp3"
export const Comp2 = () => {
    // const { count2 } = props
    console.log('comp2')
    return <>
        <div id='comp2'>
            <Comp3 />
            {/* count3={count2} */}
        </div>
    </>
}