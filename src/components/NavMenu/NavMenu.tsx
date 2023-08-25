import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import User from '../../images/msg637433406-409178.jpg';
import Setting from '../../images/settings.png'

type Props = {
  status: boolean,
  handleChangeStatusMenu: () => void
}

export const NavMenu: React.FC<Props> = ({ handleChangeStatusMenu}) => {
  const [activeLink, setActiveLink] = useState("");
  return (
    <div className='navigation'>
      <div className='navigation__user'>
        <img className='navigation__user user-image' src={User} alt="" />
        <button className='navigation__user button-settings'>
          <img src={Setting} alt="" />
          </button>
      </div>
      <div className="navigation__list">
        <Link
          onClick={() => {setActiveLink("/") ;handleChangeStatusMenu()}}
          className={activeLink === "/" ? "navigation__list__btn active" : "navigation__list__btn"}
          to="/"
        >
          Приход
        </Link>
        <Link
          onClick={() => {setActiveLink("/Products");handleChangeStatusMenu()}}
          className={activeLink === "/Products" ? "navigation__list__btn active" : "navigation__list__btn"}
          to="/NotFaund"
        >
          Групи
        </Link>
        <Link
          onClick={() =>{ setActiveLink("/products");handleChangeStatusMenu()}}
          className={activeLink === "/products" ? "navigation__list__btn active" : "navigation__list__btn"}
          to="/products"
        >
          Продукти
        </Link>
        <Link
          onClick={() =>{setActiveLink("/users");handleChangeStatusMenu()}}
          className={activeLink === "/users" ? "navigation__list__btn active" : "navigation__list__btn"}
          to="/NotFaund"
        >
          Користувачі
        </Link>
        <Link
          onClick={() => {setActiveLink("/settings");handleChangeStatusMenu()}}
          className={activeLink === "/settings" ? "navigation__list__btn active" : "navigation__list__btn"}
          to="/NotFaund"
        >
          Налаштування
        </Link>
      </div>
    </div>
  );
}