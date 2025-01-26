import React from "react";
import NewCounter from "./NewCounter.jsx";
import ClickCounter from "./ClickCounter.jsx";
import HoverCounter from "./HoverCounter.jsx";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      {/* <NewCounter/> */}
      <ClickCounter name="Click Counter" />
      <HoverCounter name='Hover Counter'/>
    </>
  );
}
