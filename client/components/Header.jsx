import React from "react";

import KitchenIcon from "@material-ui/icons/Kitchen";
import Typography from "@material-ui/core/Typography";





class Header extends React.Component {
    
  render() {
    
    return (
      <React.Fragment>
        <div>
            <KitchenIcon className="icon" />
            <Typography variant="h6" color="inherit" noWrap>
              Stall Share
            </Typography>
            </div>
      </React.Fragment>
    );
  }
}

export default Header;
