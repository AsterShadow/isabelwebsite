"use client";

import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.i`
  transform: scale(var(--ggs, 1));

  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 20px;
    height: 2px;
    border-radius: 3px;
    background: currentColor;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: -6px;
  }

  &::after {
    top: 6px;
  }
`;

export const Menu = React.forwardRef((props, ref) => {
  return <StyledMenu {...props} ref={ref} />;
});