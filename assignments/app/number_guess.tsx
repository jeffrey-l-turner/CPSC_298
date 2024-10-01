'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { motion, AnimatePresence } from "framer-motion"

type Difficulty = 'easy' | 'medium' | 'hard'

const difficultyRanges: Record<Difficulty, { max: number, attempts: number }> = {
    easy: { max: 50, attempts: 10 },
    medium: { max: 100, attempts: 7 },
    hard: { max: 200, attempts: 5 }
}

export default function NumberGuessingGame() {
    const [difficulty, setDifficulty] = useState<Difficulty>('medium')
    const [targetNumber, setTargetNumber] = useState<number>(0)
    const [guess, setGuess] = useState<string>('')
    const [feedback, setFeedback] = useState<string>('')
    const [attempts, setAttempts] = useState<number>(0)
    const [gameWon, setGameWon] = useState<boolean>(false)

    const generateNumber = useCallback(() => {
        return Math.floor(Math.random() * difficultyRanges[difficulty].max) + 1
    }, [difficulty])

    useEffect(() => {
        setTargetNumber(generateNumber())
    }, [difficulty, generateNumber])

    const handleGuess = (e: React.FormEvent) => {
        e.preventDefault()
        const numberGuess = parseInt(guess)
        setAttempts(prev => prev + 1)

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
        setTargetNumber(generateNumber())
        setGuess('')
        setFeedback('')
        setAttempts(0)
        setGameWon(false)
    }

    const attemptsLeft = difficultyRanges[difficulty].attempts - attempts
    const progressPercentage = (attempts / difficultyRanges[difficulty].attempts) * 100

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-lg w-96"
            >
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Number Guessing Game</h1>

                <Select onValueChange={(value: Difficulty) => setDifficulty(value)} value={difficulty}>
                    <SelectTrigger className="w-full mb-4">
                        <SelectValue placeholder="Select Difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="easy">Easy (1-50)</SelectItem>
                        <SelectItem value="medium">Medium (1-100)</SelectItem>
                        <SelectItem value="hard">Hard (1-200)</SelectItem>
                    </SelectContent>
                </Select>

                <p className="mb-4 text-center text-gray-600">
                    Guess a number between 1 and {difficultyRanges[difficulty].max}
                </p>

                <form onSubmit={handleGuess} className="space-y-4">
                    <Input
                        type="number"
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                        placeholder="Enter your guess"
                        min="1"
                        max={difficultyRanges[difficulty].max}
                        required
                        className="w-full"
                        aria-label="Your guess"
                    />
                    <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600" disabled={gameWon}>
                        Submit Guess
                    </Button>
                </form>

                <AnimatePresence>
                    {feedback && (
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className={`mt-4 text-center font-semibold ${gameWon ? 'text-green-500' : 'text-blue-500'}`}
                        >
                            {feedback}
                        </motion.p>
                    )}
                </AnimatePresence>

                {gameWon && (
                    <Button onClick={resetGame} className="w-full mt-4 bg-green-500 hover:bg-green-600">
                        Play Again
                    </Button>
                )}

                <div className="mt-6">
                    <p className="text-center text-gray-600 mb-2">Attempts left: {attemptsLeft}</p>
                    <Progress value={progressPercentage} className="w-full" />
                </div>
            </motion.div>
        </div>
    )
}