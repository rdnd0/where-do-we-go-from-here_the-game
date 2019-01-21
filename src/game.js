'use strict'

var story = new Story();

function Game(){
  this.storyPosition = 1;
  this.stories = [];
  this.currentText;
  this.currentOpt1;
  this.currentOpt2;
  this.currentImage;
  this.images = ['images/story1.png', 'images/story2.png','images/story3.png','images/story4.png','images/story5.png','images/story6.png','images/story7.png','images/story8.png',];


  
  
  var story1 = new Story(
  'It is the FIRST day of your life, you are walking down the street, something whatever bla bla, not easy to be like you, but you are doing all right.',
  '1I have decided to choose option1 rather than number2, I think this makes sense and I hope you approve', 
  '1Hey, I have decided to choose option2 rather than number1, I think this makes sense and I hope you approve');
  
  var story2 = new Story(
  'It is the SECOND day of your life, you are walking down the street, something whatever bla bla, not easy to be like you, but you are doing all right.',
  '2I have decided to choose option1 rather than number2, I think this makes sense and I hope you approve', 
  '2Hey, I have decided to choose option2 rather than number1, I think this makes sense and I hope you approve');
  
  var story3 = new Story(
  'It is the THIRD day of your life, you are walking down the street, something whatever bla bla, not easy to be like you, but you are doing all right.',
  '3I have decided to choose option1 rather than number2, I think this makes sense and I hope you approve', 
  '3Hey, I have decided to choose option2 rather than number1, I think this makes sense and I hope you approve');

  var story4 = new Story(
    'It is the FOURTH day of your life, you are walking down the street, something whatever bla bla, not easy to be like you, but you are doing all right.',
    '4I have decided to choose option1 rather than number2, I think this makes sense and I hope you approve', 
    '4Hey, I have decided to choose option2 rather than number1, I think this makes sense and I hope you approve');

  var story5 = new Story(
    'It is the FIFTH day of your life, you are walking down the street, something whatever bla bla, not easy to be like you, but you are doing all right.',
    '5I have decided to choose option1 rather than number2, I think this makes sense and I hope you approve', 
    '5Hey, I have decided to choose option2 rather than number1, I think this makes sense and I hope you approve');

  var story6 = new Story(
    'It is the SIXTH day of your life, you are walking down the street, something whatever bla bla, not easy to be like you, but you are doing all right.',
    '6I have decided to choose option1 rather than number2, I think this makes sense and I hope you approve', 
    '6Hey, I have decided to choose option2 rather than number1, I think this makes sense and I hope you approve');

  var story7 = new Story(
    'It is the SEVENTH day of your life, you are walking down the street, something whatever bla bla, not easy to be like you, but you are doing all right.',
    '7I have decided to choose option1 rather than number2, I think this makes sense and I hope you approve', 
    '7Hey, I have decided to choose option2 rather than number1, I think this makes sense and I hope you approve');

  var End = new Story(
    'And that is it, remember to hidrate yourself and keep learning every day. Thanks for playing!'
  )



  this.stories.push(story1, story2, story3, story4, story5, story6, story7, End);
}



//the function parameter option chose should be passed in the main screen when the event listener click happens
Game.prototype.moveForward = function(optionChosen){
  var outOfBounds = this.storyPosition * 2;
  if (optionChosen === 1){
    if (outOfBounds > this.stories.length-1) {
      this.storyPosition = 'E'
    }
    else{ 
    this.storyPosition *= 2; //As there are 2 options, meaning 2 sub-stories per each story.
  }}
  else if (optionChosen === 2){
    if ((outOfBounds+1) > this.stories.length-1) {
      this.storyPosition = 'E'
    }
    else{ 
    this.storyPosition = (this.storyPosition*2)+1;}
  }

}

Game.prototype.updateStoryStep = function(){
  if (this.storyPosition === 'E'){
  this.currentText = this.stories[this.stories.length-1].text;
  this.currentImage = this.images[this.images.length-1];
  this.currentOpt1 = "";
  this.currentOpt2 = ""; 

  }
  else{ 
  this.currentImage = this.images[this.storyPosition-1];
  this.currentText = this.stories[this.storyPosition-1].text;
  this.currentOpt1 = this.stories[this.storyPosition-1].decision1;
  this.currentOpt2 = this.stories[this.storyPosition-1].decision2;
  }
}