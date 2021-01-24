class Game {
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

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
     form.display();
    }
  }
  play(){
    form.hide();
    textSize(20);
    fill("black");
    text("Game Start",120,100);
    Player.getplayerinfo();
    if(allplayer!==undefined){
      var y=130;
    for(var plr in allplayer){
      if(plr==="player"+player.index){
        fill("red");

      }
      else{
        fill("black");
      }
      y=y+20;
    
      textSize(20);
      text(allplayer[plr].name+":"+allplayer[plr].distance,120,y);
    }}
    if(keyIsDown(UP_ARROW)&& player.index!=null){
      player.distance=player.distance+50;
      player.update();
    }
  }
}
