import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavMenu } from "../NavMenu/NavMenu";
import MenuIcon from '../../images/Hamburger_icon.svg.png'
import {Orders} from  '../Orders/Orders';
import { Products } from "../Products/Products";
import { NotFound } from "../NotFaund/NotFaund";


export const Main = () => {
const [menuStatus, setMenuStatus] = useState(false);
const handleChangeStatusMenu = () => {
  setMenuStatus(false)
};

  return (
    <div className="main">
      <BrowserRouter>
        <button
          className="menu-btn"
          onClick={() => setMenuStatus(!menuStatus)}
        >
          <img src={MenuIcon} alt="" className="menu-btn__image" />
        </button>
        <div className={`nav-menu ${menuStatus ? "active" : ""}`}>
          <NavMenu status = {menuStatus} handleChangeStatusMenu={handleChangeStatusMenu}/>
          <button className="menu-close" onClick={() => setMenuStatus(!menuStatus)}>X</button>
        </div>
        <Routes>
          <Route path="/" element={<Orders />}/>
          <Route path="/Products" element={<Products />}/>
          <Route path="/NotFaund" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )

};
