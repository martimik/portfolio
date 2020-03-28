import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <h1 className={classes.header}>Skills & Experience</h1>
        <p className={classes.paragraph}>
          Going through several software projects with a complete lifecycle has
          taught me a lot about software developement. I have been working on
          front-end technologies and backend implementations all together. I
          have also gained some android mobile developement experience.
        </p>
        <p className={classes.paragraph}>
          Working with REST APIs as well as databases, like mySql and MongoDB
          has always been important. Most projects i have been involved in are
          using this kind of architecture.
        </p>
        <div className={classes.chipContainer}>
          <Chip label="Javascript" className={classes.chip} />
          <Chip label="React" className={classes.chip} />
          <Chip label="React-Native" className={classes.chip} />
          <Chip label="Vue" className={classes.chip} />
          <Chip label="NodeJS" className={classes.chip} />
          <Chip label="C#" className={classes.chip} />
          <Chip label="C++" className={classes.chip} />
          <Chip label="WPF" className={classes.chip} />
          <Chip label="Python" className={classes.chip} />
          <Chip label="Kotlin" className={classes.chip} />
          <Chip label="HTML5" className={classes.chip} />
          <Chip label="CSS3" className={classes.chip} />
          <Chip label="PHP" className={classes.chip} />
          <Chip label="MySQL" className={classes.chip} />
          <Chip label="MongoDB" className={classes.chip} />
          <Chip label="Unity3D" className={classes.chip} />
          <Chip label="Git" className={classes.chip} />
          <Chip label="GitLab" className={classes.chip} />
        </div>
      </div>

      <div className={classes.footer}>
        <p className={classes.footerText}>
          Build with React © Mikko Martikainen 2020
        </p>
      </div>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    maxHeight: "100%"
  },
  content: {
    maxWidth: "768px",
    padding: "0 16px",
    fontSize: "calc(10px + 1vmin)"
  },
  header: {
    fontWeight: "400",
    margin: "2vh 0"
  },
  paragraph: {
    margin: "4vh 0",
    "@media(min-width: 768px)": {
      fontSize: "18px"
    }
  },
  chipContainer: {
    "& > *": {
      margin: theme.spacing(0.7)
    }
  },
  chip: {
    backgroundColor: "#1DB954",
    fontSize: "16px",
    "@media(max-width: 768px)": {
      fontSize: "14px"
    }
  },
  button: {
    width: "180px",
    height: "60px",
    margin: "10vh 0",
    backgroundColor: "inherit",
    color: "inherit",
    fontSize: "20px",
    transition: "all 400ms linear",
    borderRadius: "10px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f5f5f5",
      color: "#040404"
    }
  },
  footer: {
    position: "absolute",
    bottom: "0px",
    width: "100%",
    textAlign: "center",
    fontSize: "calc(8px + 1vmin)"
  },
  footerText: {
    color: "#6c757d"
  }
}));
