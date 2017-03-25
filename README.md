# LuckyDivisor

> *"For he who lives more lives than one more deaths than one must die."*

--*Oscar Wilde*, The Ballad of Reading Gaol and Other Poems

## Table of Contents
[Overview](#overview)
	1 - [Pn Cube](#pn-cube)
	2 - [Player Cube](#player-cube)
[Rules of the Game](#rules-of-the-game)
	1 - [Collecting Pn Cube](#collecting-pn-cube)
	2 - [The Race against Time](#the-race-against-time)
[Extra Features](#extra-features)
[Dependencies](#dependencies)

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
The following are the cool features that can be added to the game in future version.
- Implement some sort of achievement reward.
- Have an supervising agent (SA) that controls the diversity in the pn cubes that are falling. This does not imply that the game will be rigged, but instead it will be aimed at improving player satisfaction.
- If possible have some sort of change in level as the game progresses from play to play. And eventually at some point the SA may start taking the player by suprise. For exmaple say the player sees a 2 falling and is crucially expecting a 2, the SA may initiate a new 5 to fall and merge with the already falling 2 to form a 7. Thus presenting a challenge to the player. At least I think this way the game is more fun compared to just moving around and collecting cubes that you know are coming your way. The uncertainty factor is priceless I think :).
- Add more player controls. This goes hand in hand with the previous feature. We can add a control (say "s") that speed up the falling cube (the player probably needs to achieve some level before accessing this feature). The scenario where this mau help is the following. Say you are targetting a specific cube (yet again, let's make it 2), and this cube just appear on the canvas. Because there is a possibility that it might get stolen from you, should you have the "s" control operational, you might consider using it.
- Currently at the end of the game, depending on how one gpt there, a "GAME OVER" or "TIME OUT" message is display on the canvas. The colour of this string can possibly change. Moreover, I am thinking making the message flash (i.e. on and off) instead of it being static is cooler, I mean the guy lost so let's give him comfort in his loss.
- Another feature that may go hand in hand with the one above would be covering up the cubes on the canvas with a transparent colour-ish layer before displaying the end of game message.
- Currently When the game is paused, a text message "PAUSED" is display on the canvas, we change that to an icon.
- In time we could create player journeys. More on player journey in our context can be found [*here*](http://amyjokim.com/blog/2014/04/08/the-players-journey/). I think a complement of player journey implementation would the actor journey implementation.

## Dependencies
The game can be played on in the following browsers:
- Google Chrome (versions 42.0, 49.0)
- Firefox (version 45)
- Microsof Edge (version 13 and above)
- Safari (version 9.0 and above)
