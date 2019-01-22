'use strict'

var story = new Story();

function Game(playername){
  this.storyPosition = 1;
  this.stories = [];
  this.currentText;
  this.currentOpt1;
  this.currentOpt2;
  this.currentImage;
  this.images = ["images/story1.png", "images/story2.png",   "images/story3.png",  "images/story4.png",  "images/story5.png",  "images/story6.png",  "images/story7.png",  "images/story8.png",  "images/story9.png",  "images/story10.png",   "images/story11.png",  "images/story12.png",  "images/story13.png",  "images/story14.png",  "images/story15.png",  "images/story16.png",  "images/story17.png",   "images/story18.png",  "images/story19.png",  "images/story20.png",  "images/story21.png",  "images/story22.png",  "images/story23.png",  "images/story24.png",  "images/story25.png",  "images/story26.png",  "images/story27.png",  "images/story28.png",  "images/story29.png",   "images/story30.png",  "images/story31.png",   "images/story32.png",  "images/story33.png",  "images/story34.png",  "images/story35.png",  "images/story36.png",  "images/story37.png",  "images/story38.png",  "images/story39.png",  "images/story40.png",  "images/story41.png",  "images/story42.png",  "images/story43.png",  "images/story44.png",  "images/story45.png",  "images/story46.png",  "images/story47.png",  "images/story48.png",  "images/story49.png",  "images/story50.png",  "images/story51.png",  "images/story52.png",  "images/story53.png",  "images/story54.png",  "images/story55.png", "images/story56.png"];
  this.playerName = playername ;


  
  
  var story1 = new Story(
  `Oh ${this.playerName}, isn't this lovely? You feel so good. What a lovely spring day, it is sunset time. You can even hear a stream of water, birds are chirping... 
  WAAAAIT! why does that bird sound different?
  BEEEP BEEEP BEEEP BEEEP It's 7AM and your alarm clock is on fire... Crap...`,
  'I am tired, I rather go back to the sunset and sleep', 
  'I jump out of bed and rush to the shower, it is gonna be a great day (even if it does not look like it right now)');
  
  var story2 = new Story(); //this player is dead
  
  var story3 = new Story(
  'After eating some oatmeal you get out. It is a cold gray day, people in the street seem sad. After some walking, you finally arrive at IronHack. Looks like the door is slightly open and there is a dog chewing on something, too dark to know what it is. The canine is blocking your way and staring right at you.',
  'I go ahead, what is the worst thing that can happen anyways?', 
  'I am not sure about this, I rather stay here, someone will come at some point');

  var story4 = new Story();//this player is dead

  var story5 = new Story();//this player is dead

  var story6 = new Story(
    `As you enter the building the dog stares at you and kind of smiles, his name is Loki and his behavior is exemplary, phewww all is good... 
    You look at your classroom and it looks like there is no one there... Not even Mike...`,
    `I go there, I can sit for a while and cry by myself, because I don't understand anything and other personal stuff (no point in opening  that door up in here)`, 
    `I rather go to the restroom and cry, it feels more natural`);

  var story7 = new Story(
    `Darn, It's freezing out there! You heard about frostbite on TV and your paranoia is taking the best out of you, are you holding up ok?`,
    `F*ck it, I am going in, I will just take out my food in case I need to use it as distraction`, 
    `Meh I rather go home, this is not for me and I really want to keep all my toes. They make me look good with flip-flops`);

  var story8 = new Story();
  var story9 = new Story();
  var story10 = new Story();
  var story11 = new Story();
  
  var story12 = new Story(
    `The class seems to be empty at first sight, but under the table there is a lot of movement. 
    You guys are not supposed to have parties in here, specially under the table.
    Are you dreaming, why is all this happening today?`,
    `That's enough, I think I forgot something at home. Tomorrow will be another day`, 
    `The cemetery is full of brave people, but it is full of cowards as well. We are all gonna die at some point. I'm gonna check!`);

  var story13 = new Story(
    `Everything is dark and there's sound of water, where is the light. I wish I had bought those night vision glasses from amazon.`,
    `I rather go to class, crying in the bathroom is overrated`, //26
    `I really need to go, now for other reasons`); //27

  var story14 = new Story();
  var story15 = new Story();
  var story16 = new Story();
  var story17 = new Story();
  var story18 = new Story();
  var story19 = new Story();
  var story20 = new Story();
  var story21 = new Story();
  var story22 = new Story();
  var story23 = new Story();
  var story24 = new Story();
  var story25 = new Story(
    `As you come through the door you see it, all your wonderful colleagues pop out from under the table and say: "Congratulations ${this.playerName} you are so close, you are about to graduate from IronHack... Only one question to go, in which naming convention is this written? 
    camel_case 
    We need an answer is all or nothing at this point.`,
    `This is clearly camel case, I use it all the time`,
    `This is snake case and I love this notation, even if I am afraid of snakes`
  );
  var story26 = new Story();
  var story27 = new Story();
  var story28 = new Story();
  var story29 = new Story();
  var story30 = new Story();
  var story31 = new Story();
  var story32 = new Story();
  var story33 = new Story();
  var story34 = new Story();
  var story35 = new Story();
  var story36 = new Story();
  var story37 = new Story();
  var story38 = new Story();
  var story39 = new Story();
  var story40 = new Story();
  var story41 = new Story();
  var story42 = new Story();
  var story43 = new Story();
  var story44 = new Story();
  var story45 = new Story();
  var story46 = new Story();
  var story47 = new Story();
  var story48 = new Story();
  var story49 = new Story();
  var story50 = new Story();
  var story51 = new Story();
  var story52 = new Story();
  var endFaint = new Story(
    `${this.playerName}, you ain't going nowhere with that attitude! Sorry, you are out.`);
  var endDrown = new Story(
    `There's been a problem with the plumbing, there is water everywhere... Floki seems to be ok swimming around, but I do not know how to. You pass away of terrible death, suffering like ever in your life.`);
  var endBluck = new Story(
      `It is actually snake case, what were you thinking? 
      That automatically puts you back into square 1. See you in the next cohort. (Just to be clear, you will have to pay that).`);
  var endDiploma = new Story(
        'And that is it, remember to hidrate yourself and keep learning every day. Thanks for playing!');


    // for (var i = 1 ; i<=52 ; i++){
    //   this.stories.push(`story${i}`);
    // }
  this.stories.push(story1, story2, story3, story4, story5, story6, story7, story8, story9, story10, story11, story12, story13, story14, story15, story16, story17, story18, story19, story20, story21, story22, story23, story24, story25, story26, story27, story28, story29,story30, story31, story32, story33, story34, story35, story36, story37, story38, story39, story40, story41, story42, story43, story44, story45, story46, story47, story48, story49, story50, story51, story52, endFaint, endDrown, endBluck, endDiploma );
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