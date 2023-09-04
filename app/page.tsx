"use client";
import maze_logo from "../public/mazelogo.png"
import maze_logo_dark from "../public/mazelogo-dark.png"
import moon_icon from "../public/moon-icon.png"
import sun_icon from "../public/sun-icon.png"

import { Bubblegum_Sans } from 'next/font/google'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {

  const [theme, setTheme] = useState('light')
  const [themeIcon, setThemeIcon] = useState(moon_icon)
  const [logoTheme, setLogoTheme] = useState(maze_logo)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      setThemeIcon(sun_icon)
      setLogoTheme(maze_logo_dark)
    } else {
      document.documentElement.classList.remove('dark')
      setThemeIcon(moon_icon)
      setLogoTheme(maze_logo)
    }
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





  return (
    <div className=" flex min-h-screen flex-col mx-8 min-[1000px]:mx-20 2xl:mx-48 justify-between text-text dark:text-dark-text font-Sulphur_point ">
      <div className='flex flex-row h-28 justify-between'> {/* the top navbar*/}
        <div className='flex flex-row'>
        <Image className='collapse md:visible py-6 pr-3 ' src={logoTheme} alt="maze" width={80} height={80} />
        <h1 className='text-4xl md:text-7xl py-11 md:py-6 px-1 md:px-3'>MazeVisualizer</h1>
        </div>
        
        <div className=' my-6 flex flex-row align-middle justify-center'>
          <button className='fixed md:static top-28 -right-3 flex flex-row align-middle justify-center mr-2 md:mr-5 md:mt-1 w-16 h-16 border-2 md:border-0 rounded-tl-3xl rounded-bl-3xl ' onClick={toggleTheme}>
              <Image className ="p-4" src={themeIcon} alt="maze" width={100} height={100} />
          </button>
          <button className='flex flex-row align-middle justify-center bg-primary rounded-lg mt-3 py-1 md:my-auto drop-shadow-xl '>
            <p className=' collapse md:visible mt-4 ml-3 mr-2 text-xl font-bold dark:text-text' >GitHub</p>
            <Image className ="m-2 md:py-1 md:my-3 md:mr-3" src="/github.png" alt="maze" width={30} height={30} />
          </button>
        </div>
      </div>
      <div className='flex-1 flex flex-col lg:flex-row mb-0 justify-between min-[1800px]:w-4/5 min-[1800px]:mx-auto'>{/* hero part*/}
        <div className='flex flex-col align-middle justify-center '>{/* options*/}
          <div className=''>
            <h2 className='text-2xl lg:text-4xl xl:text-5xl '>Generate Maze</h2>
            <p className='text-base lg:text-xl xl:text-2xl font-light '>Chose a size for your maze</p>
            <div className='flex flex-row mt-5'>
              <input  className='flex flex-row align-middle justify-center text-2xl pl-14 bg-secondary  dark:bg-dark-secondary  rounded-xl w-36 border-2 border-primary drop-shadow-xl' type="text" placeholder="10" id="fname" name="fname"></input>
              <button className='flex flex-row align-middle justify-center text-2xl bg-primary dark:text-text rounded-xl p-3 w-36 ml-6 drop-shadow-xl' > Generate</button>
            </div>
          </div>
          <div className=' mt-14'>
            <h2 className='text-2xl lg:text-4xl xl:text-5xl'>Solving Algorithm</h2>
            <p className='text-base lg:text-xl xl:text-2xl font-light '>Chose a Algorithm which you want to use for the solution.</p>
            <div className='grid grid-cols-3 gap-3 mt-5'>
              <button className='flex flex-row align-middle justify-center text-xs lg:text-base xl:text-xl bg-secondary dark:bg-dark-secondary rounded-xl p-2 drop-shadow-xl'> Depth First Search</button>
              <button className='flex flex-row align-middle justify-center text-xs lg:text-base xl:text-xl bg-secondary dark:bg-dark-secondary rounded-xl p-2 drop-shadow-xl'> Breadth First Search</button>
              <button className='flex flex-row align-middle justify-center text-base lg:text-3xl xl:text-4xl bg-accent dark:bg-dark-accent dark:text-text rounded-xl p-2 pt-6 xl:pt-7 row-span-2 drop-shadow-xl'> Visualize</button>
              <button className='flex flex-row align-middle justify-center text-xs lg:text-base xl:text-xl bg-secondary dark:bg-dark-secondary rounded-xl p-2 drop-shadow-xl'> Greedy Search</button>
              <button className='flex flex-row align-middle justify-center text-xs lg:text-base xl:text-xl bg-secondary dark:bg-dark-secondary rounded-xl p-2 drop-shadow-xl'> A* Search</button>
              
            </div>
          </div>
        </div>
        <div className=' flex-1 flex flex-row align-middle mt-5 lg:mt-px'>{/* maze canvas*/}
          <div className="aspect-square flex flex-col bg-primary mr-auto min-[1000px]:mr-0 ml-auto my-auto w-4/5 rounded-xl min-[2000px]:w-3/5 drop-shadow-xl" id='maze'>
            <canvas className='bg-secondary m-2 md:m-3 2xl:m-4 flex-1 rounded-md ' id='maze'></canvas>
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
