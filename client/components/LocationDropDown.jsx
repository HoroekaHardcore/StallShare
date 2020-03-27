import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// TO DO NEXT - GET SELECTED LOCATION TO STAY ON PAGE

export default function LocationDropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null); // hook to handle state

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl();

  };

  const stallLocations = [
    "Devonport",
    "Glen Eden",
    "Morningside",
    "Newmarket",
    "Takapuna",
    "Whenuapai"
  ];

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Select Location to View
        
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {stallLocations.map(location => (
          <MenuItem key={location}
          value={location}onClick={handleClose}>{location}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}
