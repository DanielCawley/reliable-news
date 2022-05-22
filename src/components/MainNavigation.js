import { NavLink, Router } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.overallHeader}>
      <div className={classes.logo}>Reliable News from a Portuguese</div>
      <div className={classes.header}>
        <nav>
          <ul>
            <li>
              <NavLink to="./videos">Videos</NavLink>
            </li>
            <li>
              <NavLink to="./idea-submission">Idea Submission</NavLink>
            </li>
            <li>
              <NavLink to="./discord-channels">Discord Server</NavLink>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
