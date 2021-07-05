import { MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
// import AddCommentOutlinedIcon from "@material-ui/icons/AddCommentOutlined";
import AllInboxOutlinedIcon from "@material-ui/icons/AllInboxOutlined";
// import ContactMailIcon from "@material-ui/icons/ContactMail";
// import HomeIcon from "@material-ui/icons/Home";
// import HomeWorkIcon from "@material-ui/icons/HomeWork";
// import InfoIcon from "@material-ui/icons/Info";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
// import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
// import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SpeakerNotesOutlinedIcon from "@material-ui/icons/SpeakerNotesOutlined";
// import PropTypes from "prop-types";
import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import { ReactComponent as ReactLogo } from "../../../svgs/icons-computer/028-code.svg";
import MatCustomMenu from "../../MaterialCustomComponents/MaterialCustomMenu/MaterialCustomMenu";

const routesForNavBar = [
  {
    label: "Home",
    icon: <HomeIcon />,
    linkTo: "/",
  },
  {
    label: "Home",
    icon: <HomeIcon />,
    linkTo: "/",
  },
  {
    label: "Home",
    icon: <HomeIcon />,
    linkTo: "/",
  },
  {
    label: "Home",
    icon: <HomeIcon />,
    linkTo: "/",
  },
];

const useStyles = makeStyles((theme) => ({
  topbar: {
    "& .topbar-hold": {
      backgroundColor: theme.palette.primary.main,
      opacity: 0.9,
      height: "80px",
      color: theme.palette.primary.main,
      "&.fixed": {
        boxShadow: theme.shadows[8],
        height: "64px",
      },
    },
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    minWidth: 185,
  },
}));

const NavBar = (params: any) => {
  const classes = useStyles();

  const mobileNav = () => {
    return (
      <MatCustomMenu
        menuButton={
          <Button className="mr-5">
            <MenuIcon />
          </Button>
        }
      >
        {routesForNavBar.map((route) => (
          <MenuItem>
            <HomeIcon />
            <span className="pl-4"> Home </span>
          </MenuItem>
        ))}
      </MatCustomMenu>
    );
  };

  const renderIsSuprem = () => (
    <>
      <MenuItem className={classes.menuItem}>
        <AllInboxOutlinedIcon />
        <span className="pl-4"> Edit Feedbacks</span>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <SpeakerNotesOutlinedIcon />
        <span className="pl-4"> Edit Questions</span>
      </MenuItem>
    </>
  );

  const renderIsAuth = () => (
    <>
      <MenuItem className={classes.menuItem}>
        <AllInboxOutlinedIcon />
        <span className="pl-4"> Your Feedbacks</span>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <SpeakerNotesOutlinedIcon />
        <span className="pl-4"> Your Questions</span>
      </MenuItem>
      <Divider />
      {renderIsSuprem()}
      <Divider />
    </>
  );

  return (
    <div className="content-wrapt position-relative z-index-999 customMainBar">
      <div className={`topbar ${classes.topbar}`}>
        <div className="topbar-hold fixed">
          <div className="flex justify-between items-center h-full">
            <div className="flex">
              <Link to="/" className="no-underline">
                <Typography
                  variant="h5"
                  className="ml-10 mainTitle"
                  color="textPrimary"
                >
                  <ReactLogo
                    className={`codeLogo ${
                      window.location.href.includes("/sign") ? "white" : ""
                    }`}
                  />
                  <span>CV Builder</span>
                </Typography>
              </Link>
            </div>
            <div className="flex items-center">
              {window.innerWidth < 1000 ? (
                mobileNav()
              ) : (
                <>
                  <MatCustomMenu
                    menuButton={
                      <Button className="mr-5">
                        <LibraryBooksIcon />
                        <Typography
                          variant="body1"
                          className="ml-2 userNameField"
                          color="textPrimary"
                        >
                          Tools
                        </Typography>
                      </Button>
                    }
                  >
                    <MenuItem className={classes.menuItem}>
                      <AllInboxOutlinedIcon />
                      <span className="pl-4"> Build Resume/CV</span>
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                      <AllInboxOutlinedIcon />
                      <span className="pl-4"> Business Card Maker</span>
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                      <AllInboxOutlinedIcon />
                      <span className="pl-4"> Build Cover Letter</span>
                    </MenuItem>
                  </MatCustomMenu>
                  <MatCustomMenu
                    menuButton={
                      <Button className="mr-5">
                        <LibraryBooksIcon />
                        <Typography
                          variant="body1"
                          className="ml-2 userNameField"
                          color="textPrimary"
                        >
                          Support
                        </Typography>
                      </Button>
                    }
                  >
                    {renderIsAuth()}
                    <MenuItem className={classes.menuItem}>
                      <SpeakerNotesOutlinedIcon />
                      <span className="pl-4"> FAQ</span>
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                      <AllInboxOutlinedIcon />
                      <span className="pl-4"> About App</span>
                    </MenuItem>
                  </MatCustomMenu>
                  <MatCustomMenu
                    menuButton={
                      <Button className="mr-5">
                        <LibraryBooksIcon />
                        <Typography
                          variant="body1"
                          className="ml-2 userNameField"
                          color="textPrimary"
                        >
                          Articles
                        </Typography>
                      </Button>
                    }
                  >
                    <MenuItem className={classes.menuItem}>
                      <SpeakerNotesOutlinedIcon />
                      <span className="pl-4"> View Articles</span>
                    </MenuItem>
                  </MatCustomMenu>
                  <div style={{ opacity: "0.99" }}>
                    <Tooltip title="Account">
                      <Button className=" mr-5">
                        <PersonIcon />
                      </Button>
                    </Tooltip>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
