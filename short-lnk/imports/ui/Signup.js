import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <h1>Signup to Short Lnk</h1>

        <p>Signup form here</p>

        <Link to="/">Already have an account?</Link>
      </div>
    );
  }
}
