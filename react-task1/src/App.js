import { useState } from 'react'
import './App.css'
function ReactApp() {
  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState([])
  const [isChecked, setIsChecked] = useState(false)
  function togglegedList(){
    setIsChecked(!isChecked)
  }
  function deleteIcon(id) {
    setData((data) => data.filter((elem, i) => i !== id))
  }
  return <>
    <div>
      <form className='form' onSubmit={(event) => { event.preventDefault() }}>
        <input className='input' type='text' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        <button className='btn' type='submit' onClick={() => {
          const newData = [inputValue, ...data]
          setData(newData)
          setInputValue('')
        }}>
          Submit
        </button>
      </form>
      <input type='checkbox' id='checkbox' onClick={togglegedList} checked={isChecked} />
      <label htmlFor='checkfox'>List</label>
      <hr />
      {isChecked ? (<ol>
        {data.map((obj, i) => {
          return <li key={i}>
            <span>{obj}</span>
            <span className="delete" onClick={() => deleteIcon(i)}>❌</span>
          </li>
        })}
      </ol>):
      (<div className='card-wrap'>
        {data.map((obj, i) => {
          return <div className='card' key={i}>
            <span>{obj}</span>
            <span className="delete" onClick={() => deleteIcon(i)}>❌</span>
          </div>
        })}
      </div>)}
      
    </div>
  </>
}


export default ReactApp;
