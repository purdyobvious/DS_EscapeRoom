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
     - **Space / ●**: Stop
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

## What I Built

- I created the initial scene that included the ceiling, floors, and walls using mainly HTML/CSS, which generated a lot of interesting facets of learning.

- I made the table and learned a lot about rendering another element from an outside document (the scene I originally made the table in was a different scale than the one I created the 3d room in). Scale and size changes were a must in this along with the various positioning elements that I mention as far as research.

- I learned how to add a clicked change class to an element and made it work with the help of Alexis because I wasn't sure what broke during a merge, but the JavaScript flows perfectly. This was applied to `letter`, `letter2`, the block, and toybox elements.

- I created the rolling block. This was a challenge that later helped me make the toybox to place the block into. I never realized how difficult it might be to create a 3d element in a 2d based site, but it seems my team and I rose to those occasions quite well. We left it roll to its position to appear as if a toddler was throwing a block since 3/4 of our teammates have children.

- The sidewalk was painstakingly created and moved into place, too. I never realized the various challenges that a 3d room would create with design and adding elements. Adding any element to the scene shifts the items all over, leading to minute and tedious adjustments that sometimes were a hoot to overcome!

- The trees were fun to create, with learning a repeat to make several trees line the sidewalk. They had to each be moved into position and shifted around as needed. This was exiting to see things come to life as the progress unfolded. At one point, we had actually talked about removing the trees and the sidewalk, but we kept them anyways.

- The welcome mat was fun and interesting, breaking the outside view all the more, making the humerous laughs and snorts that emanated from us make it all the more enjoyable, while we sometimes struggled to piece this together due to our limited JavaScript experience.

- Through this, I spent hours learning about how to properly transform elements using `RotateX()`, `rotateY()`, `rotateZ()`, `translateX()`, `translateY()`, `translateZ()`, `top`, `left`, `absolute`, and `relative` positioning. Styling elements was interesting in a 3d space. The toybox was designed to the wishes of my daughter with the vibrant pink and dark black with the blue text shadow. She requested that the rose be added into the scene, too.

---

I am profoundly humbled by my team's great work ethic, their drive to enjoy this along with me, and the great work that each of them have contributed to our experience. Tristan is the github repo king, helping us all make sure that we didn't have to revert like Eric had to help me do after I forgot to switch back to a branch before making changes. His maze is one for the masses to struggle getting to the end of! His TV is interesting, too. Gillian's artistry is impressive, and Lewis's creations for the start and end scenes all added to a scene that not only includes all of our tastes, but allows us to add our nerdy sides.

At this point, I am looking forward to the feedback more than battling or first place, though it would be awesome to hear that we placed somewhere in the running, too. I've had so much fun creating and demonstrating what we were capable of, watching others rise to meet my crazy scene and excelling, too!

# Gillian's Section

What I Built
I built the bookshelf, the rose picture, the plant, and the doors. I also wrote the riddle.

Technical Details

!!!!!!!!!!!SPOILER ALERT!!!!!!!!!!!!!!

!!! DO NOT READ UNLESS YOU GIVE UP!!!

The books on the bookshelf pull out on hover. One of the covers has a four on it.

The rose picture rotates when clicked, revealing the number eight on the wall behind it.

The plant has a hover function on its pot. The number five is hidden inside.

The front door rotates open on hover, and the backdoor had a keypad that once clicked reveals a popup that allows you to input the secret code.

Answers to riddle:

Clue 1. Refers to the block inside the toybox.
Clue 2. Refers to the plant
Clue 3. Refers to the tv
Clue 4. Refers to the picture of the rose.
Clue 5. Refers to the maze
Clue 6. Refers to the bookshelf.

The final answer is 351824

Once all these numbers are found, you can click on the keypad on the back door. Then you can enter the number into the input bar, and that will take you to the final screen.

Fun Fact
The books are all of our favorites!

All the Javascript I used in this project, I learned specifically for this project. I did not know any of it beforehand.

# Tristan's Section

Working on this project really pushed me to learn DOM manipulation and JavaScript fundamentals. While I’m still building my understanding of the basics, I was able to get things working through lots of Googling, MDN docs, YouTube tutorials, trial and error, and some helpful ChatGPT explanations when I got stuck.

I would also like to note that as of right now the project is not mobile friendly...

### Credits

I want to give a HUGE shoutout to my various teammates. We would not have gotten to this point without each of them...

- Amber really set the scene and then was able to manage and help with all of the 3D stuff _(which is good because my brain still hurts from trying to understand how axis changes when you are on one wall as compared to another wall or the floor)_
- Gillian really brought in a ton of technical detail and precision as well as applying her wonderful creative design skill. Really taking this from something that otherwise would have been clunky and kinda bland and really adding life and pop, as well as, doing a killer job setting up the riddle and helping to direct the entire puzzle system.
- Lewis did a amazing job on the start and end screens and really helped us out by acting as our task manager setting up a entire tracking system on monday.com which was indefinitely helpful.
- And Finally I want to say a huge thanks to Alexis Jimenez who spent over almost 10 hours of his time helping us with JS issues and we would all like him to be considered a honorary teammate!

