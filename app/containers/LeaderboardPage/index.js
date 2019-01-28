/**
 *
 * LeaderboardPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from '@material-ui/core';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectLeaderboardPage,
  makeSelectError,
  makeSelectLoading,
  makeSelectPlayers,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  }
});

/* eslint-disable react/prefer-stateless-function */
export class LeaderboardPage extends React.Component {
  render() {
    const { error, loading, players, classes } = this.props
    return (
      <div>
        <Helmet>
          <title>LeaderboardPage</title>
          <meta name="description" content="Description of LeaderboardPage" />
        </Helmet>
        <h1>Leaderboards</h1>
        {
          loading ? (
            <div>
              Loading...
            </div>
          ) : (
            <div>
              <Grid container>
                <Grid item md={12}>
                  <Paper className={classes.root}>
                    <Table className={classes.table}>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell align="right">Elo</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {players.sort((a, b) => {
                          if (a.elo > b.elo) { return -1; }
                          if (a.elo < b.elo) { return 1; }
                          return 0;
                        }).map(row => (
                          <TableRow key={row.player_id}>
                            <TableCell component="th" scope="row">
                              {row.player_id}
                            </TableCell>
                            <TableCell align="right">{row.elo}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          )
        }
      </div>
    );
  }
}

LeaderboardPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  leaderboardPage: makeSelectLeaderboardPage(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  players: makeSelectPlayers()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'leaderboardPage', reducer });
const withSaga = injectSaga({ key: 'leaderboardPage', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(LeaderboardPage);
