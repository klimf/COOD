import styled from 'styled-components';
import { media } from '../../utils/style-utils';
import { unit, palette } from '../../utils/constants';

const Wrapper = styled.div`
  background-color: ${(props) => props.dark ? palette.accent : palette.transparent};
  z-index: 100;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: ${2.5 * unit}px ${unit / 3}%;
  margin-bottom: -${8 * unit}px;
  transition: background-color 0.3s ease;
`;

export default Wrapper;
