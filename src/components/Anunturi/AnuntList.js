import AnuntItem from './AnuntItem';
import classes from './AnuntList.module.css';

function AnuntList(props) {
  return (
    <ul className={classes.list}>
      {props.Anunturi.map((Anunt) => (
        <AnuntItem
          key={Anunt.id}
          id={Anunt.id}
          image={Anunt.image}
          title={Anunt.title}
          address={Anunt.address}
          description={Anunt.description}
        />
      ))}
    </ul>
  );
}

export default AnuntList;
