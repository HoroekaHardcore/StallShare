import React from "react";
import styled from "styled-components";
import Footer from "@material-ui/core/Footer";


class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
        
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
