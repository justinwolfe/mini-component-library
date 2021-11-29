/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: '8px',
  medium: '12px',
  large: '24px',
};

const Bar = styled.div`
  width: ${(p) => (p.value / 100) * 370}px;
  background-color: ${COLORS.primary};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  height: ${(p) => sizes[p.size]};
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 370px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trim off corners when progress bar is near-full. */
  overflow: hidden;
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      size={size}
    >
      <BarWrapper>
        <Bar size={size} value={value}>
          <VisuallyHidden>{value} %</VisuallyHidden>
        </Bar>
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
