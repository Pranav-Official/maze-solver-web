import { Bubblegum_Sans } from 'next/font/google'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col mx-20 2xl:mx-48 justify-between bg-background text-text font-Sulphur_point ">
      <div className='flex flex-row h-28 justify-between'> {/* the top navbar*/}
        <div className='flex flex-row'>
        <Image className=' py-6 pr-3 ' src="/mazelogo.png" alt="maze" width={80} height={80} />
        <h1 className='text-7xl py-6 px-3'>MazeVisualizer</h1>
        </div>
        <div className=' my-6'>
          <button className='flex flex-row align-middle justify-center bg-primary rounded-lg  '>
            <p className=' mt-4 ml-3 mr-2 text-xl font-bold'>GitHub</p>
            <Image className ="py-1 my-3 mr-3" src="/github.png" alt="maze" width={30} height={30} />
          </button>
        </div>
      </div>
      <div className='border-2 flex-1 flex flex-row mb-0 justify-between min-[1800px]:w-4/5 min-[1800px]:mx-auto'>{/* hero part*/}
        <div className='border-2 flex flex-col align-middle justify-center '>{/* options*/}
          <div className='border-2'>
            <h2 className='text-4xl '>Generate Maze</h2>
            <p className='text-xl font-light '>Chose a size for your maze</p>
            <div className='flex flex-row mt-5'>
              <input  className='flex flex-row align-middle justify-center text-2xl pl-14 bg-secondary rounded-xl w-36 border-2 border-primary ' type="text" placeholder="10" id="fname" name="fname"></input>
              <button className='flex flex-row align-middle justify-center text-2xl bg-primary rounded-xl p-3 w-36 ml-6 '> Generate</button>
            </div>
          </div>
          <div className='border-2 mt-14'>
            <h2 className='text-4xl '>Solving Algorithm</h2>
            <p className='text-xl font-light '>Chose a Algorithm which you want to use for the solution.</p>
            <div className='grid grid-cols-3 gap-3 mt-5'>
              <button className='flex flex-row align-middle justify-center text-base bg-secondary rounded-xl p-2 '> Depth First Search</button>
              <button className='flex flex-row align-middle justify-center text-base bg-secondary rounded-xl p-2 '> Breadth First Search</button>
              <button className='flex flex-row align-middle justify-center text-3xl bg-accent rounded-xl p-2 pt-6 row-span-2 '> Visualize</button>
              <button className='flex flex-row align-middle justify-center text-base bg-secondary rounded-xl p-2 '> Greedy Search</button>
              <button className='flex flex-row align-middle justify-center text-base bg-secondary rounded-xl p-2 '> A* Search</button>
              
            </div>
          </div>
        </div>
        <div className='border-2 flex-1 flex flex-row align-middle'>{/* maze canvas*/}
          <div className="aspect-square bg-primary mr-0 ml-auto my-auto w-4/5 rounded-xl min-[2000px]:w-3/5">
            canvas
          </div>
        </div>
      </div>
      <div className=' mx-auto my-5 font-light'>{/* footer part*/}
        <p>Made by Pranav P Prasanth</p>
      </div>
    </div>
  )
}
