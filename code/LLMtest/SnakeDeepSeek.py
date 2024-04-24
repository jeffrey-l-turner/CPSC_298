"""
    Prompt: Write a snake game in pyhton.
"""

import time
import random
import os

# Set up the board size and initial snake position
board_width = 30
board_height = 15
snake = [(random.randint(2, board_width - 2), random.randint(2, board_height - 2))]
direction = (1, 0)  # Start moving right
food = ()

# Generate food on the board randomly
def generate_food():
    global food
    while True:
        new_food = (random.randint(1, board_width - 2), random.randint(1, board_height - 2))
        if new_food not in snake:
            food = new_food
            break

generate_food()

# Draw the current game state on the console
def draw():
    os.system('cls' if os.name == 'nt' else 'clear')  # Clear the console output
    for y in range(board_height):
        for x in range(board_width):
            if (x, y) in snake:
                print('#', end='')
            elif (x, y) == food:
                print('*', end='')
            else:
                print(' ', end='')
        print()
    print(f"Score: {len(snake) - 1}")

# Update the game state based on current inputs
def update():
    global direction, snake, food

    # Calculate new head position
    head = (snake[0][0] + direction[0], snake[0][1] + direction[1])

    # Check if game over conditions are met
    if head in snake or head[0] < 0 or head[0] >= board_width or head[1] < 0 or head[1] >= board_height:
        return False  # Game over

    # Add new head to the list of snake parts
    snake.insert(0, head)

    # Check if we've eaten food
    if head == food:
        generate_food()
    else:
        snake.pop()

    return True  # Game continues

# Change the direction of the snake based on user input
def change_direction(new_direction):
    global direction
    if (direction[0] * -1, direction[1] * -1) != new_direction:  # Can't go back on itself
        direction = new_direction

# Main game loop
while True:
    draw()
    time.sleep(0.2)
    
    if not update():
        print("Game Over!")
        break