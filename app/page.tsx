import { Bubblegum_Sans } from 'next/font/google'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col mx-20 2xl:mx-32 bg-background text-text font-Sulphur_point border-2">
      <div className='flex flex-row h-28 w-screen'> {/* the top navbar*/}
        <Image className=' py-6 pr-3 ' src="/mazelogo.png" alt="maze" width={80} height={80} />
        <h1 className='text-7xl py-6 px-3'>MazeVisualizer</h1>
        <div>
          <button className='flex flex-row align-middle justify-center bg-primary rounded-lg  '>
            <p className='py-4 px-2 text-lg font-bold'>GitHub</p>
            <Image className ="py-3" src="/github.png" alt="maze" width={30} height={30} />
          </button>
        </div>
      </div>
      <div>
        hero
      </div>
    </div>
  )
}
