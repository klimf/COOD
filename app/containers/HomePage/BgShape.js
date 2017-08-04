import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { palette } from '../../utils/constants';

const StyledSvg = styled.svg`
  margin: 0 auto;
  min-width: 1362px;
  width: 1362px;
  max-width: 1362px;
`;

function BgShape(props) {
  return (
    <StyledSvg width="1362px" height="427px" viewBox="-30 0 1422 427" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="bg-shape" fill={palette[props.color ? props.color : 'secondary']}>
        <circle id="Oval-1" cx="753" cy="175" r="175" />
        <circle id="Oval-2" cx="560" cy="166" r="123" />
        <circle id="Oval-3" cx="765" cy="285" r="141" />
        <circle id="Oval-4" cx="624" cy="324" r="98" />
        <circle id="Oval-5" cx="492" cy="267" r="104" />
        <circle id="Oval-6" cx="900" cy="259" r="94" />
        <circle id="Oval-7" cx="272" cy="157" r="64" />
        <circle id="Oval-8" cx="1136" cy="173" r="60" />
        <circle id="Oval-9" cx="156" cy="312" r="37" />
        <circle id="Oval-10" cx="1331" cy="305" r="30" />
        <circle id="Oval-11" cx="22" cy="223" r="22" />
      </g>
    </StyledSvg>
  );
}

BgShape.propTypes = {
  color: PropTypes.string,
};

export default BgShape;
