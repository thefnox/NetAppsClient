import React from 'react';
import { FormattedMessage } from 'react-intl';
import { makeSelectIsAuthed } from 'containers/App/selectors';
import {
  AppBar, 
  Toolbar,
  IconButton,
  Menu,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HeaderSubLink from './HeaderSubLink';
import HeaderLink from './HeaderLink';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
};

  renderAuthedLinks() {
    const { authed, classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    if (authed) {
      return (
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton
              onClick={this.handleMenu}
              className={classes.menuButton} 
              color="inherit" 
              aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              <HeaderSubLink to="/" onClick={this.handleClose}>
                <FormattedMessage {...messages.home} />
              </HeaderSubLink>
              <HeaderSubLink to="/request" onClick={this.handleClose}>
                <FormattedMessage {...messages.request} />
              </HeaderSubLink>
              <HeaderSubLink to="/leaderboards" onClick={this.handleClose}>
                <FormattedMessage {...messages.leaderboards} />
              </HeaderSubLink>
              <HeaderSubLink to="/tournament" onClick={this.handleClose}>
                <FormattedMessage {...messages.tournament} />
              </HeaderSubLink>
              <HeaderSubLink to="/logout" onClick={this.handleClose}>
                <FormattedMessage {...messages.logout} />
              </HeaderSubLink>
            </Menu>
            <HeaderLink to="/">
              <FormattedMessage {...messages.home} />
            </HeaderLink>
          </Toolbar>
        </AppBar>
      );
    }
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/login">
            <FormattedMessage {...messages.login} />
          </HeaderLink>
        </Toolbar>
      </AppBar>
    )
  }

  render() {
    return (
      <div>
        { this.renderAuthedLinks() }
      </div>
    );
  }
}

export default connect(
  createStructuredSelector({
    authed: makeSelectIsAuthed(),
  }),
)(Header);
