import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Project from "./Project";
import projectData from "../data/projectData";

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <h1 className={classes.header}>Projects</h1>
        <div className={classes.column}>
          {projectData.map((project) => {
            return <Project {...project} />;
          })}
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    maxHeight: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "1152px",
    margin: "2vh 0",
    padding: "0 16px",
    fontSize: "calc(10px + 1vmin)",
    "@media(max-width: 1152px)": {
      margin: "32px 0",
    },
  },
  header: {
    width: "100%",
    fontWeight: "400",
    margin: "2vh 0",
  },
  column: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    "@media(min-width: 1152px)": {
      width: "1100px",
      maxHeight: "700px",
      fontSize: "16px",
    },
    "@media(max-width: 1152px)": {
      maxWidth: "700px",
      fontSize: "16px",
    },
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
