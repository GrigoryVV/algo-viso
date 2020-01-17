import React from 'react';
import css from './Header.module.css'

function Header() {
    return (
      <header className={css.wrap}>
        <h1>Визуализатор алгоритмов поиска пути</h1>
      </header>
    );
}

export default Header;