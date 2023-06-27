import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Results from '@/components/Results'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen items-center`}
    >
     {/* Header */}
      <Header/>
     {/* Navbar */}
      <Navbar/>
      {/* Results */}
      <Results/>

    </main>
  )
}
