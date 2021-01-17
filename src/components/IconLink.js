import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

export default function Links(props) {
  const classes = useStyles();
  const { title, address, iconSize, icon } = props.link;

  return (
    <a href={address}>
      <Tooltip title={title}>
        <svg
          id="logo"
          className={classes.link}
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="#f5f5f5"
        >
          <path d={icon} />
        </svg>
      </Tooltip>
    </a>
  );
}

const useStyles = makeStyles((theme) => ({
  Tooltip: {
    fontSize: "16px",
  },
  link: {
    float: "right",
    margin: "5px",
    cursor: "pointer",
  },
}));
