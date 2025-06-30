# DS_EscapeRoom

# Last Will of Lord Harrington - Escape Room

Welcome to the **Last Will of Lord Harrington** – a browser-based 3D escape room puzzle game!

## What is this game?

You are the heir to Lord Harrington’s mysterious estate. To claim your inheritance, you must solve a series of riddles and puzzles hidden throughout a richly detailed 3D room. Each puzzle reveals a number, and only by collecting all the numbers and entering the correct code can you unlock the final door and win the game.

## How to Play

1. **Start the Game**  
   Open `index.html` in your browser. Read Lord Harrington’s will and click "Begin the Challenge" to enter the escape room.

2. **Explore the Room**

   - Use the on-screen arrow buttons or your keyboard:
     - **W / ↑**: Move Forward
     - **A / ←**: Turn Left
     - **S / ↓**: Move Back
     - **D / →**: Turn Right
     - **X / ●**: Stop
     - **PageUp / PageDown**: Look Up/Down
   - You can also use your mouse to interact with objects in the room.

3. **Solve the Riddles**

   - Click the letter on the table to reveal a poetic riddle.
   - Search the room for interactive objects that match the clues.
   - Interact with objects (click, hover, or solve mini-puzzles) to reveal hidden numbers.

4. **Find All the Numbers**

   - Each solved puzzle reveals a digit. You’ll need all six to unlock the final door.

5. **Enter the Code**
   - Once you have all the numbers, click the keypad on the back door.
   - Enter the 6-digit code you discovered to escape the room and win!

## Features

- Immersive 3D room rendered with HTML and CSS
- Interactive puzzles and riddles
- Keyboard and mouse navigation
- Hidden clues and mini-games
- Themed visuals and atmospheric design

## Tips

- Pay close attention to the riddles – each line is a clue!
- Some objects require clicking, others require hovering, and some are mini-games.
- If you get stuck, try interacting with everything in the room.

## Getting Started

No installation required!  
Just open `index.html` in your web browser.

---

Enjoy unraveling the secrets of Lord

# Amber's Section

# Gillian's Section

!!!!!!!!SPOILER ALERT!!!!!!!!!!!

!!! DO NOT READ UNLESS YOU GIVE UP!!!

Answers to riddle:

1. "Stone" or "cube" is the block inside the toy-box. If you click on this block, it will spin, revealing the number three.
2. The "potted thing" is the plant. If you hover over the plant's pot, the face will move revealing the number five.
3. The "vision" or "window" is the tv. If you navigate to the right channel on the tv, you will find the number one.
4. The "colors trapped" refers to the picture of the rose. If you click on this picture, it will rotate out, revealing the number eight on the wall behind it.
5. The "navigation" refers to the maze. You must take the "seeker small" (the rat) to the end of it where it will find its "sweet temptation" (the cheese). Once that is done, the number two will be revealed.
6. The "world bound in ink" and the "paper dreams" refer to the books on the bookshelf. If you hover over these books, you will find that one of them has the number four on the cover.

Once all these numbers are found, you can click on the keypad on the back door. Then you can enter the number into the input bar, and that will take you to the final screen.

# Tristan's Section

## Maze Mini-Game

I created the interactive maze mini-game featured on the left wall of the escape room. The goal is to guide the "seeker small" (the rat) through the maze to reach its "sweet temptation" (the cheese). Completing the maze reveals one of the six numbers needed to escape.

### Technical Details

- The maze is a standalone project _(built specificly for hackathon)_, built with JavaScript, HTML, and CSS, and is embedded in the escape room via an iframe.
- The maze logic includes keyboard controls for movement and collision detection for walls and the goal.
- For the hackathon, I temporarily included a "cheat" button for testing, which will be removed in the final version.

### Fun Fact

I enjoyed building the maze so much that I decided to host it as a separate project! You can try it out or view the source code here:

- [Live Maze Game](https://tristanedu.github.io/Maze/)
- [Maze Source Code](https://github.com/TristanEDU/Maze)

### Inspiration

The maze was inspired by classic puzzle games and my love for interactive challenges within games and by a video Amber sent me.

### Credits

- Huge shout out to Alexis Jimenez _(azen04)_. I could not have done this without his exstinsive help and advanced js knowledge. He spent almost Four hours trying to helping me with this.
- Shout out to Shawn Brown _(wizdomplayz)_ took 30 seconds to help fix a issue I spent 3 hours stuck on...

## TV

I developed the interactive TV puzzle located on the right wall of the escape room. Players can use the channel buttons to switch between different "channels" (embedded videos and images). The correct channel reveals one of the six numbers needed to escape.

### Technical Details

- The TV is built using HTML, CSS, and JavaScript.
- Channel buttons are implemented as clickable elements that change the `iframe` source to display different content.
- Only one specific channel displays the hidden number required for the final code.

### Inspiration

This puzzle was inspired by classic point-and-click adventure games where players must "tune" devices to the right setting to reveal clues.

### Notes

On some computers there is a issue with the tv's funtionalitly. Inparticular the issue is generaly with the channel buttons and the scroll elements of the screen. As far as we can determine this is related to lack of system resources on the users end. It works for everyone except occasionaly. This is all we can figure is the issue. Any feedback you have for us on this is quite welcome. To the best of our abbility to determine it will be functional however.

---

## Controls

I implemented the navigation controls for the escape room, allowing players to move and look around the 3D environment using both keyboard and on-screen buttons.

### Technical Details

- Supports keyboard navigation: **WASD** or **Arrow Keys** for movement, **X** or **●** to stop, and **PageUp/PageDown** to look up or down.
- On-screen buttons provide accessible controls for users on any device.
- JavaScript handles movement animations and updates the scene based on user input.
- Instructions can be toggled with the "i" key for quick reference.

### Fun Fact

The controls are designed to mimic classic 3D adventure games, making the experience intuitive for both gamers and newcomers.

### Inspiration

Inspired by classic PC adventure games and modern browser-based 3D experiences, with a focus on accessibility and ease of use.

# Lewis's Section
