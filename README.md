# LuckyDivisor
## Overview
A game in JavaScript where prime numbers are falling and the player has to collect some of them depending on his need. The prime numbers are represented as cubes. A cube is is simply a rectangle with a number inscribed on it. The cubes in the game can be classified as either:
- Pn (prime number) Cube, or
- Player Cube.

### Pn Cube
A pn cube is a cube with special properties and features. The number on a pn cube number has to be prime and less than 10. A PnCube starts its journey at the top of the canvas and falls downward until it falls off the game canvas where it become invisible.

### Player Cube
A player cube is a cube with special properties and features. The number on a player cube is not restricted to be just a prime. In fact it could be anything between 2-99 provided it has prime factors that are less than 10. A Player Cube is always a the bottom of the canvas and move sideways (i.e. LEFT and RIGHT).

## Rules of the Game
The game has but one rule. Collect as many pn cubes as possible until you either run out of life stars or get caught by the time.

### Collecting Pn Cube
In order to progress in the game, you have to collect pn cubes with numbers that correspond to the prime factors of the number inscribed on your cube (let's call it N). The following will result in penalties:
- Colectig a pn cube that is not a prime factor of N. This will result in you loosing a life stars. And should you have no life stars and commit this offence, the the game is over.

### The Race against Time
Every play of the game is time and the clock in the top left corner of the game canvas would run down as the play orgresses. Should you get caught by the clock (i.e. still have pn cube(s) to collect while the clock reaches "00:00"), the game is automatically over independent of the number of life stars you posses.

## Extra Features

## Dependencies
The game can be played on in the following browsers:
- Google Chrome (versions 42.0, 49.0)
- Firefox (version 45)
- Microsof Edge (version 13 and above)
- Safari (version 9.0 and above)
