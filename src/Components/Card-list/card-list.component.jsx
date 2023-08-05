import { Component, Fragment } from "react";
import ApplyStyle from './card-list.style.module.css';
import CardContent from "./cards/card-content";

class CardList extends Component {

  render() {
    const monsters = this.props.monsters;
    return (
      <div className={ApplyStyle['card-list']}>{
        monsters.length ? monsters.map(monster => {
          const { name, email, id } = monster;
          return (
            <CardContent
              key={id}
              id={id}
              name={name}
              email={email}
            />
          )
        }) : <h1>No Monsters Found</h1>
      }</div>
    );
  }

}

export default CardList;