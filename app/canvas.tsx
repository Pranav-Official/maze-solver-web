import React from "react";

const GenerateMaze = () => {
  const canvas = document.getElementById("maze");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(100,100,50,0,Math.PI*2);

  ctx.fill();
}

export default GenerateMaze;