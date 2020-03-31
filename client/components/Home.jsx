import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import LocationDropDown from "./LocationDropDown";
import LandingImage from "./LandingImage";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         What's on your local community stall?
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const useStyles = makeStyles(theme => ({
  // icon: {
  //   marginRight: theme.spacing(2)
  // },
  // heroContent: {
  //   backgroundColor: theme.palette.background.paper,
  //   padding: theme.spacing(8, 0, 6)
  // },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  const classes = useStyles();

  // const background = "./landingImage.jpg";
  

  return (
    <React.Fragment>
      {/* <Header /> */}
      {/* <LandingImage /> */}
      <CssBaseline />
      <main>
        <div 
        // className={classes.heroContent}
        >
          <Paper
            className="landing-image"
            // style={{ backgroundImage: `url(${background})` }}
          >
            <Container maxWidth="md">
              <Typography
                variant="h3"
                align="center"
                color="textPrimary"
                className="landing-header"
                gutterBottom
              >
                WHAT'S ON <strong>YOUR</strong> LOCAL STALL?
              </Typography>
            </Container>
            <div className={classes.heroButtons}>
              <Grid container spacing={1} justify="center">
                <Grid item>
                  <LocationDropDown />
                </Grid>
              </Grid>
            </div>
          </Paper>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}

          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
