import React from "react";
import styled from "styled-components";



class Header extends React.Component {
    
  render() {
    return (
      <React.Fragment>
        <AppBar position="relative">
          <Toolbar>
            <KitchenIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Community Stall Share
            </Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default Header;
