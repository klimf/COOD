import styled from 'styled-components';
import { palette } from '../../utils/constants';
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
  color: ${(props) => props.dark ? palette.white : palette.black};
  ${hideOn}
`;


export default NavList;
