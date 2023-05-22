'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [test, setTest] = useState(4)

  const handleValueChange = () => {
    if (test > 16) {
      setTest(4)
      console.log(test)
    } else {
      setTest(test + 1)
      console.log(test)
    }
  }

  return (
    <main className="grid grid-cols-8 gap-4 p-60 justify-center">
      <h1 className="text-white text-center font-bold text-2xl pt-5 col-span-8 pb-3">
        HAY DAY HOJE??
      </h1>
      <button className="bg-green-400 rounded-md p-10 flex items-center justify-center col-span-1 col-start-4 hover:bg-green-500">
        <Link href="https://hayday.com" target="_blank">
          Sim! 😃
        </Link>
      </button>
      {test >= 5 && <div className="col-span-1"></div>}
      {test >= 6 && <div className="col-span-1"></div>}
      {test >= 7 && <div className="col-span-1"></div>}
      {test >= 8 && <div className="col-span-1"></div>}
      {test >= 9 && <div className="col-span-1"></div>}
      {test >= 10 && <div className="col-span-1"></div>}
      {test >= 11 && <div className="col-span-1"></div>}
      {test >= 12 && <div className="col-span-1"></div>}
      {test >= 13 && <div className="col-span-1"></div>}
      {test >= 14 && <div className="col-span-1"></div>}
      {test >= 15 && <div className="col-span-1"></div>}
      {test >= 16 && <div className="col-span-1"></div>}
      {test >= 17 && <div className="col-span-1"></div>}
      {test >= 18 && <div className="col-span-1"></div>}
      {test >= 19 && <div className="col-span-1"></div>}
      <button
        onClick={() => handleValueChange()}
        className={`bg-red-400 rounded-md p-10 flex items-center justify-center col-span-1 hover:bg-red-500`}
      >
        Não 😐
      </button>
    </main>
  )
}
