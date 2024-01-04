import styled from "styled-components";
import React, { useContext } from "react";
import Head from "next/head";
import firebase from "firebase";
import Sidebar from "../../components/Sidebar";
import { ChatScreen } from "../../components/ChatScreen";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import getRecipientEmail from "../../utils/getRecipientEmail";
import { createContext } from "react";

export default function Chat({ chat, messages }) {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <Head>
        <title>chat with {getRecipientEmail(chat.users, user)}</title>
      </Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen chat={Chat} messages={messages} />
      </ChatContainer>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const context = createContext();
  const ref = db.collection("chats").doc(context.query.id);
  {
    /*msgs on the server */
  }
  const messagesResponses = await ref
    .collection("messages")
    .order("timestamp", "asc")
    .get();
  const messages = messagesResponses.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((messages) => ({
      ...messages,
      timestamp: messages.timestamp.toDate().getTime(),
    }));

  {
    /*chats on the server */
  }
  const chatResponses = await ref.get();
  const chat = {
    id: chatResponses.id,
    ...chatResponses.data(),
  };

  console.log(chat, messages);

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat,
    },
  };
}

const Container = styled.div`
  display: flex;
`;
const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
