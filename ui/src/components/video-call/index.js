import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import VideoPlayer from "../video-call/video-player";
import Sidebar from "../sidebar";
import Notifications from "../notification";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      
      <VideoPlayer />
      <Sidebar />
      <Notifications />
    </div>
  );
};

export default App;
