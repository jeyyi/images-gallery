import React from 'react';
import {Navbar, Container} from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg'

const navbarStyle = {
  backgroundColor: '#eeee'
}

const Header = (props) => {
    return(
        <Navbar style ={navbarStyle}  variant="light">
          <Container>
            <Logo style = {{maxWidth: '12rem', maxHeight: '2rem'}}></Logo>
          </Container>
        </Navbar>
    );
}

export default Header;