import React from "react";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import MainPageIlustration from "../../components/shared/Ilustrations/MainPageIlustration";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { makeStyles } from "@material-ui/core/styles";

const mockFAQ = [
  {
    status:'online',
    question:'How do you like coffee?',
    answer:'Black, with no sugar!'
  },
  {
    status:'online',
    question:'How do you like coffee?',
    answer:'Black, with no sugar!'
  },
  {
    status:'online',
    question:'How do you like coffee?',
    answer:'Black, with no sugar!'
  }
]

const detailsObj = [
  {
    title: "Automatic summary editor",
    description:
      "Create a powerful resume profile in one click. Writer’s block is no longer an obstacle. Try for free!",
  },
  {
    title: "Easy online resume builder",
    description:
      "Create an awesome resume, cover letter or online profile without leaving your web browser.",
  },
  {
    title: "Approved templates",
    description:
      "Professionally-designed resume templates approved by recruiters. Just edit and download in 5 minutes.",
  },
  {
    title: "Download resume options",
    description:
      "Save your perfect resume in any common format, including shared link or PDF in a single click.",
  },
  {
    title: "Cover letters",
    description:
      "Our cover letter builder works with the same ease and use of elegant designs as the resume creator.",
  },
  {
    title: "Business Card",
    description:
      "Our business card builder is easy to user and fully customizable.",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "100%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("");
  const [currentPhoto, setCurrentPhoto] = React.useState("panel1");

  const handleChange = (panel: string) => (event: any, isExpanded: boolean) => {
    setCurrentPhoto(panel);
    setExpanded(isExpanded ? panel : "");
  };

  return (
    <>
      <div className="cv__mainPage">
        <Container maxWidth="sm" className="c__main">
          <h1 className="h1">Build Your CV</h1>
          <p>
            The PRO workflow for CV development.<br></br>
            Write, Choose, and Manage modern CV templates.
          </p>
          <Button variant="contained" color="primary" className="ml-1">
            Build Resume
          </Button>
          <Button variant="contained" color="secondary" className="ml-1">
            Create Business Card
          </Button>
          <Button variant="outlined" color="primary" className="ml-1">
            Write CV Letter
          </Button>
        </Container>
        <div className="cv__illustration">
          <MainPageIlustration />
        </div>
      </div>
      <div className="cv__section cv__firstSection">
        <Container maxWidth="sm" className="c__main">
          <h1>
            Effortlessly build a job-worthy resume that gets you hired faster
          </h1>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper className="cv__image-holder">
                <img
                  src={`/assets/images/sq-${currentPhoto}.jpg`}
                  alt="React Logo"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  className="cv_panel-main"
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading}>
                      Easily Edit Online
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Creating the perfectly formatted, custom tailored resume
                      has never been easier.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  className="cv_panel-main"
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.heading}>
                      Add multiple custom sections
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Successfully communicate your experience and skills with
                      all kinds of sections.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  className="cv_panel-main"
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography className={classes.heading}>
                      Easy review of your progress
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Our built-in pdf viewer will protect you from mistakes and
                      typos.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                  className="cv_panel-main"
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography className={classes.heading}>
                      Export to PDF or share it
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      You’re in control of your resume, our exports work
                      perfectly with PDf or share it like a link.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="cv__section cv_secondSection mt-2 mb-2" id="about">
        <Container maxWidth="sm" className="c__main">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <h2>Simple, Easy-To-Use Templates</h2>
              <p>
                Win over employers and recruiters by using one of our elegant,
                professionally-designed resume templates. Download to PDF or
                share it.
              </p>
              <Button
                variant="contained"
                color="default"
                className="ml-1"
              >
                See templates
              </Button>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper className="cv__image-holder">
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="cv__section cv__thirdSection">
        <Container maxWidth="sm" className="c__main">
          <h1>Features designed to help you win your dream job</h1>
          <Grid container spacing={3}>
            {detailsObj.map((e, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={12}
                  md={4}
                  className={
                    index > 0 && index % 2 === 1
                      ? "cv__feature customFeature"
                      : "cv__feature "
                  }
                >
                  <div className="">
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={2}>
                        <WhatshotIcon className="mt-2" />
                      </Grid>
                      <Grid item xs={12} md={8}>
                        <h5 className="mt-1">{e.title}</h5>
                        <span>{e.description}</span>
                      </Grid>
                      <Grid item xs={12} md={2}></Grid>
                    </Grid>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
      <div className="cv__section cv__forthSection">
        <Container maxWidth="sm" className="c__main">
          <h1>Frequently Asked Questions</h1>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <div>
                {mockFAQ
                  .filter((element) => element.status === "online")
                  .map((e, index) => {
                    return (
                      <Accordion
                        key={index}
                        expanded={expanded === `panel1${index}`}
                        onChange={handleChange(`panel1${index}`)}
                        className="cv_panel-main"
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls={`panel1${index}bh-content`}
                          id={`panel1${index}bh-header`}
                        >
                          <Typography className={classes.heading}>
                            {e.question}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>{e.answer}</Typography>
                          <br />
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
