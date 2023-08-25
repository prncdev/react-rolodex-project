import React from 'react';
import ApplyStyle from './search-box.style.module.css';

function SearchBoxHookComponent(props) {
  return (
    <input
        className={`${ApplyStyle[props.className[1]]} ${props.className[0]}`}
        type='search'
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
    />
  )
}

export default SearchBoxHookComponent;