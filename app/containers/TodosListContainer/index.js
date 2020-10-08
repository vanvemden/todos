/**
 *
 * TodosListContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTodosListContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function TodosListContainer() {
  useInjectReducer({ key: 'todosListContainer', reducer });
  useInjectSaga({ key: 'todosListContainer', saga });

  return (
    <div>
      <Helmet>
        <title>TodosListContainer</title>
        <meta name="description" content="Description of TodosListContainer" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

TodosListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  todosListContainer: makeSelectTodosListContainer(),
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

export default compose(withConnect)(TodosListContainer);
