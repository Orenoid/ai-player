import Image from 'next/image'
import { Inter } from 'next/font/google'
import Player from '../components/player'

const inter = Inter({ subsets: ['latin'] })

export default function App() {
  return (
    <div className="flex flex-col items-center bg-[#2c2c32] min-h-screen px-44">
      <header className="flex flex-row self-start mt-16 mb-8 ml-4">
        <h1 className="text-white text-5xl">AI Player</h1>
      </header>
      <main className="w-full flex-1 overflow-auto pb-24">
        <Player className={"bg-[#171717] w-full aspect-video"}></Player>
      </main>
    </div>
  )
}
