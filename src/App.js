import './App.css'
import React, { useEffect, useState } from 'react'
import { CardComp } from './cardComp'

const App = () => {
  const [apiData, setApiData] = useState([])
  const [searchData, setSearchData] = useState({searchVal: ''})
 
  
  useEffect(() => {
    getApi()
  }, [])

  async function getApi() {
    const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e3dfa17e00msh27a6ff12333f6f2p194d64jsn02f3b10c7c52',
        'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setApiData(result.hints)
      // console.log(result);
      // console.log(apiData)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
        <input className='searchInput' type="search" placeholder='seach food' onChange={(e)=>{
            setSearchData(serach=>{
              serach.searchVal = e.target.value;
              return{...serach}
            })
        }}/>
      <div className="main" >  
      {apiData.map((food,i) => {
        {if((food.food.label).toLowerCase().includes(searchData.searchVal)){
          return <CardComp food={food} searchData={searchData}/>}
          else return;
        }
        
    
  })} 
      </div>
    </>
  )
}

export default App

