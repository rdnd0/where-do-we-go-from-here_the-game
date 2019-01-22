"use strict";

//set up variables

function main() {
  var splashScreen;
  var gameScreen;
  var endScreen;
  var img;
  var mainText;
  var option1Text;
  var option2Text;
  var endText;
  var endImg;
  var playerName;
  ////////////////////////////DOM manipulation

  //Initial DOM set up
  function buildDom(html) {
    var target = document.querySelector(".container");
    target.innerHTML = html;
    return target;
  }

  function destroyDom(target) {
    target.innerHTML = "";
  }

  //Build and destroy splash
  function buildSplashScreen() {
    splashScreen = buildDom(
      `<h1>Hola amig@!</h1>
      <p>First things first,  what is your name?</p>
      <input type ='text' id='name' required>
      <div class="spacing"></div>
      <article>
      <p>
      This game is about making decisions, there is no time limit as I did
      not have time to code it.
      </p>
      <p>Remember: the future is just our present plus the decisions we make.</p>
      <p>Choose wisely, enjoy and remember to donate.</p>
      </article>
      
      <a href="#" id="start" class="button">Let's do this</a>
      <a href="https://www.linkedin.com/in/davidredondo83/" target="_blank" class="link">donate</a>`
    );

    playerName = document.querySelector("#name");

    splashScreen.querySelector("#start").addEventListener("click", function() {
      startGameClick(playerName.value);
    }); //this is to add code to start the game
  }

  function destroySplashScreen() {
    destroyDom(splashScreen);
  }

  //Build and destroy Game screen

  function buildGameScreen(playerName) {
    gameScreen = buildDom(`
      <img src="" class="image"> 
      <div class="spacing"></div> 
      <article>
      <p class= "maintext">
      It is the first day of your life, you are walking down the street, something whatever bla bla
      Ain't easy to be like you, but you are doing all right.
      </p>
      <p>What do you do?</p>
      </article>
      <div class="spacing"></div>
      
      <article>
      <button class="chooseopt1 btn-options">This text is to decide what happens when choosing option one. Should not be that long else is gonna be ugly.</button>
      <button class="chooseopt2 btn-options">This text is to decide what happens when choosing option one. Should not be that long else is gonna be ugly.</button>
      </article>`);

    var game = new Game(playerName);
    game.updateStoryStep();
    game.storyPosition = 1;
    mainText = gameScreen.querySelector(".maintext");
    option1Text = gameScreen.querySelector(".chooseopt1");
    option2Text = gameScreen.querySelector(".chooseopt2");
    img = gameScreen.querySelector(".image");

    img.src = game.currentImage;
    mainText.innerText = game.currentText;
    option1Text.innerText = game.currentOpt1;
    option2Text.innerHTML = game.currentOpt2;

    option1Text.addEventListener("click", function() {
      whereDoWeGoFromHere(1, game);
    });
    option2Text.addEventListener("click", function() {
      whereDoWeGoFromHere(2, game);
    });
  }

  function destroyGameScreen() {
    destroyDom(gameScreen);
  }

  function startGameClick(playerName) {
    destroySplashScreen();
    buildGameScreen(playerName);
  }

  function whereDoWeGoFromHere(option, game) {
    option === 1 ? game.moveForward(1) : game.moveForward(2);
    if (game.storyPosition === "E") {
      destroyGameScreen();
      buildEndScreen();
      game.updateStoryStep();
      endText = endScreen.querySelector(".maintext");
      endImg = endScreen.querySelector(".image");
      endImg.src = game.currentImage;
      endText.innerText = game.currentText;
    } else if (game.storyPosition ===  2 || game.storyPosition === 15 || game.storyPosition === 24 ) {//end faint
      destroyGameScreen();
      buildEndScreen();
      endText = endScreen.querySelector(".maintext");
      endImg = endScreen.querySelector(".image");
      endImg.src = game.images[7]//need to select image for faint end
      endText.innerText = game.stories[7].text;//need to select text for faint end
    } else if (game.storyPosition === 14) {
      console.log('back to story 6')
      game.storyPosition = 6;
      game.updateStoryStep();
      mainText.innerText = game.currentText;
      option1Text.innerText = game.currentOpt1;
      option2Text.innerHTML = game.currentOpt2;
    } else if (game.storyPosition === 26) {
      console.log('back to story 12')
      game.storyPosition = 12;
      game.updateStoryStep();
      mainText.innerText = game.currentText;
      option1Text.innerText = game.currentOpt1;
      option2Text.innerHTML = game.currentOpt2;
    } 
    else if (game.storyPosition === 27) {
      //code for drowming
      console.log("drowming end");
    }
    else if (game.storyPosition === 50) {
      //code for end 3, try again next time
      console.log('try again next time');
    }
    else if (game.storyPosition === 51) {
      console.log('well done, diploma');
    }
    else {
      game.updateStoryStep();
      img.src = game.currentImage;
      mainText.innerText = game.currentText;
      option1Text.innerText = game.currentOpt1;
      option2Text.innerHTML = game.currentOpt2;
    }
  }

  //Build and destroy End screen

  function buildEndScreen() {
    endScreen = buildDom(
      `<img src="" class="image"> 
      <div class="spacing"></div> 
      <article>
              <p class= "maintext">
              This is the end, my only friend, the end, beautiful friend, the end, the end, theeeeee eeeeeendddd...
              </p>
              <p>.......................</p>
              <p>Thanks for playing</p>
      </article>
      <div class="spacing"></div>
  
      <article>
      <a href="#" id="restart" class="button">Restart</a>
      </article>`
    );

    endScreen.querySelector("#restart").addEventListener("click", restartGame);
  }

  function destroyEndScreen() {
    destroyDom(endScreen);
  }

  function restartGame() {
    destroyEndScreen();
    buildSplashScreen();
  }

  //initial function to load the game
  function loadGame() {
    buildSplashScreen();
  }

  loadGame();
}

//this is so it loads game when the page is finished loading
window.addEventListener("load", main);
