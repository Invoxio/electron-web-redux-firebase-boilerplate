import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const StyledNavBar = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
  align-items: center;
  border-bottom: 1px solid #cacaca;
  margin-bottom: 20px;
`;

const NavBarLeft = styled.div`
  display: flex;
  width: 50%;
  margin-left: 20px;
`;

const NavBarRight = styled.div`
  display: flex;
  width: 50%;
  margin-right: 20px;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  margin-right: 20px;
`;

const StyledButton = styled(Button)`
  min-width: 100px;
  cursor: pointer;
`;

function NavBar() {
  return (

    <StyledNavBar>
      <NavBarLeft>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/dashboard">Dashboard</StyledLink>
        <StyledLink to="/signup">Signup</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </NavBarLeft>
      <NavBarRight>
        <StyledLink to="/">
          <StyledButton color="info">Home</StyledButton>{' '}
        </StyledLink>
        <StyledLink to="/dashboard">
          <StyledButton color="warning">Dashboard</StyledButton>{' '}
        </StyledLink>
        <StyledLink to="/signup">
          <StyledButton color="danger">Signup</StyledButton>{' '}
        </StyledLink>
        <StyledLink to="/login">
          <StyledButton color="success">Login</StyledButton>{' '}
        </StyledLink>
      </NavBarRight>
    </StyledNavBar>
  );
}


export default NavBar;
