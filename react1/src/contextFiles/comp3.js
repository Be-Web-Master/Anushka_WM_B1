import { Comp4 } from "./comp4"
export const Comp3 = () => {
    // const { count3 } = props
    console.log('comp3')
    return <>
        <div id='comp3'>
            <Comp4 />
            {/* count4={count3}  */}
        </div>
    </>
}