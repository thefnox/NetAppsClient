/**
 *
 * TournamentPage
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
  makeSelectTournamentsPage,
  makeSelectError,
  makeSelectLoading,
  makeSelectTournaments,
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
export class TournamentPage extends React.Component {
  render() {
    const { error, loading, tournaments, classes } = this.props
    return (
      <div>
        <Helmet>
          <title>Tournaments Page</title>
          <meta name="description" content="Description of TournamentsPage" />
        </Helmet>
        <h1>Tournaments</h1>
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
                          <TableCell align="right">Player count</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {tournaments.map(row => (
                          <TableRow key={row.tournament_id}>
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.maxPlayers}</TableCell>
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

TournamentPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tournamentsPage: makeSelectTournamentsPage(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  tournaments: makeSelectTournaments()
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

const withReducer = injectReducer({ key: 'tournamentsPage', reducer });
const withSaga = injectSaga({ key: 'tournamentsPage', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(TournamentPage);
