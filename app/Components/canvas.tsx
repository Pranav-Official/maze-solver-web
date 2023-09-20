import React from "react";
import {memo, useRef, useEffect, useState } from "react";
import mazeGenerator from "../Fuctions/mazeGenerator";
import array2matrix from "../Fuctions/array2matrix";
import availableMoves from "../Fuctions/availableMoves";

const Canvas = (props:any) => {
  const canvasRef = useRef<HTMLCanvasElement | null >(null);

  // const [maze1d, setMaze] = useState(mazeGenerator(10, 10));
  // console.log("recived in canvas", maze1d)
   
  const maze = array2matrix(props.maze1d, props.maze_size);
  // console.log("recived in canvas", maze, "maze_size", props.maze_size)

  console.log("algorithm:", props.algorithm )

  const f1 = () => {
    console.log("f1")
  }

  const dfsSolver = () => {
    let visited = [[0,0]];
    let path = [[0,0]];
    let stack = [[0,0]];
    
    visited.pop();
    stack.pop();
    path.pop();

    let entrypoint = [0,0]; 
    let exitpoint = [0,0];

    const trimDuplicates = (arr:number[][], arr2:number[][])  => {

      let temp = [];
      for(let i = 0; i < arr.length; i++) {
        if(!arr2.includes(arr[i])) {
          temp.push(arr[i]);
        }
      }
      return temp;
    }

    const tracePath = (arr:number[][], value:number) => {
      for (let i = 0; i < arr.length; i++) {
        maze[arr[i][0]][arr[i][1]] = value;
      }
    }



    for(let i = 0; i < maze[0].length; i++) {
      if(maze[0][i] === 0) {
        entrypoint = [0,i];
      }
      if(maze[maze.length-1][i] === 0) {
        exitpoint = [maze.length-1,i];
      }
    }

    console.log("entrypoint",entrypoint);
    console.log("exitpoint",exitpoint);
    
    maze[entrypoint[0]][entrypoint[1]] = 2;

    let k = 0;

    let pixelCoordinates = entrypoint;

    while(k==0) {

      if(pixelCoordinates[0] === exitpoint[0] && pixelCoordinates[1] === exitpoint[1]) {
        tracePath(path, 3);
        maze[exitpoint[0]][exitpoint[1]] = 3;
        break;
      }
      setTimeout(f1, 100);
      path.push(pixelCoordinates);
      visited.push(pixelCoordinates);
      maze[pixelCoordinates[0]][pixelCoordinates[1]] = 2;
      let neighbours = availableMoves(maze, pixelCoordinates[0], pixelCoordinates[1]);

      neighbours = trimDuplicates(neighbours, visited);

      if(neighbours.length > 1) {
        stack.push(pixelCoordinates);
        pixelCoordinates = neighbours[0];
      }
      else if (neighbours.length === 0) {
        pixelCoordinates = stack[stack.length-1];
        stack.pop();
        let index = path.indexOf(pixelCoordinates);
        path = path.splice(0, index);
      }
      else{
        pixelCoordinates = neighbours[0];
      }

    }

    
    

  }

  if(props.algorithm === 1) {
    dfsSolver();
  }



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
      
      if (maze.length === 0) return;
      const sq_width = width / props.maze_size;
      
      
      
      for(let i = 0; i < maze.length; i++) {
        for(let j = 0; j < maze[i].length; j++) {
          if(maze[i][j] === 1) {
            ctx.fillStyle = `rgb(2, 12, 19, 1)` ;
            ctx.fillRect(j * sq_width, i * sq_width, sq_width, sq_width);
          }
          if(maze[i][j] === 2) {
            // ctx.strokeStyle = '#020C13';
            ctx.fillStyle = `rgb(90,174,229, 1)` ;
            ctx.fillRect(j * sq_width, i * sq_width, sq_width, sq_width);
            // console.log("filling path")
          }
          if(maze[i][j] === 3) {
            // ctx.strokeStyle = '#020C13';            
            ctx.fillStyle = `rgb(61, 182, 47, 1)` ;
            ctx.fillRect(j * sq_width, i * sq_width, sq_width, sq_width);
          }

        }
      }
      // console.log("drawing compleye")

      // console.log(width, height);
   
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

export default memo(Canvas) ;