## Maze Mini-Game

I created the interactive maze mini-game featured on the left wall of the escape room. The goal is to guide the "seeker small" (the rat) through the maze to reach its "sweet temptation" (the cheese). Completing the maze reveals one of the six numbers needed to escape.

### Technical Details

- The maze is a standalone project (built specifically for the hackathon) using JavaScript, HTML, and CSS, and is embedded in the escape room via an iframe.
- The maze logic includes keyboard controls for movement and collision detection for walls and the goal.
- For the hackathon, I temporarily included a "cheat" button for testing, which will be removed in the final version.

### Fun Fact

I enjoyed building the maze so much that I decided to host it as a separate project! You can try it out or view the source code here:

- [Live Maze Game](https://tristanedu.github.io/Maze/)
- [Maze Source Code](https://github.com/TristanEDU/Maze)

### Inspiration

The maze was inspired by classic puzzle games, my love for interactive challenges, and a video Amber sent me.

### Credits

- Huge shout out to Alexis Jimenez (_azen04_) for his extensive help and advanced JS knowledge—he spent almost four hours helping me debug!
- Thanks to Shawn Brown (_wizdomplayz_) who fixed an issue in 30 seconds that I’d been stuck on for three hours.

---

## TV

I developed the interactive TV puzzle on the right wall of the escape room. Players use the channel buttons to switch between different "channels" (embedded videos and images). The correct channel reveals one of the six numbers needed to escape.

### Technical Details

- The TV is built using HTML, CSS, and JavaScript.
- Channel buttons are clickable elements that change the `iframe` source to display different content.
- Only one specific channel displays the hidden number required for the final code.

### Inspiration

This puzzle was inspired by classic point-and-click adventure games where players must "tune" devices to the right setting to reveal clues.

### Notes / Problems

- On some computers, there are issues with the TV’s functionality—mainly with the channel buttons and scroll elements. We think this is related to low system resources, but it’s rare and hard to reproduce. Any feedback is welcome!
- Sometimes, after activating the popup for the door code, the TV controls stop working. If this happens, close the popup and reload the browser window. We haven’t found a solution yet.

---

## Controls

I implemented the navigation controls for the escape room, allowing players to move and look around the 3D environment using both keyboard and on-screen buttons.

### How They Work

- **Keyboard Controls:**  
  The script listens for `keydown` events. When a movement key (W/A/S/D or Arrow keys) is pressed, it calls `startMovement(type)`, updating the `.scene` element’s class to trigger CSS animations for movement or turning. Pressing Space or Escape calls `stopMovement()`, resetting the scene to a neutral state.

- **On-Screen Buttons:**  
  Each movement button in the `#controls` div has a `data-move` attribute. Clicking a button calls either `startMovement(type)` or `stopMovement()`, providing the same effect as the keyboard controls.

- **Perspective/View Controls:**  
  The "Look Up" and "Look Down" buttons, as well as the PageUp/PageDown keys, adjust the camera’s vertical position by changing the `perspectiveOrigin` and `transform` CSS properties on the `<body>`, using the `updateView()` function.

- **Focus Handling:**  
  The script ensures the window stays focused for keyboard input by refocusing on load and on click.

- **Active Feedback:**  
  When a control is active, a dynamic CSS style is injected to visually highlight the active button.

**In summary:**  
The JavaScript acts as a bridge between user input (keyboard or mouse) and the visual state of the 3D room, updating classes and styles to animate movement, adjust perspective, and provide feedback, all while keeping the controls accessible.

### Technical Details

- Supports keyboard navigation: **WASD** or **Arrow Keys** for movement, **X** or **●** to stop, and **PageUp/PageDown** to look up or down.
- On-screen buttons provide accessible controls for users on any device.
- JavaScript handles movement animations and updates the scene based on user input.
- Instructions can be toggled with the "i" key for quick reference.

### Fun Fact

The controls are designed to mimic classic 3D adventure games, making the experience intuitive for both gamers and newcomers.

### Inspiration

Inspired by classic PC adventure games and modern browser-based 3D experiences, with a focus on accessibility and ease of use.

### Notes / Problems

- We had difficulty with the view being weird for different screen sizes and the way it loaded, so I implemented the look up and down feature. If the perspective is off and you can’t see the on-screen controls, use the PgUp and PgDn keys to adjust the view.
- Some laptops have issues with the controls glitching, likely due to low system resources. With limited JS knowledge and time, we couldn’t fully troubleshoot this.

# Lewis's Section

Contributions:

- Start screen, end screen CSS, minor JS, and HTML with hooks.
- Created job board using monday.com for project management and follow ups.
- Created GITHUB repository and helped educated fellow teammates.
- Collaborated on ideas and held a compassionate and positive attitude.
