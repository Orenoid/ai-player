import Image from 'next/image'
import { Inter } from 'next/font/google'
import Player from '@/components/player'

const inter = Inter({ subsets: ['latin'] })

export default function App() {
  return (
    <div class="flex flex-col items-center bg-[#2c2c32] min-h-screen px-44">
      <header class="flex flex-row self-start mt-16 mb-8 ml-4">
        <h1 class="text-white text-5xl">AI Player</h1>
      </header>
      <main class="w-full flex-1 overflow-auto pb-24">
        <Player className={"bg-[#171717] w-full aspect-video"}></Player>
      </main>
    </div>
  )
}
