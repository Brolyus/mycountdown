'use client'
import React, { useState, useEffect } from 'react'

export default function Home() {
  const targetDate = '2024-08-15T07:00:00'
  const calculateTimeRemaining = () => {
    const now = new Date().getTime()
    const targetTime = new Date(targetDate).getTime()
    const timeDifference = targetTime - now

    if (timeDifference <= 0) {
      // La date cible est passée
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  }

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining)
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])
  return (
    <main className="flex h-screen w-full items-center justify-center p-24 bg-black">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 ">
        <div>
          <p className="animate-flicker font-thin italic text-orange-500 p-5 rounded-lg text-2xl w-24 h-24 flex items-center justify-center">{timeRemaining.days}</p>
          {/* <p className='text-2xl font-thin italic rounded-lg'>Jours</p> */}
        </div>
        <div className="animate-flicker font-thin italic text-orange-500 p-5 rounded-lg text-2xl w-24 h-24 flex items-center justify-center">
          <p>{timeRemaining.hours}</p>
          {/* <p className='text-2xl font-thin italic rounded-lg'> Heures</p> */}
        </div>
        <div className="animate-flicker font-thin italic text-orange-500 p-5 rounded-lg text-2xl w-24 h-24 flex items-center justify-center">
          <p>{timeRemaining.minutes}</p>
          {/* <p className="text-2xl font-thin italic rounded-lg"> Minutes</p> */}
        </div>
        <div className="animate-flicker font-thin italic text-orange-500 p-5 rounded-lg text-2xl w-24 h-24 flex items-center justify-center">
          <p>{timeRemaining.seconds}</p>
          {/* <p className="text-2xl font-thin italic rounded-lg">Secondes</p> */}
        </div>
      </div>
    </main>
  )
}
