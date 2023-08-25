import React from 'react';
import ApplyStyle from './card-content.style.module.css';

function CardContentHookComponent({ monster }) {
  const {id, name, email} = monster;
  return (
    <div className={ApplyStyle['card-content']}>
      <img
        src={`https://robohash.org/${id}/?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />

      <h2>{name}</h2>
      <strong>{email}</strong>
    </div>
  );
}

export default CardContentHookComponent;