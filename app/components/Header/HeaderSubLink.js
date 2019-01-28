import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';

export default class HeaderSubLink extends React.Component {
  render() {
    const { to, onClick, children } = this.props
    return (
      <Link to={to} onClick={ onClick }>
        < MenuItem>
          {children}
        </ MenuItem>
      </Link>
    );
  }
}