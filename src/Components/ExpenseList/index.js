import React from "react";
import Stylelist from "./list.module.css";

const ExpenseList = ({ items, deleteI }) => {
  return (
    <div className={Stylelist.container}>
      <div className={Stylelist.top}>
        <div className={Stylelist.topheading}>
          <h1>Expense Items List</h1>
        </div>
        <div className={Stylelist.toptotal}>
          <h2>Total Cost</h2>
          <p>
            $
            {parseFloat(
              items.reduce((total, item) => total + parseFloat(item.amount), 0)
            ).toFixed(2)}
          </p>
        </div>
      </div>

      <div className={Stylelist.listcontainer}>
        <div className={Stylelist["list-header"]}>
          <div>Item</div>
          <div>Cost</div>
          <div>Date</div>
          <div></div>
        </div>
        {items.map((item) => (
          <div key={item.id} className={Stylelist["list-item"]}>
            <div>{item.title}</div>
            <div>${item.amount}</div>
            <div>{item.date}</div>
            <div>
              <button
                className={Stylelist.deletebtn}
                onClick={() => deleteI(item.id)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
