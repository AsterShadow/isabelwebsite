"use client";

import React from 'react';
import styled from 'styled-components';

const StyledClose = styled.i`
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  border-radius: 40px;

  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 16px;
    height: 2px;
    background: currentColor;
    transform: rotate(45deg);
    border-radius: 5px;
    top: 8px;
    left: 1px;
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export const Close = React.forwardRef((props, ref) => {
  return <StyledClose {...props} ref={ref} />;
});