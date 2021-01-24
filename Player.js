class Player {
  constructor(){
    this.index=null;
    this.name=null;
    this.distance=0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  // static functions are those functions which can be called without creating the object of the class.
  // we can call this function directly with the name of the class.
 static getplayerinfo(){
   var playerinforef=database.ref('players');
   playerinforef.on("value",(data)=>{
     allplayer=data.val();
   })
 }
}
