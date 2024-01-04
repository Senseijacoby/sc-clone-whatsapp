import React from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function Message({ message, user }) {
  const [loggedInUser] = useAuthState(auth);
  const MsgVariance = user === loggedInUser.email ? Sender : Receiver;

  return (
    <Container>
      <MsgVariance>
        {message.message}
        <Timestamp>
          {message.timestamp
            ? ModeComment(message.timestamp).format("LT")
            : "..."}{" "}
        </Timestamp>
      </MsgVariance>
    </Container>
  );
}

const Container = styled.div``;
const MsgElement = styled.p`
  width: fit-content;
  padding: 15px;
  border-radius: 8px;
  margin: 10px;
  min-width: 80px;
  padding-bottom: 26px;
  position: relative;
  text-align: right;
`;
const Sender = styled(MsgElement)`
  margin-left: auto;
  background-color: #dcf8c6;
`;

const Receiver = styled(MsgElement)`
  /* margin-left: auto; */
  background-color: whitesmoke;
  text-align: left;
`;

const Timestamp = styled.span`
  color: gray;
  padding: 10px;
  font-size: 9px;
  position: absolute;
  bottom: 0;
  text-align: right;
  right: 0;
`;
