import styled from 'styled-components';
import { Link } from 'gatsby';

export const Button = styled(Link)`
  background: ${props => props.primary ? '#F26A2e' : '#077BF1'};
  white-space: nowrap;
  padding: ${props => props.big ? '16px 40px' : '10px 32px'};
  color: #fff;
  font-size: ${props => props.big ? '20px' : '16px'};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: .5s !important;
  border-radius: ${props => props.round ? '50px' : 'none'};

  &:hover {
    background: ${props => props.primary ? '#077BF1' : '#F26A2e'};
    transform: translateY(-2px);
  }
`