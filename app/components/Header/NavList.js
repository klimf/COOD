import styled from 'styled-components';

import { hideOn } from '../../utils/style-utils';


const NavList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 400px;
  height: 36px;
  ${hideOn}
`;


export default NavList;
