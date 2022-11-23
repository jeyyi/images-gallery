import React from 'react';
import {Navbar, Container} from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg'

const navbarStyle = {
  backgroundColor: 'bglight'
}

const Header = ({title}) => {
    return(
        <Navbar style ={navbarStyle}  variant="light">
          <Container>
            <Logo alt= {title} style = {{maxWidth: '12rem', maxHeight: '3rem'}}></Logo>
          </Container>
        </Navbar>
    );
}

export default Header;