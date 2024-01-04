import React from "react";
import styled from "styled-components";
import logo2 from "../public/assets/logo2.png";
import { Button } from "@mui/material";

// import { logosrc } from "../public/assets/logosrc.jpg";
// import logosrc from "../public/assets/logosrc.jpg";
import { auth, provider } from "../firebase";

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px --3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.svg`
  background-image: url(${logo2});

  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;

export default function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return;
  <>
    <Container>
      <LoginContainer>
        <Logo src={logo2} />

        <Button onClick={signIn} variant="outlined">
          SIGN IN WITH GOOGLE
        </Button>
      </LoginContainer>
    </Container>
  </>;
}
