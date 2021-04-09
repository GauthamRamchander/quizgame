class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code to show a heading for showing the result of Quiz
    background("yellow")
question.hide()
textSize(20)
text("The Result Of the Quiz")
    //call getContestantInfo( ) here
  Contestant.getPlayerInfo()
    //write condition to check if contestantInfo is not undefined

    //write code to add a note here
    if(allContestants!==undefined){
      var display_answers=230
      fill ("Blue")
      textSize(20)
      text("Note**Contestants who answered correct are higlighted in green colour",130,230)
    }
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns="2"
      if (correctAns === allContestants[plr].answer)
fill("green")
else
fill("red")
display_answers+=30
textSize(20)
text(allContestants[plr].name+": "+allContestants[plr].answer,250,display_answers)
    }
  }

}
