import React from 'react';
import css from './Header.module.css'
import { NavLink } from 'react-router-dom';

function Header(props) {

  function selectSorting() {
    props.selectSorting();
  } 
  function selectPathFind() {
    props.selectPathFind();
  } 

  return (
    <header className={css.wrap}>
      <h1>Визуализатор алгоритмов</h1>
      <nav className={css.nav_wrap}>
        <NavLink to="/algo-viso/sorting" className={css.nav_link} activeClassName={css.active} onClick={selectSorting} >Cортировка</NavLink>
        <NavLink to="/algo-viso/pathfinding" className={css.nav_link} activeClassName={css.active} onClick={selectPathFind} >Поиск пути</NavLink>
      </nav>
    </header>
  );
}

export default Header;