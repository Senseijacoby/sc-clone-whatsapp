import React from "react";
import styled from "styled-components";

const Center = styled.div``;

export default function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="../public/assets/logo2.png"
          alt=""
          height={200}
          style={{ marginBottom: 10 }}
        />
        <h1> Loading skeleton</h1>
      </div>
    </center>
  );
}
