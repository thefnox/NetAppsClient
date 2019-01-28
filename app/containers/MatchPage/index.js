/**
 *
 * MatchPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  Button
} from '@material-ui/core';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMatchPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class MatchPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>MatchPage</title>
          <meta name="description" content="Description of MatchPage" />
        </Helmet>
        <Button className="loseButton">Press to lose</Button>
      </div>
    );
  }
}

MatchPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  matchPage: makeSelectMatchPage(),
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

const withReducer = injectReducer({ key: 'matchPage', reducer });
const withSaga = injectSaga({ key: 'matchPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MatchPage);
