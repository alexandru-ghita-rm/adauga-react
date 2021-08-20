import { Link } from "react-router-dom";
import Logo from "./Logo";
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
          <Logo />
      <nav>
        <ul>
          <li>
            <Link to='/'>Anunturile mele</Link>
          </li>
          <li>
            <Link to='/new-Anunt'>Adauga Anunt</Link>
          </li>
          <li>
            <Link to='/favorites'>Favorite (wip)</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
