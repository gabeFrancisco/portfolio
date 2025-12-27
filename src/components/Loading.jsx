import React from "react";
import Title from "./Title";
import Gabrielos from '../../public/assets/gabrielos.png'

export default function Loading() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
      }}
    >
      <img src={Gabrielos} className="animate-pulse logo" />
      {/* <div style={{marginTop: '3rem'}}>Carregando</div> */}
    </div>
  );
}
