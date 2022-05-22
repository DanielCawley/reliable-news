import { Fragment } from "react";
// import { Link } from "react-router-dom";
import { Link } from "@material-ui/core";

import classes from "./Dicsord.module.css";

const Discord = () => {
  return (
    <Fragment>
      <h1>To join a very reliable discord server:</h1>
      {/* <a
        className={classes.discordStyles}
        href="https://discord.gg/tMUSRTDG6r"
      /> */}
      <Link href="https://discord.gg/tMUSRTDG6r" variant="body2">
        CLICK HERE
      </Link>
    </Fragment>
  );
};

export default Discord;
