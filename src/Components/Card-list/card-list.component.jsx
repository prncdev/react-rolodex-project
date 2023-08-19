import { Component } from "react";
import ApplyStyle from './card-list.style.module.css';
import CardContent from "./cards/card-content";

class CardList extends Component {

  render() {
    const monsters = this.props.monsters;
    return (
      <div className={ApplyStyle['card-list']}> {
        monsters.length ? monsters.map(monster => {
          const id = monster.id;
          return (
            <CardContent
              key={id}
              monster={monster}
            />
          )
        }) : <h1>No Monsters Found</h1>
      }</div>
    );
  }

}

export default CardList;