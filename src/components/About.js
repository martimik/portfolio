import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import profileImage from "../images/prof.jpg";

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <h1 className={classes.header}>About me</h1>
        <img src={profileImage} alt="Profile" className={classes.image} />
        <p className={classes.status}>
          Student at <a href="https://www.jamk.fi">JAMK</a> University of
          Applied Sciences.
        </p>
        <p className={classes.status}>
          The current treasurer and a board member of{" "}
          <a href="https://www.jio.fi">Jyväskylän insinööriopiskelijat ry</a>
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
  image: {
    borderRadius: "5px",
    margin: "1vh 0",
    height: "250px"
  },
  status: {
    margin: "2vh 0",
    "@media(min-width: 768px)": {
      fontSize: "18px"
    }
  },
  paragraph: {
    textAlign: "left",
    margin: "2vh 0",
    "@media(min-width: 768px)": {
      fontSize: "16px"
    }
  },
  button: {
    width: "180px",
    height: "60px",
    margin: "1vh",
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
  }
}));
