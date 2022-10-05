import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <h2>Not Found!?!</h2>
      <h3>¯\_(ツ)_/¯</h3>
      <br />
      <Link to="/">GO HOME</Link>
    </div>
  );
}

export default NotFound;
