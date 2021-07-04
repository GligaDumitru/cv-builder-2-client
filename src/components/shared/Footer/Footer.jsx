import { IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="cv__section cv__fiveSection" id="contact">
        <Grid container spacing={3} className="text-center">
          <Grid item xs={6} md={4} className="text-center">
            <h6>Links</h6>
            <div className="flex justify-center">
              <Link className="cv_customLink normal" to="/account">
                Build Resume
              </Link>
              <Link to="/templates" className="cv_customLink normal">
                See Templates
              </Link>
              <Link to="/account" className="cv_customLink normal">
                Ask Question
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <h6>Stay connected</h6>
            <IconButton className="text-white" aria-label="delete">
              <FacebookIcon />
            </IconButton>
            <IconButton className="text-white" aria-label="delete">
              <InstagramIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6} md={4} className="text-center">
            <h6>Support</h6>
            <div className="flex justify-center">
              <Link to="/account" className="cv_customLink normal">
                Resume Help
              </Link>
              <Link to="/account" className="cv_customLink normal">
                Cover Letter Help
              </Link>
              <Link to="/account" className="cv_customLink normal">
                About us
              </Link>
              <Link to="/account" className="cv_customLink normal">
                Feedback
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
