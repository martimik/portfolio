import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Links from "./IconLink";
import Technologies from "./TechnologyList";

export default function Project(project) {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <h4 className={classes.cardHeader}>
        {project.title}

        {project.links.map((link) => {
          return <Links link={link} />;
        })}
      </h4>
      <p className={classes.cardText}>{project.description}</p>
      <Technologies technologies={project.technologies} fontSize="12px" />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    "@media(min-width: 1152px)": {
      width: "500px",
      fontSize: "16px",
    },
    "@media(max-width: 1152px)": {
      maxWidth: "350px",
      fontSize: "16px",
    },
    flexDirection: "column",
    border: "#f5f5f5 1px solid",
    padding: "16px",
    transition: "all 400ms linear",
  },
  cardHeader: {
    color: "#1DB954",
    fontSize: "24px",
    fontWeight: "400",
    textAlign: "left",
    margin: "0",
  },
  cardText: {
    textAlign: "left",
    fontSize: "14px",
  },
}));
