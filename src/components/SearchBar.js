import React, { Component } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <Input />
        <Button>Search</Button>
      </div>
    );
  }
}

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'City...',
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export default SearchBar;