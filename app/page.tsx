import { Bubblegum_Sans } from 'next/font/google'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col mx-20 2xl:mx-32 justify-between bg-background text-text font-Sulphur_point border-2">
      <div className='flex flex-row h-28 justify-between'> {/* the top navbar*/}
        <div className='flex flex-row'>
        <Image className=' py-6 pr-3 ' src="/mazelogo.png" alt="maze" width={80} height={80} />
        <h1 className='text-7xl py-6 px-3'>MazeVisualizer</h1>
        </div>
        <div className=' my-6'>
          <button className='flex flex-row align-middle justify-center bg-primary rounded-lg  '>
            <p className=' mt-4 ml-3 mr-2 text-lg font-bold'>GitHub</p>
            <Image className ="py-1 my-3 mr-3" src="/github.png" alt="maze" width={30} height={30} />
          </button>
        </div>
      </div>
      <div className='border-2 flex-1 mb-0'>{/* hero part*/}
        hero
      </div>
      <div className=' mx-auto my-5 font-light'>{/* footer part*/}
        <p>Made by Pranav P Prasanth</p>
      </div>
    </div>
  )
}
