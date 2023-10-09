import React from 'react'
import {useLocation,Link} from 'react-router-dom'
export const Home = () => {
    const location = useLocation();
    const {pathname,search} = location;
    // GET SEARCHED PARAMS
    //const searchParams = new URLSearchParams(search).get('name');
    // console.log({searchParams})
    const data = {
        name : 'abcd'
    }
  return (
    <div>Home
        <Link to='/about' state={data}>Go to About Us</Link>
    </div>
  )
}
