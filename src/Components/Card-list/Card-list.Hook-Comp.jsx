import ApplyStyle from './card-list.style.module.css';
import CardContentHookComponent from './cards/Card-Content.Hook-Comp';

function CardListHookComponent({monsters}) {
  return (
    <div className={ApplyStyle['card-list']}> {
      monsters ? monsters.map(monster => {
        const id = monster.id;
        return (
          <CardContentHookComponent
            key={id}
            monster={monster}
          />
        )
      }) : <h1>No Monsters Found</h1>
    }</div>
  );
}

export default CardListHookComponent;