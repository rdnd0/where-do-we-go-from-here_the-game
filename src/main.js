'use strict'

//set up variables

var game = new Game();


var splashScreen;
var gameScreen;
var endScreen;

var mainText = document.querySelector('.maintext');
var option1Text = document.querySelector('.chooseopt1');
var option2Text = document.querySelector('.chooseopt2');
////////////////////////////DOM manipulation

//Initial DOM set up
function buildDom (html) {
  var target = document.querySelector('.container');
  target.innerHTML = html;
  return target;
}

function destroyDom(target){
  target.innerHTML = '';
}



//Build and destroy splash
function buildSplashScreen(){
  splashScreen = buildDom(
    `<h1>this could be you...</h1>

    <article>
      <p>
      This game is about making decisions, there is no time limit as I did
      not have time to code it.
      </p>
      <p>Our future is just our present plus the decisions we make.</p>
      <p>Choose wisely, enjoy and remember to donate.</p>
    </article>

    <a href="#" id="start" class="button">Let's do this</a>
    <a href="#" class="link">donate</a>`
  );

  splashScreen.querySelector('#start').addEventListener('click', startGameClick);//this is to add code to start the game

}

function destroySplashScreen(){
  destroyDom(splashScreen);
}

//Build and destroy Game screen

function buildGameScreen(){
  gameScreen = buildDom(`<h1></h1>
    <article>
            <p class= "maintext">
            It is the first day of your life, you are walking down the street, something whatever bla bla
            Ain't easy to be like you, but you are doing all right.
            </p>
            <p>What would you do?</p>
    </article>
    <div class="spacing"></div>

    <article>
        <button class="chooseopt1 btn-options">This text is to decide what happens when choosing option one. Should not be that long else is gonna be ugly.</button>
        <button class="chooseopt2 btn-options">This text is to decide what happens when choosing option one. Should not be that long else is gonna be ugly.</button>
    </article>`);


}

function destroyGameScreen(){
  destroyDom(gameScreen);
}

function startGameClick(){
  destroySplashScreen();
  buildGameScreen();
  
}

//Build and destroy End screen

function buildEndScreen(){
  endScreen = buildDom( 
  '//code for end screen');

  endScreen.querySelector('.restart').addEventListener('click', restartGame)
}

function destroyEndScreen(){
  destroyDom(endScreen);
}

function restartGame(){
  destroyEndScreen();
  buildSplashScreen();

}

//initial function to load the game
function loadGame(){
  console.log('start making some decisions');
  buildSplashScreen();
}

//initial screen set up

 //need logic here with game screen variable for the next actions
 game.updateStoryStep();
 
 mainText.innerHTML('test to see it works');
 
//  mainText.innerHTML(game.currentTxt);
 option1Text.innerHTML(game.option1Text);
 option2Text.innerHTML(game.option2Text);

mainText
option1Text
option2Text

//pressing main screen buttons


//this is so it loads game when the page is finished loading
window.addEventListener('load', loadGame());