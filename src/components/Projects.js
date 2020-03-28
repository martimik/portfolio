import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <h1 className={classes.header}>Projects</h1>
        <div className={classes.column}>
          <div className={classes.card}>
            <h4 className={classes.cardTitle}>
              TuHlaRi
              <a href="https://github.com/martimik?tab=projects">
                <Tooltip
                  title="View source on github"
                  style={{ fontSize: "16px" }}
                >
                  <svg
                    id="logo"
                    className={classes.link}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#f5f5f5"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Tooltip>
              </a>
              <a href="https://front-end-tuhlari.rahtiapp.fi/#/">
                <Tooltip title="Demo" style={{ fontSize: "16px" }}>
                  <svg
                    id="logo"
                    className={classes.link}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#f5f5f5"
                  >
                    <path d="M0 0v18h24v-18h-24zm22 16h-20v-14h20v14zm-3 6v2h-14v-2h4v-2h6v2h4z" />
                  </svg>
                </Tooltip>
              </a>
            </h4>
            <p className={classes.cardText}>
              Full-Stack project to create a service for product registry
              management. We utilized CSC:s services to run this application in
              the cloud.
            </p>
            <div className={classes.chipContainer}>
              <Chip label="React" className={classes.chip} />
              <Chip label="Javascript" className={classes.chip} />
              <Chip label="NodeJS" className={classes.chip} />
              <Chip label="MongoDB" className={classes.chip} />
              <Chip label="GitLab" className={classes.chip} />
              <Chip label="Openshift" className={classes.chip} />
            </div>
          </div>
          <div className={classes.card}>
            <h4 className={classes.cardTitle}>
              Portfolio
              <a href="https://github.com/martimik/portfolio">
                <Tooltip
                  title="View source on github"
                  style={{ fontSize: "16px" }}
                >
                  <svg
                    id="logo"
                    className={classes.link}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#f5f5f5"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Tooltip>
              </a>
            </h4>
            <p className={classes.cardText}>
              This web-app! Personal portfolio created with react and hosted on
              firebase.
            </p>
            <div className={classes.chipContainer}>
              <Chip label="React" className={classes.chip} />
              <Chip label="Javascript" className={classes.chip} />
              <Chip label="CSS3" className={classes.chip} />
              <Chip label="HTML5" className={classes.chip} />
              <Chip label="Firebase" className={classes.chip} />
            </div>
          </div>
          <div className={classes.card}>
            <h4 className={classes.cardTitle}>
              Sunny Adventure
              <a href="https://github.com/martimik/Sunny-adventure">
                <Tooltip
                  title="View source on github"
                  style={{ fontSize: "16px" }}
                >
                  <svg
                    id="logo"
                    className={classes.link}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#f5f5f5"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Tooltip>
              </a>
              <a href="https://student.labranet.jamk.fi/~K8936/Peliohjelmointi/SunnyAdventure/">
                <Tooltip title="Demo" style={{ fontSize: "16px" }}>
                  <svg
                    id="logo"
                    className={classes.link}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#f5f5f5"
                  >
                    <path d="M0 0v18h24v-18h-24zm22 16h-20v-14h20v14zm-3 6v2h-14v-2h4v-2h6v2h4z" />
                  </svg>
                </Tooltip>
              </a>
            </h4>
            <p className={classes.cardText}>
              2D platformer game made with Unity3D.
            </p>
            <div className={classes.chipContainer}>
              <Chip label="Unity3D" className={classes.chip} />
              <Chip label="C#" className={classes.chip} />
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.card}>
            <h4 className={classes.cardTitle}>
              Wear-right
              <a href="https://github.com/martimik/Wear-right-core">
                <Tooltip title="View on github" style={{ fontSize: "16px" }}>
                  <svg
                    id="logo"
                    className={classes.link}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#f5f5f5"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Tooltip>
              </a>
            </h4>
            <p className={classes.cardText}>
              Full-stack project to create a web application that offers
              instructions on how to dress according to the current weather,
              fetched from a forecast api. Our team went through a complete
              lifecycle of a software project while i was working as a project
              manager.
            </p>
            <div className={classes.chipContainer}>
              <Chip label="VueJs" className={classes.chip} />
              <Chip label="Javascript" className={classes.chip} />
              <Chip label="NodeJS" className={classes.chip} />
              <Chip label="mySql" className={classes.chip} />
              <Chip label="GitLab" className={classes.chip} />
            </div>
          </div>
          <div className={classes.card}>
            <h4 className={classes.cardTitle}>
              Mobile-research
              <a href="https://github.com/martimik/mobile-research">
                <Tooltip
                  title="View source on github"
                  style={{ fontSize: "16px" }}
                >
                  <svg
                    id="logo"
                    className={classes.link}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#f5f5f5"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Tooltip>
              </a>
              <a href="https://www.youtube.com/watch?v=9Nmv-zwEBCY&feature=youtu.be">
                <Tooltip title="Youtube" style={{ fontSize: "16px" }}>
                  <svg
                    id="logo"
                    className={classes.link}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#f5f5f5"
                  >
                    <path d="M9 16.985v-10.021l9 5.157-9 4.864zm4-14.98c5.046.504 9 4.782 9 9.97 0 1.467-.324 2.856-.892 4.113l1.738 1.006c.732-1.555 1.154-3.285 1.154-5.119 0-6.303-4.842-11.464-11-11.975v2.005zm-10.109 14.082c-.568-1.257-.891-2.646-.891-4.112 0-5.188 3.954-9.466 9-9.97v-2.005c-6.158.511-11 5.672-11 11.975 0 1.833.421 3.563 1.153 5.118l1.738-1.006zm17.213 1.734c-1.817 2.523-4.769 4.175-8.104 4.175s-6.288-1.651-8.105-4.176l-1.746 1.011c2.167 3.122 5.768 5.169 9.851 5.169 4.082 0 7.683-2.047 9.851-5.168l-1.747-1.011z" />
                  </svg>
                </Tooltip>
              </a>
            </h4>
            <p className={classes.cardText}>
              Prototype of music player for android created with react-native.
            </p>
            <div className={classes.chipContainer}>
              <Chip label="React-native" className={classes.chip} />
              <Chip label="Android" className={classes.chip} />
            </div>
          </div>
          <div className={classes.card}>
            <h4 className={classes.cardTitle}>
              Dynamo-hotline
              <a href="https://github.com/martimik/dynamon-kuumalinja">
                <Tooltip
                  title="View source on github"
                  style={{ fontSize: "16px" }}
                >
                  <svg
                    id="logo"
                    className={classes.link}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#f5f5f5"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Tooltip>
              </a>
            </h4>
            <p className={classes.cardText}>Desktop irc WPF application.</p>
            <div className={classes.chipContainer}>
              <Chip label="C#" className={classes.chip} />
              <Chip label="WPF" className={classes.chip} />
              <Chip label="mySql" className={classes.chip} />
            </div>
          </div>
          <div className={classes.card}>
            <h4 className={classes.cardTitle}>
              More to come..
              <a href="https://github.com/martimik">
                <Tooltip
                  title="View source on github"
                  style={{ fontSize: "16px" }}
                >
                  <svg
                    id="logo"
                    className={classes.link}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#f5f5f5"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Tooltip>
              </a>
            </h4>
            <p className={classes.cardText}>Be sure to visit my github!</p>
          </div>
        </div>
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
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "1152px",
    margin: "2vh 0",
    padding: "0 16px",
    fontSize: "calc(10px + 1vmin)",
    "@media(max-width: 1152px)": {
      margin: "32px 0"
    }
  },
  header: {
    width: "100%",
    fontWeight: "400",
    margin: "2vh 0"
  },
  link: {
    float: "right",
    margin: "5px",
    cursor: "pointer"
  },
  column: {
    display: "flex",
    flexDirection: "column",
    "@media(min-width: 1152px)": {
      width: "550px",
      fontSize: "16px"
    },
    "@media(max-width: 1152px)": {
      maxWidth: "700px",
      fontSize: "16px"
    },
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  card: {
    display: "flex",
    flexDirection: "column",
    border: "#f5f5f5 1px solid",

    padding: "16px",
    transition: "all 400ms linear"
  },
  cardTitle: {
    color: "#1DB954",
    fontSize: "24px",
    fontWeight: "400",
    textAlign: "left",
    margin: "0"
  },
  cardText: {
    textAlign: "left",
    fontSize: "14px"
  },
  chipContainer: {
    "& > *": {
      margin: theme.spacing(0.7)
    }
  },
  chip: {
    backgroundColor: "#1DB954",
    fontSize: "12px",
    "@media(max-width: 768px)": {
      fontSize: "14px"
    }
  },
  wipChip: {
    color: "#ffff",
    marginRight: "5px",
    float: "right",
    backgroundColor: "#DC143C",
    fontSize: "12px",
    "@media(max-width: 768px)": {
      fontSize: "14px"
    }
  }
}));
