import * as React from "react";
import styled from "@emotion/styled";
import { TextField, Button } from "@mui/material";

const Wrapper = styled.body`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Search = styled(TextField)`
  margin: 0 0 1rem;
`;

export default function Body() {
  return (
    <Wrapper>
      <Search
        id="search"
        label="Roll Number"
        variant="outlined"
        fullWidth="true"
      />
      <Button variant="contained" color="secondary" size="large">
        SEARCH
      </Button>
    </Wrapper>
  );
}
