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

const StyledNavLink = styled(Link)`
  color: #929898;
  display: inline-flex;
  line-height: 2em;
  font-size: 1.5em;
  margin: 0.75em;
  padding: 0.25em 1em;
  border: 1px dashed #b4b4b2;
  border-radius: 0.25rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #424147;
    border-color: #424147;
    background-color: #ffffff;
  }
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
