import React from "react";
import { Menu, IconButton, MenuItem, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import MoreIcon from "@material-ui/icons/MoreVert";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  sectionMobile: {
    display: "flex",
  },
});

function MobileMenu({ queueLength, setShowAboutUs, setShowSettings, setShowImport }) {
  const classes = useStyles();

  let history = useHistory();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  function handleQueueButtonClick() {
    history.push("/queue");
  }

  function handleImportClick() {
    setShowImport(true);
    history.push("/");
  }

  function handleBillboardClick() {
    history.push("/billboard");
  }

  function handlePlaylistClick() {
    history.push("/playlists");
  }

  function handleSettingsClick() {
    setShowSettings(true);
    history.push("/");
  }

  function handleAboutUsClick() {
    setShowAboutUs(true);
    history.push("/");
  }

  const mobileMenuId = "primary-search-account-menu-mobile";
  return (
    <div className={classes.sectionMobile}>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        {/* QUEUE */}

        <MenuItem onClick={handleQueueButtonClick}>
          queue
          <IconButton target="_blank" color="inherit" size="small">
            <Badge badgeContent={queueLength} color="secondary">
              <QueueMusicIcon />
            </Badge>
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleImportClick}>import youtube playlist</MenuItem>
        <MenuItem onClick={handlePlaylistClick}>playlists</MenuItem>
        <MenuItem onClick={handleBillboardClick}>billboard top 100</MenuItem>
        <MenuItem onClick={handleSettingsClick}>settings</MenuItem>
        <MenuItem onClick={handleAboutUsClick}>about us</MenuItem>
      </Menu>

      <IconButton
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <Badge badgeContent={queueLength} color="secondary">
          <MoreIcon style={{ fontSize: 36 }} />
        </Badge>
      </IconButton>
    </div>
  );
}

export default MobileMenu;
