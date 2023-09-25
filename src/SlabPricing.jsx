// import {React,useState} from 'react'

// const SlabPricing = () => {
//   return (
//     <>
//         {/* <div className='card'>
//             <form onSubmit={(e)=>e.preventDefault()}>
//                 <input type="text" placeholder='starting quantity' name='startingQuantity' />
//                 <input type="text" placeholder='last quantity' name='lastQuantity' />
//                 <input type="text" placeholder='prize' name='prize' />
//             </form>
//         </div> */}
//         <SlabPrizeTable/>
//     </>
//   )
// }

// const SlabPrizeTable=()=>{
//     const [quantity, setQuantity] = useState(1)
//     const submitHandle = (e) => {
//         e.preventDefault()
//         setData((data) => [...data, {
//             date: e.target.date.value,
//             quantity: e.target.quantity.value
//         }]
//         )
//     }
//     return(<>
//     <form action="">


//     </form>
//             <table border={1}>
//                 <thead>
//                     <th>Staring Quantity</th>
//                     <th>last Quantity Quantity</th>
//                     <th>Prize</th>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td><input type="number"  placeholder='starting quantity' name='startingQuantity' /></td>
//                         <td><input type="number"  placeholder='last quantity' name='lastQuantity' /></td>
//                         <td><input type="number" placeholder='prize' name='prize' /></td>
//                     </tr>
//                 </tbody>
//             </table>
//     </>)
// }
// export default SlabPricing