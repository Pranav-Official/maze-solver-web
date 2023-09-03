import { Bubblegum_Sans } from 'next/font/google'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row bg-background text-text ">
      <div className='flex flex-row h-28 w-screen'>
        <Image className='ml-32 py-7 px-3' src="/mazelogo.png" alt="maze" width={80} height={80} />
        <h1 className='text-7xl py-5 px-3'>MazeVisualizer</h1>
        <button className='flex flex-row align-middle justify-center bg-primary my-7 px-4 rounded-lg mr-32 ml-auto'>
          <p className='py-4 px-2 font-Poppins'>GitHub</p>
          <Image className ="py-3" src="/github.png" alt="maze" width={30} height={30} />
        </button>
      </div>
    </main>
  )
}
