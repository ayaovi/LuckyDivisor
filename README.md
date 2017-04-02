# LuckyDivisor

> *"For he who lives more lives than one more deaths than one must die."*

--*Oscar Wilde*, The Ballad of Reading Gaol and Other Poems

### Table of Contents

* [Overview](#overview)
	* [Pn Cube](#pn-cube)
	* [Player Cube](#player-cube)
* [Requirements for Local Execution](#requirements-for-local-execution)
	* [Project Hierarchy](#project-hierarchy)
		* [src/](#src)
		* [test/](#test)
		* [config/](#config)
		* [util/](#util)
		* [doc/](#doc)
* [Rules of the Game](#rules-of-the-game)
	* [Collecting Pn Cube](#collecting-pn-cube)
	* [The Race against Time](#the-race-against-time)
* [Game Controls](#game-controls)
* [Extra Features](#extra-features)
* [Dependencies](#dependencies)
* [Collaboration](#collaboration)
	* [SOLID](#solid)
	* [TDD](#tdd)
	* [Pure Functions](#pure-functions)

## Overview

LuckyDivisor is a JavaScript game that was inspired by a series of tutorials from [*The Coding Train*](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw). The game is designed to be played in a web browser. In the game, prime numbers (in the form of cubes) fall down a canvas and the player has to collect the ones that s(he) needs. Because the prime numbers and the player number are represented as cubes, the cubes in the game can be classified as either:

- Pn (prime number) Cube, or
- Player Cube.

### Pn Cube

A pn cube is a cube with special properties and features. The number on a pn cube number has to be prime and less than 10. A PnCube starts its journey at the top of the canvas and falls downward until it falls off the game canvas where it become invisible.

### Player Cube

A player cube is a cube with special properties and features. The number on a player cube is not restricted to be just a prime. In fact it could be anything between 2-99 provided its prime factors that are less than 10. A Player Cube is always a the bottom of the canvas and move sideways (i.e. LEFT and RIGHT).

[Go Back Top](#table-of-contents)

## Requirements for Local Execution

The following is not a requirement per say but a suggestion instead. In the event that you wish to download the source files and execute the game locally, it is recommened you do so through a local web server. The way to set up a local server on your machine is discussed in depth [*here*](https://github.com/processing/p5.js/wiki/Local-server). Doing it this way, you would get a better experience. However, should you decide otherwise, some features of the game may not be available to you due to the possibility of Cross Origin Request restriction.

### Project Hierarchy

The project files are organised as follow in the current version of the game.

#### src

It contains the javascript source files as well as the .html file that loads the game in the browser. Most of these source files represent a game component (e.g. Cube, Column etc...) while other represent action to be performed on game elements (e.g. CubeCollisionHandler, PnCubeMotionHandler etc...). It should also be noted that some of them are events as well. This directory also contains the index.html file that can be loaded up to play the game. With a local server running, this file is loaded automatically once you try openning navigating to the directory from the browser.

#### test

The majority of the code has been tested using a tool call [*QUnit*](https://qunitjs.com/), a javascript unit testing framework developed by jQuery foundation.

The test files are organised as per source file. As such, a file named *cubetests.js* would be testing the functionalities of a *Cube* object and so on.

Testing results can be inspected by opening up the file *index.html* in a browser. It gives you informationabout the passing and falling tests.

#### config

It contains the configuration as well as global variable definition files.

#### util

It contains the utilities files. In the attempt to avoid a very long single utility files, the utility functions have been seperated with respect to the objects that require them the most. As such we have a cube utilities file, a game utilities file etc...

#### doc

It contains a form of api documentation of the source files. The api documentation is meant to make working on the project easier. The point here being, the documentation might not look pretty but it would get you the information that you require to know about functions or classes.

This arrangement of the project files can easily change in future versions.

[Go Back Top](#table-of-contents)

## Rules of the Game

The game has but one rule. Collect as many pn cubes as possible until you either run out of life stars or get caught by the time.

### Collecting Pn Cube

In order to progress in the game, you have to collect pn cubes with numbers that correspond to the prime factors of the number inscribed on your cube (let's call it N). The following will result in penalties:
- Collecting a pn cube that is not a prime factor of N. This will result in you loosing a life stars. And should you have no life stars and commit this offence, the the game is over.
- Collecting pn that you have already collected, would result in that pn cube's number being subtracted from your total score.

### The Race against Time

Every play of the game is timed and the clock (in the top left corner of the game canvas) runs down as the play progresses. Should you get caught up by the clock (i.e. still have pn cube(s) to collect while the clock reaches "00:00"), the game is automatically over irrespective of the number of life stars you posses.

[Go Back Top](#table-of-contents)


## Game Controls

The game controls in this current version are as follow:
- LEFT ARROW to move the player cube left.
- RIGHT ARROW to move the player cube right.
- SPACE BAR to pause and resume the game.

[Go Back Top](#table-of-contents)

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

[Go Back Top](#table-of-contents)

## Dependencies

The game can be played on in the following browsers:
- Google Chrome (versions 42.0, 49.0)
- Firefox (version 45)
- Microsof Edge (version 13 and above)
- Safari (version 9.0 and above)

[Go Back Top](#table-of-contents)

## Documentation

The API documentation of the game can be found in *./doc/apidoc/*. This documentation is generted by a Java source code residing in *./doc/generator/*.

To view the game source code documentation, navigate to apidoc/ inside docs/ and load the index.html file. Again should you be running a local server as suggested earlier, the documentation page would automatically load once you navigate to apidoc/ inside doc/.

[Go Back Top](#table-of-contents)

## Collaboration

Should you have gone through the tedious reading of what LuckyDivisor is, and wish to collaborate in any way possible (and we really mean any way, even if it is just rewording some sections of this readme), please either get in touch with the project owner or request access.

Once you have been granted access to collaborate, the next thing we would kindly ask of you is to follow the [*Gitflow*](https://www.atlassian.com/git/tutorials/comparing-workflows) workflow approach. In other words has the following branches.

- *master*, where the live code resides. It always contain working code.
- *develop*, which is simply an integration of features.
- *feature*, which you would have to create unless you are working on an existing feature.
- *release*, for the releasing new versions of the game.
- *hotfix*, for fixing issues or bugs that pop up during live.

Moreover, because we always aim for writing easily testable code, we would ask of you to use of follow the following approaches.

### SOLID

The [*S.O.L.I.D*](https://github.com/bradvin/SOLID) approach helps you write testable code. 

### TDD

We would also like to use the [*TDD*](http://agiledata.org/essays/tdd.html) approach for development as much as possible. It might be difficult at the start but once you get the hang of it, it is comparable to a runaway train (i.e. easy to stop).

### Pure Functions

By definition a [*Pure Function*](https://www.sitepoint.com/functional-programming-pure-functions/), is a function that does not induce side effect into the programme flow. In other words, given the same input it would also return the same output. Because of this wonderfull garantee we would like to write pure functions when and wherever we could.

As a consequence of all of the above, everything is done through [*pull requests*](https://help.github.com/articles/creating-a-pull-request/).

Again, we are more than happy to have you collaborate with us. As such, you have our gratitude in advance.

[Go Back Top](#table-of-contents)