'use strict'

var story = new Story();

function Game(){
  this.storyPosition = 1;
  this.stories = [];
  this.currentText;
  this.currentOpt1;
  this.currentOpt2;


  
  
  var story1 = new Story('It is the FIRST day of your life, you are walking down the street, something whatever bla bla, not easy to be like you, but you are doing all right.','I have decided to choose option1 rather than number2, I think this makes sense and I hope you approve', 'Hey, I have decided to choose option2 rather than number1, I think this makes sense and I hope you approve');
  
  var story2 = new Story('It is the SECOND day of your life, you are walking down the street, something whatever bla bla, not easy to be like you, but you are doing all right.','I have decided to choose option1 rather than number2, I think this makes sense and I hope you approve', 'Hey, I have decided to choose option2 rather than number1, I think this makes sense and I hope you approve');
  
  var story3 = new Story('It is the THIRD day of your life, you are walking down the street, something whatever bla bla, not easy to be like you, but you are doing all right.','I have decided to choose option1 rather than number2, I think this makes sense and I hope you approve', 'Hey, I have decided to choose option2 rather than number1, I think this makes sense and I hope you approve');

  this.stories.push(story1, story2, story3);
}



//the function parameter option chose should be passed in the main screen when the event listener click happens
Game.prototype.moveForward = function(optionChosen){
  if (optionChosen === 1){
    this.storyPosition *= 2; //As there are 2 options, meaning 2 stories per each story.
  }
  else if (optionChosen === 2){
    this.storyPosition *= 2+1;
  }
  else {
    console.log('you have an error when choosing story')
  }

}

Game.prototype.updateStoryStep = function(){
  this.currentText = this.stories[this.storyPosition-1].text;
  this.currentOpt1 = this.stories[this.storyPosition-1].decision1;
  this.currentOpt2 = this.stories[this.storyPosition-1].decision2;
  
}