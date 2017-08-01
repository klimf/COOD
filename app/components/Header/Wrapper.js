import styled from 'styled-components';
import { media } from '../../utils/style-utils';
import { unit, palette } from '../../utils/constants';

const Wrapper = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${palette.secondary};
  z-index: 100;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: ${2.5 * unit}px ${unit / 3}%;
  margin-bottom: -${0 * unit}px;
  ${media.small}
`;

export default Wrapper;
