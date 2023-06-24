import Image from 'next/image'
import { Inter } from 'next/font/google'
import Player from '@/components/player'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        <h1>AI Player</h1>
      </header>
      <main>
        <Player></Player>
      </main>
    </>
  )
}
