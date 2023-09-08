import {useContext} from 'react'
import {CountContext} from '../UseContextdemo'
export const Comp4 = (props) => {
    const { count } = useContext(CountContext)
    // const countCtx = useContext(CountContext)
    // const { count4 } = props
    // console.log({ countCtx })
    console.log({ count })
    return <>
        <div id='comp4'>
            {/* {countCtx.count} */}
            {count}
        </div>
    </>
}