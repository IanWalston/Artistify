import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  Fade,
  Typography,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  select: {
    marginLeft: "20px",
    minWidth: "75px",
  },
}));

export default function TransitionsModal({
  showSettings,
  setShowSettings,
  darkMode,
  setDarkMode,
  playbackRate,
  setPlaybackRate,
}) {
  const classes = useStyles();

  const handleClose = () => {
    setShowSettings(false);
  };

  function handleDarkmodeButtonClick() {
    setDarkMode(!darkMode);
  }

  function handleChangePlaybackRate(e) {
    setPlaybackRate(e.target.value);
  }

  // function handleChangeLanguage(e){
  //   console.log(e)
  //   setSelectedLanguage(e.target.value)
  // }

  return (
    <div>
      <Dialog className={classes.modal} open={showSettings} onClose={handleClose}>
        <Fade in={showSettings}>
          <div className={classes.paper}>
            <Typography gutterBottom variant="h4" align="center">
              Settings
            </Typography>

            <Grid>
              <Grid>
                {/* dark mode */}
                <FormControlLabel
                  control={
                    <Switch onChange={handleDarkmodeButtonClick} checked={darkMode} />
                  }
                  label="Dark Mode"
                  labelPlacement="start"
                />
              </Grid>

              <Grid>
                <FormControlLabel
                  label="Playback Speed"
                  labelPlacement="start"
                  control={
                    <Select
                      className={classes.select}
                      defaultValue={1}
                      value={playbackRate}
                      onChange={handleChangePlaybackRate}
                    >
                      <MenuItem value={0.25}>0.25</MenuItem>
                      <MenuItem value={0.5}>0.50</MenuItem>
                      <MenuItem value={0.75}>0.75</MenuItem>
                      <MenuItem value={1}>normal</MenuItem>
                      <MenuItem value={1.25}>1.25</MenuItem>
                      <MenuItem value={1.5}>1.5</MenuItem>
                      <MenuItem value={1.75}>1.75</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                    </Select>
                  }
                />
              </Grid>

              <Grid>
                {/* <FormControlLabel
                  label="Language"
                  labelPlacement="start"
                  control={
                    <Select
                      className={classes.select}
                      defaultValue="en"
                      value={selectedLanguage}
                      onChange={handleChangeLanguage}
                    >
                      <MenuItem value="en">english</MenuItem>
                      <MenuItem value="ro">romanian</MenuItem>
                    </Select>
                  }
                /> */}
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Dialog>
    </div>
  );
}
