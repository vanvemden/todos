/**
 *
 * TodoFormContainer
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
import makeSelectTodoFormContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function TodoFormContainer() {
  useInjectReducer({ key: 'todoFormContainer', reducer });
  useInjectSaga({ key: 'todoFormContainer', saga });

  return (
    <div>
      <Helmet>
        <title>TodoFormContainer</title>
        <meta name="description" content="Description of TodoFormContainer" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

TodoFormContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  todoFormContainer: makeSelectTodoFormContainer(),
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

export default compose(withConnect)(TodoFormContainer);
