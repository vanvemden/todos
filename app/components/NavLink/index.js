/**
 *
 * NavLink
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import navLinkStyles from './styles';

const StyledNavLink = styled(Link)`
  ${navLinkStyles};
`;

function NavLink({ to, message, messageValues }) {
  return (
    <StyledNavLink to={to}>
      <FormattedMessage {...message} values={messageValues} />
    </StyledNavLink>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  message: PropTypes.object.isRequired,
  messageValues: PropTypes.object,
};

export default NavLink;
