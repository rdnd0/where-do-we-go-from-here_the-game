# where-do-we-go-from-here_the-game

## Description
This is a game based in life, about making decisions, about moving forward, about having fun.
There is a story and you have to choose between options, based on your decisions different options will appear.


## MVP (DOM - CANVAS)
DOM - basic screen, no drawings only text. 2 options to choose from in the screen. There will be sections in total (main text, text after choosing form main text1, text after choosing from main text 2, end text screen).


## Backlog
  - More levels
  - Drawings per sections
  - Common story points (different answers can end up in the same point)
  - Background music
  - Dynamic effects on buttons


## Data structure

### main.js
  - buildDom()
  - buildSplash()
  - destroySplash()
  - buildGame()
  - destroyGame()
  - buildGameOver()
  - destroyGameOver()
  

### game.js
  - startGame()
  - showStoryStep()
  - storyMoveForward()

### story.js
  - mainText
  - option1
  - option2
  - image (not for MVP)
  - object for stories and options
  - chooseOption1()
  - chooseOption2()


## States y States Transitions
Definition of the different states and their transition (transition functions)
```javascript
  - splashScreen()
  - destroyGameOver()
  - buildSplash()
  - addEventListener(startGame)
  
  
- starGame()
  - destroySplash()
  - create new Game()
  - game.start()
  
  
- gameOver()
  - destroyGame()
  - buildGameOver()
  - addEventListener(starGame) 
```


## Task
  - Define structure
  - Create HTML file
  - Create CSS file
  - Create Splash screens
  - Create main.js file
  - Create game.js file
  - Create story.js file
  - Write stories with options


## Links


### Trello
[Link url](https://trello.com/b/1vWVn3q6/backlog)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/rdnd0/where-do-we-go-from-here_the-game/)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
