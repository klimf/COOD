import styled from 'styled-components';
import { palette } from '../../utils/constants';

const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 560px;
  overflow: hidden;
  background-color: ${palette.transparent}
`;

export default Slide;
