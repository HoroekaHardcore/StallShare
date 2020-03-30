import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// TO DO NEXT - GET SELECTED LOCATION TO STAY ON PAGE

export default function LocationDropDown() {
  const [anchorEl, setAnchorEl] = useState(null); // hook to dropdown menu showing locations
  const [location, setLocation] = useState("Where would you like to view?"); // hook to handle location on show below dropdown

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
    <div className='centre-page'>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        
      >
        Click here to select stall location
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {stallLocations.map(location => (
          <MenuItem
            key={location}
            onClick={() => setLocation(location)}
            location={location}
            value={location}
            onMouseUp={() => setAnchorEl()}
          >
            {location}
          </MenuItem>
        ))}
      </Menu>
      <h4 className='location-header'>{location}</h4>
    </div>
  );
}
