import { useRef, useState } from "react"
export const CardComp = (props) => {
  const { food } = props
  const [isButton, setIsButton] = useState(false)
  const [count, setCount] = useState(0)
  const [comment, setComment] = useState('')
  const [saveComment, setSaveComment] = useState([])

  let str = ''

  const ref = useRef(null);

  return (<>
    <div key={food.food.foodId} className="card">
      <img src={food.food.image} />
      <p className="label">{food.food.label}</p>
      <div className="commentBox">
        {count}
        <div ref={ref}>
        <span name="span"  contenteditable="true" onKeyUp={(e)=> {
                 
                //  const str = e.target.innerText
    
                console.log({a: e.target});
                     
          if(e.target.innerText.length < 10){
            str = e.target.innerText
          } else {
            console.log({str});
            // ref.current.attributes[0].textContent = 'false'
            // e.target.innerText = str
            // e.target.innerText
            // e.target.innerHTML = str
           
            const span = document.createElement('span')
            // span.setAttribute("contenteditable", true)
            span.innerText += e.target.innerHTML.slice(-1)   
             span.style.backgroundColor = 'red'
             ref.current.appendChild(span)

             e.target.innerText = str
          }
        }}>

   {/* {comment} */}

   edit
        </span>
        </div>
        <br /><br /><br /><br />
        <input type="text" name="comment" className='commentInput' onChange={(e) => {
          setIsButton(true)
         

          // console.log({ input: e.target.append});

          if (e.target.value.length < 10) {
            // console.log("11");
            setComment(e.target.value)
            setSaveComment(...saveComment, comment)
          } else {
            //  
            const span = document.createElement('span')
             span.innerText += e.target.value.slice(-1)
             span.style.backgroundColor = 'red'
             ref.current.appendChild(span);
            //  e.target.appendChild(span)
          }

          setCount(e.target.value.length)
        }
        }
        />
        {isButton && <button onClick={() => {
          return setSaveComment(...saveComment, comment)
        }}>save</button>}
      </div>
      <div
      // value={comment} 
      // style={{ backgroundColor: comment.length > 10 ? 'red' : 'none' } }
    >
       <span> {comment} </span>
      </div>
      {saveComment}
    </div>
  </>)
}