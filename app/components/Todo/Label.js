import styled from 'styled-components';

const Label = styled.div`
  text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
`;

export default Label;
