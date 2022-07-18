import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import Text from "./Text";

interface INavItemProps {
  children: React.ReactNode;
  route: string;
  name: string;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

interface ISText {
  active: boolean;
}

const SNavitem = styled.div`
padding: 1rem;
`

const SLink = styled.a`
  text-decoration: none;
`;

const SText = styled(Text)<ISText>`
  font-family: "Macondo";
  cursor: pointer;
  font-size: 4rem;
  margin-bottom: 2.1rem;
  transition: all 500ms;
  ${({ active }) => (active ? "color: #000;" : "color : #777;")};
`;

const NavItem: FC<INavItemProps> = ({
  children,
  route,
  name,
  active,
  setActive,
}) => {
  return (
    <SNavitem onClick={() => setActive(name)}>
      <Link passHref={true} href={route}>
        <SLink>
          <SText active={active}>{children}</SText>
        </SLink>
      </Link>
    </SNavitem>
  );
};

export default NavItem;
