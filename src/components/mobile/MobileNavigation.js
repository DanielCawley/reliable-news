import { NavLink } from "react-router-dom";

import classes from "./MobileNavigation.module.css";

const MobileNavigation = () => {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>Reliable News from a Portuguese</div>
      </header>
      <header className={classes.linksHeader}>
        <div className={classes.linksHeader}>
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
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default MobileNavigation;
