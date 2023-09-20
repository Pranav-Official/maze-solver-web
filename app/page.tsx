"use client";
import maze_logo from "../public/mazelogo.png"
import maze_logo_dark from "../public/mazelogo-dark.png"
import moon_icon from "../public/moon-icon.png"
import sun_icon from "../public/sun-icon.png"
import mazeGenerator from "./Fuctions/mazeGenerator";


import Canvas from "./Components/canvas";

import Image from 'next/image'
import { useState, useEffect } from 'react'
import matrix2array from "./Fuctions/matrix2array";
import { log } from "console";
import dfsVisualization from "./Solving Algorithms/dfs";
import array2matrix from "./Fuctions/array2matrix";

import availableMoves from "./Fuctions/availableMoves";

export default function Home() {

  const [theme, setTheme] = useState('light')
  
  const [themeIcon, setThemeIcon] = useState(moon_icon)
  const [logoTheme, setLogoTheme] = useState(maze_logo)
  const [maze_size, setMazeSize] = useState(11)
  // const [temp_size, setTempSize] = useState(-1)
  const [maze1d, setMaze] = useState<number[]>([]);
  // const [mazeKey, setMazeKey] = useState(0)

  const [algorithm, setAlgorithm] = useState(-1)
  const [solutionKey, setSolutionKey] = useState(0)

  // console.log("flattend maze",maze1d, "maze_size flated", maze_size);

  const maze2 = [
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, , 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1]
  ];
  

  useEffect(() => {
    

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      // localStorage.setItem('theme', 'dark')
      setThemeIcon(sun_icon)
      setLogoTheme(maze_logo_dark)
    } else {
      document.documentElement.classList.remove('dark')
      // localStorage.setItem('theme', 'light')
      setThemeIcon(moon_icon)
      setLogoTheme(maze_logo)
    }

    // localStorage.setItem('theme', theme)

  }, [theme, themeIcon]);

  // useEffect(() => {
  //   if (theme === 'dark') {
  //     setThemeIcon(sun_icon)
  //   } else {
  //     setThemeIcon(moon_icon)
  //   }
  // }, [theme, themeIcon]);


  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
    console.log(theme)
  }

  let temp_size = -1

  const handleSizeChange = (event: any) => {
    temp_size = parseInt(event.target.value)
    temp_size = temp_size*2 + 1;
  }


  const handleSubmit = () => {
    // event.preventDefault();
    console.log(temp_size)

    if (temp_size <= 101 && temp_size > 5||temp_size === -1){
      
    

      if (temp_size > 0){
        setMazeSize(temp_size)
        setMaze(mazeGenerator(temp_size, temp_size));
        setAlgorithm(-1)
      }
      else{
        setMaze(mazeGenerator(maze_size, maze_size));
        setAlgorithm(-1)
      }

    }
    else{
      alert("Please enter a valid size between 5 and 50")
    }
    
  }


  

  // dfs = 1, bfs = 2, greedy = 3, astar = 4,

  const [tempAlgorithm, setTempAlgorithm] = useState(-1)
  const handleChooseAlgorithm = (option: any) => {
    setTempAlgorithm(option)
    console.log(option);

  }
  

  const VisualizeMaze = () => {
    if (tempAlgorithm === 1){
      setAlgorithm(tempAlgorithm);
      setSolutionKey(solutionKey+1);
    }
    else if(tempAlgorithm != -1){
      alert("Only Depth First Search have been implemented at this point in time, Please choose another algorithm")
    }
    
    console.log("VusualizeMaze wth option: ", algorithm);
  }
  





  return (
    <div className=" flex min-h-screen flex-col mx-8 min-[1000px]:mx-20 2xl:mx-48 justify-between text-text dark:text-dark-text font-Sulphur_point ">
      <div className='flex flex-row h-28 justify-between'> {/* the top navbar*/}
        <div className='flex flex-row'>
        <Image className='hidden md:block py-6 pr-3 ' src={logoTheme} alt="maze" width={80} height={80} />
        <h1 className='text-3xl m-0 md:text-7xl py-11 md:py-6 px-0 md:px-3'>MazeVisualizer</h1>
        </div>
        
        <div className=' my-6 flex flex-row align-middle justify-center'>
          <button className='fixed md:static top-28 -right-3 flex flex-row align-middle justify-center mr-2 md:mr-5 md:mt-1 w-16 h-16 border-2 md:border-0 rounded-tl-3xl rounded-bl-3xl ' onClick={toggleTheme}>
              <Image className ="p-4" src={themeIcon} alt="maze" width={100} height={100} />
          </button>
          <button className='flex flex-row align-middle justify-center bg-primary hover:bg-hover-primary rounded-lg mt-3 py-1 md:my-auto drop-shadow-xl 'onClick={() => window.location.href = 'https://github.com/Pranav-Official/maze-solver-web'}>
            <p className=' hidden md:block mt-4 ml-3 mr-2 text-xl font-bold dark:text-text' >GitHub</p>
            <Image className ="m-2 mx-5 md:py-1 md:my-3 md:mr-3" src="/github.png" alt="maze" width={30} height={30} />
          </button>
        </div>
      </div>
      <div className='flex-1 flex flex-col-reverse lg:flex-row mb-0 justify-between min-[1800px]:w-4/5 min-[1800px]:mx-auto'>{/* hero part*/}
        <div className='flex flex-col align-middle justify-center '>{/* options*/}
          <div className=''>
            <h2 className='text-2xl mt-5 lg:text-4xl xl:text-5xl '>Generate Maze</h2>
            <p className='text-base lg:text-xl xl:text-2xl font-light '>Chose a size for your maze</p>
            <div className='flex flex-row mt-5'>
              <input  className='flex flex-row align-middle justify-center text-2xl text-center bg-secondary  dark:bg-dark-secondary  rounded-xl w-36 border-2 border-primary drop-shadow-xl' type="text" placeholder="4-50" id="fname" name="fname" onChange={handleSizeChange} ></input>
              <button className='flex flex-row align-middle justify-center text-2xl bg-primary hover:bg-hover-primary dark:hover:bg-hover-primary dark:text-text rounded-xl p-3 w-36 ml-6 drop-shadow-xl' onClick={handleSubmit}  > Generate</button>
            </div>
            {/* alert('Please use smaller maze dimensions'); */}
          </div>
          <div className=' mt-14'>
            <h2 className='text-2xl lg:text-4xl xl:text-5xl'>Solving Algorithm</h2>
            <p className='text-base lg:text-xl xl:text-2xl font-light '>Chose a Algorithm which you want to use for the solution.</p>
            <div className='grid grid-cols-3 gap-3 mt-5'>
              <button className={`flex flex-row align-middle justify-center text-xs lg:text-base xl:text-xl rounded-xl p-2 drop-shadow-xl   ${tempAlgorithm=== 1 ? 'bg-primary dark:text-text' : 'bg-secondary hover:bg-hover-secondary dark:bg-dark-secondary dark:hover:bg-hover-dark-secondary'}`} onClick={() => handleChooseAlgorithm(1)}> Depth First Search</button>
              <button className={`flex flex-row align-middle justify-center text-xs lg:text-base xl:text-xl rounded-xl p-2 drop-shadow-xl   ${tempAlgorithm === 2 ? 'bg-primary dark:text-text' : 'bg-secondary hover:bg-hover-secondary dark:bg-dark-secondary dark:hover:bg-hover-dark-secondary'}`} onClick={() => handleChooseAlgorithm(2)}> Breadth First Search</button>
              <button className={`flex flex-row align-middle justify-center text-base lg:text-3xl xl:text-4xl  bg-accent hover:bg-hover-accent dark:hover:bg-hover-dark-accent dark:bg-dark-accent dark:text-text rounded-xl p-2 pt-6 xl:pt-7 row-span-2 drop-shadow-xl ${tempAlgorithm === -1 ? 'cursor-not-allowed' : ''}`} onClick={VisualizeMaze} > <p> Visualize</p></button>
              <button className={`flex flex-row align-middle justify-center text-xs lg:text-base xl:text-xl rounded-xl p-2 drop-shadow-xl   ${tempAlgorithm === 3 ? 'bg-primary dark:text-text' : 'bg-secondary hover:bg-hover-secondary dark:bg-dark-secondary dark:hover:bg-hover-dark-secondary'}`} onClick={() => handleChooseAlgorithm(3)}> Greedy Search</button>
              <button className={`flex flex-row align-middle justify-center text-xs lg:text-base xl:text-xl rounded-xl p-2 drop-shadow-xl   ${tempAlgorithm=== 4 ? 'bg-primary dark:text-text' : 'bg-secondary hover:bg-hover-secondary dark:bg-dark-secondary dark:hover:bg-hover-dark-secondary'}`} onClick={() => handleChooseAlgorithm(4)}> A* Search</button>
              
            </div>
          </div>
        </div>
        <div className=' flex-1 flex flex-row align-middle mt-5 lg:mt-px'>{/* maze canvas*/}
          <div className="aspect-square flex flex-col bg-primary mr-auto min-[1000px]:mr-0 ml-auto my-auto w-4/5 rounded-xl min-[2000px]:w-3/5 drop-shadow-xl" >
            <Canvas maze1d={maze1d} maze_size={maze_size} algorithm={algorithm} key = {solutionKey}/>
          </div>
        </div>
      </div>
      <div className=' mx-auto my-5 font-light'>{/* footer part*/}
        <p>Pranav P Prasanth | nextjs+tailwindcss</p>
        <p></p>
      </div>
    </div>
  )
}
