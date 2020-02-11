import React from "react";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  border: ${props => `1px solid ${props.theme.colors.onyx}`};
  background-color: ${props => props.theme.colors.lightBlue};
  font-family: ${props => props.theme.fonts[0]};
`;

class Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                

            </React.Fragment>
        )
    }
}

export default Header