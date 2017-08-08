import React, { PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';
import { palette } from '../../utils/constants';

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
    transition: 0.5s ease;
    animation: ${Animation} 3s ease-in-out infinite;
  }
  
  
`;
const circlesAnimated = [
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
  {
    r: 64,
    cx: 272,
    cy: 157,
  },
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
  {
    r: 37,
    cx: 156,
    cy: 312,
  },
  {
    r: 30,
    cx: 1331,
    cy: 305,
  },
  {
    r: 22,
    cx: 22,
    cy: 223,
  },
  {
    r: 175,
    cx: 753,
    cy: 175,
  },
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
  {
    r: 123,
    cx: 560,
    cy: 166,
  },
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
  {
    r: 141,
    cx: 765,
    cy: 285,
  },
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
  {
    r: 98,
    cx: 624,
    cy: 324,
  },
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
  {
    r: 104,
    cx: 492,
    cy: 267,
  },
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
  {
    r: 94,
    cx: 900,
    cy: 259,
  },
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
];
const circles = [
  {
    r: 175,
    cx: 753,
    cy: 175,
  },
  {
    r: 123,
    cx: 560,
    cy: 166,
  },
  {
    r: 141,
    cx: 765,
    cy: 285,
  },
  {
    r: 98,
    cx: 624,
    cy: 324,
  },
  {
    r: 104,
    cx: 492,
    cy: 267,
  },
  {
    r: 94,
    cx: 900,
    cy: 259,
  },
  {
    r: 64,
    cx: 272,
    cy: 157,
  },
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
  {
    r: 37,
    cx: 156,
    cy: 312,
  },
  {
    r: 30,
    cx: 1331,
    cy: 305,
  },
  {
    r: 22,
    cx: 22,
    cy: 223,
  },
  {
    r: 64,
    cx: 272,
    cy: 157,
  },
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
  {
    r: 64,
    cx: 272,
    cy: 157,
  },
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
  {
    r: 64,
    cx: 272,
    cy: 157,
  },
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
  {
    r: 64,
    cx: 272,
    cy: 157,
  },
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
  {
    r: 64,
    cx: 272,
    cy: 157,
  },
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
  {
    r: 64,
    cx: 272,
    cy: 157,
  },
  {
    r: 70,
    cx: 1156,
    cy: 173,
  },
];

export default class BgShape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      animationLeft: false,
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

  getCircleStyle(index) {
    return {
      transitionDelay: `${index / 20}s`,
      animationDelay: `${index / 5}s`,
    };
  }

  handleSvgClick() {
    this.setState({
      animationLeft: !this.state.animationLeft,
      circles: this.state.animationLeft ? circlesAnimated : circles,
    });
  }

  render() {
    return (
      <StyledSvg onClick={this.handleSvgClick.bind(this)} style={{ children: { color: '#fac' } }} className={this.state.loaded ? '' : 'notLoaded'} width="1362px" height="427px" viewBox="-30 0 1422 427" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="bg-shape" fill={palette[this.props.color ? this.props.color : 'secondary']}>
          {this.state.circles.map((circle, index) => (
            <circle key={index} id={`Oval-${index}`} cx={circle.cx} cy={circle.cy} r={circle.r} style={this.getCircleStyle(index)} />
          ))}
          {/* <circle id="Oval-1" cx="753" cy="175" r="175" />*/}
          {/* <circle id="Oval-2" cx="560" cy="166" r="123" />*/}
          {/* <circle id="Oval-3" cx="765" cy="285" r="141" />*/}
          {/* <circle id="Oval-4" cx="624" cy="324" r="98" />*/}
          {/* <circle id="Oval-5" cx="492" cy="267" r="104" />*/}
          {/* <circle id="Oval-6" cx="900" cy="259" r="94" />*/}
          {/* <circle id="Oval-7" cx="272" cy="157" r="64" />*/}
          {/* <circle id="Oval-8" cx="1166" cy="173" r="70" />*/}
          {/* <circle id="Oval-9" cx="156" cy="312" r="37" />*/}
          {/* <circle id="Oval-10" cx="1331" cy="305" r="30" />*/}
          {/* <circle id="Oval-11" cx="22" cy="223" r="22" />*/}
        </g>
      </StyledSvg>
    );
  }
}

BgShape.propTypes = {
  color: PropTypes.string,
};
