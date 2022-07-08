import * as React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Container = styled.div`
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%);

  .ftr-link {
    text-decoration: none;
    font-weight: bold;
  }
`;

export default function Footer() {
  return (
    <Container>
      <Typography>
        copyright Ⓒ 2020 - 2021{" "}
        <Link className="ftr-link" href="https://aosociety.in">
          aosociety
        </Link>
        . Designed with 💖 by
        <Link className="ftr-link" href="https://gepton.com">
          {" "}
          GEPTON
        </Link>
      </Typography>
    </Container>
  );
}
