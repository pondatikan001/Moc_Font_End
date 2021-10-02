import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({ className }) {
  return (
    <header className={className}>
      <Link to="/" className="brand">
      Board gang
      </Link>
      <Link to="/create-product"className="brand">Create product</Link>
    </header>
  );
}

Navbar.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(Navbar)`

a {
  text-decoration: none;
}
a:hover{
  color: rgb(236, 196, 17);
}

  grid-area: header;
  background-color: #3DC7BE;
  color:#ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;

  .brand {
    font-weight: bold;
    font-size: 2.5rem;
    color:#ffffff;
  }
`;