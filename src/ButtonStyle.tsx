import React, { ComponentProps } from "react";
import styled from 'styled-components';

interface HeaderProps {
  readonly isActive: boolean;
  children: React.ReactNode
}

const Header: React.FunctionComponent<HeaderProps & ComponentProps<"header">> = ({children, ...rest}) => <header {...rest}>{children}</header>;

const StyledHeader = styled(Header)`
  color: ${({isActive}) => isActive? "red": "blue"};
`;

export default StyledHeader;