import styled from 'styled-components';
import { media } from '../../utils/style-utils';

const NavList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 400px;
  height: 36px;
  
  ${media.small`
    display: none;
  `}
`;

export default NavList;
