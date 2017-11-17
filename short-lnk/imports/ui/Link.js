import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';

export default class Link extends React.Component {
  render() {
    function logout(e) {
        e.preventDefault();
        browserHistory.push('/');
      }

    return (
      <div>
        <p>This is a Link.</p>

        <button onClick={logout}>
          Logout
        </button>
      </div>
    );
  }
}
