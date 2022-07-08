import * as React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const Nav = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem auto;

  .navItem {
    margin-right: 1.5rem;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.2rem;
  }
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
`;

export default function Header() {
  return (
    <Nav>
      <Logo>Asian Olympiad Society</Logo>
      <div>
        <Link className="navItem" to="/">
          Home
        </Link>
        <Link className="navItem" href="https://aosociety.in">
          AOS
        </Link>
      </div>
    </Nav>
  );
}
