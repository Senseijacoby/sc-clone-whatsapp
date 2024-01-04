"use client";
import styled from "styled-components";
// import firebase from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "../components/Login";
import Loading from "../components/Loading";
import { useEffect } from "react";

import {
  getAuth as auth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

export default function Home() {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <Login />;
  return;
  <>
    <Container>sessions page</Container>
  </>;
}
