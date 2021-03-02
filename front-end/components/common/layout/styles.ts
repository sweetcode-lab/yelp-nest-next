import styled from 'styled-components';

import { flex } from 'utils';

const Header = styled.header`
  ${flex.alignCenter}
  min-height: 96px;
  margin-bottom: 24px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export { Header, Main };
