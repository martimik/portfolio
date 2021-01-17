import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <p className={classes.footerText}>
        Build with React © Mikko Martikainen 2020
      </p>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
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
