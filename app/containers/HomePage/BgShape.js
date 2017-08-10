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
  animation-delay: ${(props) => props.index / 5}s;
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

  getCircleStyle(index, notAnimate) {
    return {
      // WebkitTransition: notAnimate ? '0.5s ease' : '0.5s ease',
      // WebkitTransitionDelay: `${index / 20}s`,
      // WebkitAnimationDelay: `${index / 5}s`,
      // msTransition: notAnimate ? '0.5s ease' : '0.5s ease',
      // msTransitionDelay: `${index / 20}s`,
      // msAnimationDelay: `${index / 5}s`,
      transition: notAnimate ? '0s ease' : '0.5s ease',
      transitionDelay: `${index / 20}s`,
      animationDelay: `${index / 5}s`,
    };
  }

  handleSvgClick() {
    function setTemp(array) {
      return array.map((value) => {
        const item = value;
        item.temp = true;
        return item;
      });
    }

    function fillArray(arrDefault, arr2) {
      const arr1 = clone(arrDefault);
      for (let i = 0; i < arr1.length; i += 1) {
        arr1[i].id = arr2[i].id;
        arr1[i].r = arr2[i].r;
        arr1[i].cx = arr2[i].cx;
        arr1[i].cy = arr2[i].cy;
      }
      return arr1;
    }

    function fillArrayExId(arrDefault, arr2, invert) {
      const arr1 = clone(arrDefault);
      for (let i = 0; i < arr1.length; i += 1) {
        if (invert) {
          arr1[i].id = arr2[i].id;
        } else {
          arr1[i].r = arr2[i].r;
          arr1[i].cx = arr2[i].cx;
          arr1[i].cy = arr2[i].cy;
        }
      }
      return arr1;
      // return arr1.map((element, index) => {
      //   const item = Object.assign(element);
      //   // item.id = arr2[index].id;
      //   if (invert) {
      //     item.id = arr2[index].id;
      //   } else {
      //     item.r = arr2[index].r;
      //     item.cx = arr2[index].cx;
      //     item.cy = arr2[index].cy;
      //   }
      //   // console.log(item);
      //   return item;
      // });
    }
    // console.log(circlesDefault, this.state.circles);


    const cloudDefault = clone(circlesDefault.slice(0, 6));
    let cloud = clone(circlesDefault.slice(0, 6));
    const left = clone(circlesDefault.slice(6, 9));
    const right = clone(circlesDefault.slice(9, 11));
    const cloudLeft = clone(circlesDefault.slice(11, 17));
    let cloudRight = clone(circlesDefault.slice(17, 23));


    // cloudLeft = fillArrayExId(cloudLeft, cloud);
    // console.log(cloudLeft);
    cloudRight = fillArray(cloudRight, cloudDefault);
    cloud = fillArray(cloud, cloudLeft);
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
      }, 1000);
      setTimeout(() => {
        this.setState({
          reset: true,
          notAnimate: true,
        });
      }, 1200);
    }

    // temp = fillArrayExId(cloudLeft, cloudDefault, true);
    // temp = fillArrayExId(cloudLeft, cloudDefault);
    // this.setState({
    //   notAnimate: false,
    //   circles: cloud.concat(left, right, temp),
    // });

    // this.setState({
    //   animationLeft: !this.state.animationLeft,
    //   circles: this.state.animationLeft ? circlesAnimated : circlesDefault,
    // });
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
