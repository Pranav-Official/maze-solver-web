import React from "react";
import {useRef, useEffect} from "react";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null >(null);

  

  const maze = [
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1]
  ];

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

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("resize", draw);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("resize", draw);
    };
  }, [canvasRef]);

  return (
    <canvas className='bg-secondary m-2 md:m-3 2xl:m-4 flex-1 rounded-md ' id='maze' ref={canvasRef}></canvas>
  )
}

export default Canvas;