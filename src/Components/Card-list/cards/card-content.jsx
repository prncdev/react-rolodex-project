import { Component } from "react";
import ApplyStyle from './card-content.style.module.css';

class CardContent extends Component {

  render() {
    const { name, email, id } = this.props;
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
}

export default CardContent;