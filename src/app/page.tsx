'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [test, setTest] = useState(0)

  const handleValueChange = () => {
    if (test > 8) {
      setTest(0)
    } else {
      setTest(test + 1)
    }
  }

  return (
    <main className="grid grid-cols-8 gap-4 p-60 justify-center">
      <h1 className="text-white text-center font-bold text-2xl pt-5 col-span-8 pb-3">
        HAY DAY HOJE??
      </h1>
      <button className="bg-green-400 rounded-md p-10 flex items-center justify-center col-start-4 col-span-1 hover:bg-green-500">
        <Link href="https://hayday.com" target="_blank">
          Sim! 😃
        </Link>
      </button>
      <button
        onClick={() => handleValueChange()}
        className={`bg-red-400 rounded-md p-10 flex items-center justify-center col-span-1 col-start-${test} hover:bg-red-500`}
      >
        Não 😐
      </button>
    </main>
  )
}
