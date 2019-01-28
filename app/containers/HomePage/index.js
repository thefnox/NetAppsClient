/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { createStructuredSelector } from 'reselect';
import {
  Paper,
  Grid,
  Typography,
  Card,
  CardContent
} from '@material-ui/core'
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectUserData,
  makeSelectIsAuthed
} from 'containers/App/selectors';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.css';

const styles = theme => ({
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
});

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
  }

  render() {
    const { userData, classes, authed } = this.props;

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="Home page"
          />
        </Helmet>
        <div>
          {
            authed ? (
            <Paper className={classes.mainHomeHero}>
              <Grid container>
                <Grid item md={12}>
                  <div className={classes.mainHomeHeroContent}>
                    <Typography variant="display2" color="inherit" gutterBottom>
                      { `Hello, ${ userData.id }` }
                    </Typography>
                    <Typography variant="title" color="inherit">
                      Your stats:
                    </Typography>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={40} className={classes.cardGrid}>
                <Grid item xs={12} md={12}>
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography variant="headline">{ `Wins: ${userData.wins}` }</Typography>
                        <Typography variant="subheading" paragraph>
                          { `Losses: ${userData.losses}` }
                        </Typography>
                        <Typography variant="subheading" color="primary">
                          { `Elo: ${userData.elo}`  }
                        </Typography>
                      </CardContent>
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </Paper>)
            : (
              <div>
                <h3>Please login to continue</h3>
              </div>
            )
          }
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  userData: makeSelectUserData(),
  authed: makeSelectIsAuthed()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
