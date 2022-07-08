import "./styles.css";
import styled from "styled-components";
import { useState } from "react";
import queryData from "./cert-data";
import DataTable from "./components/table";

const Container = styled.div`
  margin: 1% 15%;
  font-family: "Roboto", sans-serif;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15%;
  @media (max-width: 749px) {
    display: block;
    text-align: center;
  }
`;

const Brand = styled.h1`
  color: purple;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 749px) {
    justify-content: center;
  }
`;

const NavItems = styled.a`
  text-decoration: none;
  margin-left: 2rem;
`;

const Search = styled.input`
  width: 100%;
  padding: 14px 32px;
  text-align: center;
`;

const StyledBtn = styled.button`
  padding: 0.5em 1.2em;
  margin: 1rem auto;
  cursor: pointer;
  background-color: #9a4ef1;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 2em;
  text-decoration: none;
  font-weight: 300;
  font-size: 1em;
  color: #ffffff;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;

  &:hover {
    border-color: rgba(255, 255, 255, 1);
  }
`;

const Error = styled.div`
  text-align: center;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%);
  width: fit-content;

  .link {
    text-decoration: none;
    font-weight: bold;
  }

  @media (max-width: 749px) {
    font-size: 0.75rem;
  }
`;

export default function App() {
  const [roll, setRoll] = useState("");
  const [data, setData] = useState();
  const handleSubmit = () => {
    setData(queryData(roll));
  };
  return (
    <Container>
      <Nav>
        <Brand>Asian Olympiad Society</Brand>
        <Wrapper>
          <NavItems href="/">Home</NavItems>
          <NavItems href="https://aosociety.in/">AOS Website</NavItems>
        </Wrapper>
      </Nav>
      <div style={{ display: "flex" }}>
        <Search
          type="text"
          placeholder="Your Exam Roll Number?"
          value={roll}
          onChange={(event) => setRoll(event.target.value)}
        />
      </div>
      <div style={{ display: "flex" }}>
        <StyledBtn onClick={handleSubmit}>Submit</StyledBtn>
      </div>
      {data ? (
        data.url ? (
          <DataTable props={data} />
        ) : (
          <Error>{data}</Error>
        )
      ) : (
        <Error>{data}</Error>
      )}
      <Footer>
        Copyright Ⓒ 2020 - 2021{" "}
        <a className="link" href="https://aosociety.in/">
          aosociety
        </a>
        {". "}
        Designed with 💖 by{" "}
        <a className="link" href="https://gepton.com">
          GEPTON
        </a>
      </Footer>
    </Container>
  );
}
