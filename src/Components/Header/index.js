import React from "react";
import HeaderStyle from "./header.module.css";
import Logo from "../../ui/logo.png";

const HeaderText = () => {
  return (
    <>
      <div className={HeaderStyle.container}>
        <div>
          <img
            src={Logo}
            alt="Expense Tracker App"
            className={HeaderStyle.icon}
          />
        </div>
        <div className={HeaderStyle.header}>Expense Tracker App</div>
      </div>
    </>
  );
};

export default HeaderText;
