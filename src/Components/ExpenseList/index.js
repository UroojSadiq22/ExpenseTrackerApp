// import React from 'react'

// const Expenselist = ({items}) => {
//   return (
//     <>
//       <div>
//         {items.map((item , i)=>
//          (<ul key={i}>
//             <li><h1>{item.title}</h1>
//             <p>${item.amount}</p>
//             <p>{item.date}</p>
//             <button>delete</button></li>
            
//         </ul>))
//         }
//         <h1>Total</h1>
//         <p>${items.reduce((total , item) =>total + item.amount,0)}</p>

    
//       </div>
//     </>
//   )
// }

// export default Expenselist

import React from 'react';
import Stylelist from './list.module.css'

const Expenselist = ({ items,deleteI }) => {
  return (
    <>
      <div className={Stylelist.container}>
        <h1>Expense Items List</h1>
        {items.map((item) => (
          <ul>
            <li className={Stylelist.list} >
              <label>{item.title}</label>
              <p>${item.amount}</p>
              <p>{item.date}</p>
              <button className={Stylelist.deletebtn} onClick={()=>deleteI(item.id)}>delete</button>
            </li>
          </ul>
        ))}
        <div className={Stylelist.total}>
        <h2>Total</h2>
        <p>${parseFloat(items.reduce((total, item) => total + parseFloat(item.amount), 0)).toFixed(2)}</p>
        </div>
        
        </div>

        
    </>
  );
};

export default Expenselist;



