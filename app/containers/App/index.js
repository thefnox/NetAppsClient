/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import classNames from 'classnames';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import injectSaga from 'utils/injectSaga';
import { CssBaseline } from '@material-ui/core';
import PrivateRoute from 'containers/PrivateRoute';
import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import LogoutPage from 'containers/LogoutPage/Loadable';
import MatchPage from 'containers/MatchPage/Loadable';
import MatchRequestPage from 'containers/MatchRequestPage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import TournamentPage from 'containers/TournamentPage/Loadable';
import LeaderboardsPage from 'containers/LeaderboardPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import saga from './saga';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  mainHomeHero: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainHomeHeroContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

export class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Network Applications Project"
          defaultTitle="Network Applications Project"
        >
          <meta name="description" content="Network Applications project" />
        </Helmet>
        <CssBaseline />
        <Header className={classes.appBar} classes={classes} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/logout" component={LogoutPage} />
          <PrivateRoute path="/request" component={MatchRequestPage} />
          <PrivateRoute path="/match/:matchId" component={MatchPage} />
          <PrivateRoute path="/leaderboards" component={LeaderboardsPage} />
          <PrivateRoute path="/tournament" component={TournamentPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer className={classNames(classes.footer, classes.layout)}/>
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

const withSaga = injectSaga({ key: 'global', saga });

export default compose(
  withStyles(styles),
  withSaga,
)(App);