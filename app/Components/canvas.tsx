import React from "react";
import {useRef, useEffect, useState } from "react";
import mazeGenerator from "../Fuctions/mazeGenerator";
import array2matrix from "../Fuctions/array2matrix";

const Canvas = (props:any) => {
  const canvasRef = useRef<HTMLCanvasElement | null >(null);

  // const [maze1d, setMaze] = useState(mazeGenerator(10, 10));
  // console.log("recived in canvas", maze1d)
   
  const maze = array2matrix(props.maze1d, props.maze_size);
  console.log("recived in canvas", maze, "maze_size", props.maze_size)
 

  useEffect(() => {
    if (!canvasRef) {
      return;
    }
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const container = canvas.parentElement;
      if (!container) return;

      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const width = canvas.width;
      const height = canvas.height;
      ctx.strokeStyle = '#020C13';
      ctx.fillStyle = '#020C13';
      if (maze.length === 0) return;
      const sq_width = width / props.maze_size;
      
      for(let i = 0; i < maze.length; i++) {
        for(let j = 0; j < maze[i].length; j++) {
          if(maze[i][j] === 1) {
            ctx.fillRect(j * sq_width, i * sq_width, sq_width, sq_width);
          }
        }
      }
      console.log("drawing compleye")

      console.log(width, height);
   
    }

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("resize", draw);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("resize", draw);
    };
  }, [canvasRef, maze, props.maze_size]);

  return (
    <canvas className='aspect-square bg-secondary m-2 md:m-3 2xl:m-4 flex-1 rounded-md ' id='maze' ref={canvasRef}></canvas>
  )
}

export default Canvas;