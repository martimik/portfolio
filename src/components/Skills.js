import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "./Footer";
import Technologies from "./TechnologyList";

const technologies = [
  "Java",
  "Kotlin",
  "Javascript",
  "Python",
  "C#",
  "Spring",
  "Android",
  "React",
  "React-Native",
  "NodeJs",
  "SQL",
  "NoSQL",
  "Unity3D",
  "Git",
];

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
          Working with REST APIs as well as databases, like PostgreSQL and
          MongoDB has always been important. Most projects i have been involved
          in are using this kind of architecture.
        </p>
        <Technologies technologies={technologies} fontSize="16px" />
      </div>
      <Footer />
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
    maxWidth: "768px",
    padding: "0 16px",
    fontSize: "calc(10px + 1vmin)",
  },
  header: {
    fontWeight: "400",
    margin: "2vh 0",
  },
  paragraph: {
    margin: "4vh 0",
    "@media(min-width: 768px)": {
      fontSize: "18px",
    },
  },
  chipContainer: {
    "& > *": {
      margin: theme.spacing(0.7),
    },
  },
  chip: {
    backgroundColor: "#1DB954",
    fontSize: "16px",
    "@media(max-width: 768px)": {
      fontSize: "14px",
    },
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
      color: "#040404",
    },
  },
  footer: {
    position: "absolute",
    bottom: "0px",
    width: "100%",
    textAlign: "center",
    fontSize: "calc(8px + 1vmin)",
  },
  footerText: {
    color: "#6c757d",
  },
}));
