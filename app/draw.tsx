import React from "react";
import {useRef, useEffect, useState } from "react";
import mazeGenerator from "./mazeGenerator";
import { log } from "console";

const draw = (props:any) => {
  const canvasRef = useRef<HTMLCanvasElement | null >(null);

  const [maze, setMaze] = useState(props.maze);
  console.log(maze)

  useEffect(() => {
    if (!canvasRef) {
      return;
    }
    

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const width = canvas.width;
      const height = canvas.height;
      ctx.strokeStyle = '#020C13';
      ctx.fillStyle = '#020C13';
      const sq_width = width / maze[0].length;
      
      for(let i = 0; i < maze.length; i++) {
        for(let j = 0; j < maze[i].length; j++) {
          if(maze[i][j] === 1) {
            ctx.fillRect(j * sq_width, i * sq_width, sq_width, sq_width);
          }
        }
      }

      console.log(width, height);
   
    }


    window.addEventListener("resize", draw);
    draw();

    return () => {
      window.removeEventListener("resize", draw);
    };
  }, [canvasRef, maze]);

}

export default draw;