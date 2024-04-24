"""
    Prompt: Write a snake game in pyhton.
"""

import random

class Snake:
    def __init__(self, length=3):
        self.length = length
        self.segments = [random.randint(10, 90) for _ in range(length)]
        self.direction = "right"

    def move(self):
        if self.direction == "right":
            self.segments[0] += 1
        elif self.direction == "left":
            self.segments[0] -= 1
        elif self.direction == "up":
            self.segments[1] -= 1
        elif self.direction == "down":
            self.segments[1] += 1

        return self.segments

    def display(self):
        for segment in self.segments:
            print(segment, end="")
        print()

def main():
    snake = Snake()
    while True:
        snake.move()
        if snake.length >= 100:
            snake.display()
            return 0
        else:
            return 1

if __name__ == "__main__":
    main()