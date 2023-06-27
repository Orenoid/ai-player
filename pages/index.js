import Image from 'next/image'
import { Inter } from 'next/font/google'
import Player from '@/components/player'

const inter = Inter({ subsets: ['latin'] })

export default function App() {
  return (
    <div class="flex flex-col items-center bg-[#2c2c32] h-screen px-44">
      <header class="flex flex-row self-start mt-16 mb-8">
        <h1 class="text-white text-5xl">AI Player</h1>
      </header>
      <main class="bg-[#1f1f20] w-full aspect-video">
        <Player></Player>
      </main>
    </div>
  )
}
