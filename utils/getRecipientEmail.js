import React from "react";

export default function getRecipientEmail(users, userLoggedIn) {
  users?.filter((userToFilter) => userToFilter !== userLoggedIn?.email)[0];
}
