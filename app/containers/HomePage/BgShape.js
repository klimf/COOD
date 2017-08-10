import React, { PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';
import { palette } from '../../utils/constants';
import circles from './circles';

function clone(array) {
  return JSON.parse(JSON.stringify(array));
  // return Object.assign({}, array);
  // return Array.from(array);
}

const circlesDefault = clone(circles);

// function getClasses() {
//   let string = '';
//   for (let i = 0; i < 11; i += 1) {
//     string += `& #Oval-${i + 1} { transition-delay: ${i / 20}s; animation-delay: ${i / 5}s;}`;
//     string += `&.active #Oval-${i + 1} { r: ${rs[i]}; cx: ${cxs[i]}; cy: ${cys[i]}; }`;
//   }
//   return string;
// }

// function getAnimatedClasses() {
//   let SvgStyle = {};
//   for (let i = 0; i < 11; i += 1) {
//     string += `& #Oval-${i + 1} { transition-delay: ${i / 20}s; animation-delay: ${i / 5}s;}`;
//     string += `&.active #Oval-${i + 1} { r: ${rs[i]}; cx: ${cxs[i]}; cy: ${cys[i]}; }`;
//   }
// }

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
  &.notLoaded circle {
    r: 0;
  }
  & circle {
    animation: ${Animation} 3s ease-in-out infinite;
  }
  
  
`;

const Circle = styled.circle`
  transition: ${(props) => props.notAnimate ? '0s ease' : '0.5s ease'};
  transition-delay: ${(props) => props.index / 20}s;
  animation-delay: ${(props) => props.index / 5}s !important;
`;


export default class BgShape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reset: true,
      loaded: false,
      notAnimate: false,
      circles,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      });
    });
  }

  handleSvgClick(isRight) {
    function setTempRadius(arrDefault) {
      const arr1 = clone(arrDefault);
      for (let i = 0; i < arr1.length; i += 1) {
        arr1[i].r = 0;
      }
      return arr1;
    }
    function incId(arrDefault) {
      const arr1 = clone(arrDefault);
      for (let i = 0; i < arr1.length; i += 1) {
        arr1[i].id += 15;
      }
      return arr1;
    }

    const cloudDefault = clone(circlesDefault.slice(0, 6));
    const left = clone(circlesDefault.slice(6, 9));
    const right = clone(circlesDefault.slice(9, 11));
    let cloud = clone(circlesDefault.slice(0, 6));
    let cloudLeft = clone(circlesDefault.slice(11, 17));
    let cloudRight = clone(circlesDefault.slice(17, 23));

    if (isRight) {
      cloudLeft = clone(cloudDefault);
      cloudLeft = incId(cloudLeft);
      cloud = clone(cloudRight);
    } else {
      cloudRight = clone(cloudDefault);
      cloudRight = incId(cloudRight);
      cloud = clone(cloudLeft);
    }

    if (this.state.reset) {
      this.setState({
        reset: false,
        notAnimate: false,
        circles: cloud.concat(left, right, cloudLeft, cloudRight),
      });
      setTimeout(() => {
        this.setState({
          notAnimate: true,
          circles: circlesDefault,
        });
      }, 1500);
      setTimeout(() => {
        this.setState({
          reset: true,
          notAnimate: true,
        });
      }, 1800);
    }
  }

  render() {
    return (
      <StyledSvg
        // eslint-disable-next-line react/jsx-no-bind
        onClick={this.handleSvgClick.bind(this)} className={this.state.loaded ? '' : 'notLoaded'}
        width="1362px" height="427px" viewBox="-30 0 1422 427" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="bg-shape" fill={palette[this.props.color ? this.props.color : 'secondary']}>
          {this.state.circles.map((circle, index) => (
            <Circle
              key={index} index={circle.id} id={`Oval-${index}`} className={`Oval-${circle.id}`} cx={circle.cx} cy={circle.cy}
              r={circle.r} notAnimate={this.state.notAnimate}
            />
          ))}
        </g>
      </StyledSvg>
    );
  }
}

BgShape.propTypes = {
  color: PropTypes.string,
};
