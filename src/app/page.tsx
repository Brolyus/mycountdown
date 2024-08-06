'use client'
import React, { useState, useEffect } from 'react'

export default function Home() {
  const targetDate = '2024-08-15T05:00:00'
  const startingDate = '2024-07-12T09:00:00'

  const calculateTimeRemainingAndElapsed = () => {
    const now = new Date().getTime()
    const targetTime = new Date(targetDate).getTime()
    const timeDifference = targetTime - now
    const startingTime = new Date(startingDate).getTime()
    const elapsedTime = now - startingTime

    if (timeDifference <= 0) {
      // La date cible est passée
      return { days: 0, hours: 0, minutes: 0, seconds: 0, daysElapsed: 0, hoursElapsed: 0, minutesElapsed: 0, secondsElapsed: 0}
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
    const daysElapsed = Math.floor(elapsedTime / (1000 * 60 * 60 * 24))
    const hoursElapsed = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutesElapsed = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60))
    const secondsElapsed = Math.floor((elapsedTime % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds, daysElapsed, hoursElapsed, minutesElapsed, secondsElapsed }
  }

  const [timer, setTimer] = useState(calculateTimeRemainingAndElapsed)
  const [toggleElapsed, setToggleElapsed] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(calculateTimeRemainingAndElapsed)
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])
  return (
    <main className="flex h-screen w-full items-center justify-center p-24 bg-black">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 ">
        <div className="font-thin italic text-orange-500 p-5 rounded-lg text-2xl w-24 h-24 flex items-center justify-center flex-col">
          <p>{toggleElapsed ? timer.daysElapsed : timer.days}</p>
          <p className="text-sm">jours</p>
        </div>
        <div className="font-thin italic text-orange-500 p-5 rounded-lg text-2xl w-24 h-24 flex items-center justify-center flex-col">
          <p>{toggleElapsed ? timer.hoursElapsed : timer.hours}</p>
          <p className="text-sm">heures</p>
        </div>
        <div className="font-thin italic text-orange-500 p-5 rounded-lg text-2xl w-24 h-24 flex items-center justify-center flex-col">
          <p>{toggleElapsed ? timer.minutesElapsed : timer.minutes}</p>
          <p className="text-sm">minutes</p>
        </div>
        <div className="font-thin italic text-orange-500 p-5 rounded-lg text-2xl w-24 h-24 flex items-center justify-center flex-col">
          <p>{toggleElapsed ? timer.secondsElapsed : timer.seconds}</p>
          <p className="text-sm">secondes</p>
        </div>
      <button onClick={() => setToggleElapsed(!toggleElapsed)} className=" bg-orange-500 text-black p-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out hover:bg-orange-600">{toggleElapsed ? "Nid d'amour" : "Déjà réalisé" }</button>
      </div>
    </main>
  )
}
