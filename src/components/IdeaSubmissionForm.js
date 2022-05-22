import { useState, Fragment } from "react";
import { TextField } from "@material-ui/core";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";

import classes from "./IdeaSubmission.module.css";
import IdeaSubmission from "../pages/IdeaSubmission";
import flag from "../images/flag.png";

const { REACT_APP_DISCORD_WEB_HOOK } = process.env;

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: green[500],
      //   main: "#11cb5f",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

const IdeaSubmissionForm = () => {
  const [enteredIdea, setEnteredIdea] = useState("");
  const [datasent, setDatasent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (enteredIdea) {
      const data = { content: enteredIdea };
      fetch(REACT_APP_DISCORD_WEB_HOOK, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((returnValue) => {
        setEnteredIdea("");
        setDatasent(true);
      });
    }
  };

  const handleIdeaChange = (event) => {
    event.preventDefault();
    setEnteredIdea(event.target.value);
  };

  return (
    <div className={classes.portugalFlag}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="idea">Enter video idea </label>
        <TextField
          id="idea"
          type="text"
          value={enteredIdea}
          onChange={handleIdeaChange}
          // ref={nameInputRef}
        ></TextField>
        <br />
        <br />
        <ThemeProvider theme={theme}>
          <Button type="submit" color="primary" variant="contained">
            Send Idea Submission
          </Button>
        </ThemeProvider>
      </form>
      {datasent ? (
        <h2>
          Your idea has been submitted, it will now be judged on whether it is
          shit or not
        </h2>
      ) : (
        ""
      )}
      <img src={flag} />
    </div>
  );
};

export default IdeaSubmissionForm;
