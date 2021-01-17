import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

export default function Technologies(props) {
  const classes = useStyles();
  const { technologies, fontSize } = props;

  if (technologies === undefined) return <div></div>;

  return (
    <div className={classes.chipContainer}>
      {technologies.map((technology) => {
        return (
          <Chip
            label={technology}
            className={classes.chip}
            style={{ fontSize: fontSize }}
          />
        );
      })}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  chipContainer: {
    "& > *": {
      margin: theme.spacing(0.7),
    },
  },
  chip: {
    backgroundColor: "#1DB954",
    "@media(max-width: 768px)": {
      fontSize: "14px",
    },
  },
}));
