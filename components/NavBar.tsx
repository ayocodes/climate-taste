import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

const SNavBar = styled.div`
  margin-right: 6rem;
`;

const NavBar = () => {
  const router = useRouter();
  const route = router.route;

  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    switch (route) {
      case "/":
        setActiveRoute("journal");
        break;
      case "/jornal":
        setActiveRoute("impact");
        break;
      case "/explore":
        setActiveRoute("explore");
        break;

      default:
        break;
    }
  }, [route]);

  const isActive = useCallback(
    (route: string) => {
      return route === activeRoute ? true : false;
    },
    [activeRoute]
  );
  return (
    <SNavBar>
      <NavItem
        route="/"
        name="journal"
        active={isActive("journal")}
        setActive={setActiveRoute}
      >
        Journal
      </NavItem>
      <NavItem
        route="/impact"
        name="impact"
        active={isActive("impact")}
        setActive={setActiveRoute}
      >
        Impact
      </NavItem>
      <NavItem
        route="/explore"
        name="explore"
        active={isActive("explore")}
        setActive={setActiveRoute}
      >
        Explore
      </NavItem>
    </SNavBar>
  );
};

export default NavBar;
