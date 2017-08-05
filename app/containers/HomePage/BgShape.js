import React, { PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';
import { palette } from '../../utils/constants';

function getClasses() {
  const rs = [175, 123, 141, 98, 104, 94, 64, 60, 37, 30, 22];

  let string = '';
  for (let i = 0; i < 11; i += 1) {
    string += `& #Oval-${i + 1} { transition-delay: ${i / 20}s; animation-delay: ${i / 5}s;}`;
    string += `&.active #Oval-${i + 1} { r: ${rs[i]}; }`;
  }
  return string;
}

const Animation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const StyledSvg = styled.svg`
  overflow: visible !important;
  margin: 0 auto;
  min-width: 1362px;
  width: 1362px;
  max-width: 1362px;
  & circle {
    r: 0;
    transition: 0.5s ease;
    animation: ${Animation} 3s ease-in-out infinite;
  }
  ${getClasses()}
  
`;

export default class BgShape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      });
    });
  }

  render() {
    return (
      <StyledSvg className={this.state.loaded ? 'active' : ''} width="1362px" height="427px" viewBox="-30 0 1422 427" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="bg-shape" fill={palette[this.props.color ? this.props.color : 'secondary']}>
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
}

BgShape.propTypes = {
  color: PropTypes.string,
};
