"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NumberGuessingGame() {
    const [targetNumber, setTargetNumber] = useState<number>(0)
    const [guess, setGuess] = useState<string>('')
    const [feedback, setFeedback] = useState<string>('')
    const [attempts, setAttempts] = useState<number>(0)
    const [gameWon, setGameWon] = useState<boolean>(false)

    useEffect(() => {
        // Generate a random number between 1 and 100 when the component mounts
        setTargetNumber(Math.floor(Math.random() * 100) + 1)
    }, [])

    const handleGuess = (e: React.FormEvent) => {
        e.preventDefault()
        const numberGuess = parseInt(guess)
        setAttempts(attempts + 1)

        if (isNaN(numberGuess)) {
            setFeedback('Please enter a valid number.')
        } else if (numberGuess === targetNumber) {
            setFeedback(`Congratulations! You guessed the number in ${attempts + 1} attempts.`)
            setGameWon(true)
        } else if (numberGuess < targetNumber) {
            setFeedback('Too low. Try again!')
        } else {
            setFeedback('Too high. Try again!')
        }

        setGuess('')
    }

    const resetGame = () => {
        setTargetNumber(Math.floor(Math.random() * 100) + 1)
        setGuess('')
        setFeedback('')
        setAttempts(0)
        setGameWon(false)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4 text-center">Number Guessing Game</h1>
                <p className="mb-4 text-center">Guess a number between 1 and 100</p>

                <form onSubmit={handleGuess} className="space-y-4">
                    <Input
                        type="number"
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                        placeholder="Enter your guess"
                        min="1"
                        max="100"
                        required
                        className="w-full"
                    />
                    <Button type="submit" className="w-full" disabled={gameWon}>
                        Submit Guess
                    </Button>
                </form>

                {feedback && (
                    <p className="mt-4 text-center font-semibold"
                       style={{ color: gameWon ? 'green' : 'blue' }}>
                        {feedback}
                    </p>
                )}

                {gameWon && (
                    <Button onClick={resetGame} className="w-full mt-4">
                        Play Again
                    </Button>
                )}

                <p className="mt-4 text-center">Attempts: {attempts}</p>
            </div>
        </div>
    )
}