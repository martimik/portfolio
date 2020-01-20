import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

export default function About(){

    const classes = useStyles();

    return(
        <div className={classes.footer}>
            <p className={classes.footerText}>Build with React © Mikko Martikainen 2020</p>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    footer: {
        bottom: "0px",
        width: "100%",
        textAlign: "center",
        fontSize: "calc(10px + 1vmin)"
    },
    footerText: {
        color: "#6c757d",
        margin: "1em"
    }
}));