//Declaring Initial Player's Health 
var player1Health=100;
var player2Health =100;

let roundCounter=0;

//let player1Score=0;
let player1Score=0;
let player2Score=0;

// round 1
//Executing onclick Function for Shooting 

function shootBtn(){
   

    //Getting Random Power for each player
    var player1Fire =   Math.floor(Math.random() * 5);
    var player2Fire =  Math.floor(Math.random() * 5);
    
    console.log("Player 1 Fire : " +player1Fire);
    console.log("Player 2 Fire : "+ player2Fire);
    
    document.getElementById("p1FireScore").innerHTML=player1Fire;
    localStorage.setItem("player1Score","p1FireScore");
    document.getElementById("p2FireScore").innerHTML=player2Fire;

    //Calculating Players Health after hitting by power
      player1Health = player1Health-player2Fire;
      player2Health= player2Health-player1Fire;
    
      console.log("Player 1 Health : "+player1Health);
      console.log("Player 2 Health : "+player2Health)

    //Counting Number of Rounds Left
       roundCounter++;
       console.log(roundCounter)

     //Restricting Shoot Button after 5 Rounds are Completed
      if(roundCounter==5){
        document.getElementById("ShootBtn").disabled = true;
        document.getElementById("ShootBtn").innerHTML="Game Over";
        document.getElementById("ShootBtn").style.backgroundColor = "grey";
      }

       //Finding the Winner of individual rounds and incrementing their score by 1
      if(player1Fire>player2Fire){
        player1Score = player1Score+1;

      }

      if(player2Fire>player1Fire){
        player2Score=player2Score+1;

      }
      console.warn("Player 1 Win :" + player1Score)
      console.warn("Player 2 Win :" + player2Score)
      document.getElementById("grid-item-4").innerHTML=player1Score;
      document.getElementById("grid-item-8").innerHTML=player2Score;
      console.log("");
    }
    

    function gameOver(playercomment){
      document.getElementById("grid-item-9").innerHTML = playercomment;
      document.getElementById("ShootBtn").disabled = true;
      document.getElementById("ShootBtn").innerHTML="Game Over";
      document.getElementById("ShootBtn").style.backgroundColor = "grey";
    }

    // round 2

    let roundCounter2=0;
    let player1Score2=0;
   let player2Score2=0;

function shootBtn2(){
   
  //Getting Random Power for each player
  var player1Fire =   Math.floor(Math.random() * 5);
  var player2Fire =  Math.floor(Math.random() * 5);
  
  console.log("Player 1 Fire : " +player1Fire);
  console.log("Player 2 Fire : "+ player2Fire);
  
  document.getElementById("p1FireScore").innerHTML=player1Fire; 
  localStorage.setItem("player1Score","p1FireScore");
  document.getElementById("p2FireScore").innerHTML=player2Fire;

  //Calculating Players Health after hitting by power
    player1Health = player1Health-player2Fire;
    player2Health= player2Health-player1Fire;
  
    console.log("Player 1 Health : "+player1Health);
    console.log("Player 2 Health : "+player2Health)
    
    //Counting Number of Rounds Left
     roundCounter2++;
     console.log(roundCounter2)
     //Restricting Shoot Button after 5 Rounds are Completed
     if(roundCounter2==5){
       document.getElementById("ShootBtn2").disabled = true;
       document.getElementById("ShootBtn2").innerHTML="Game Over";
       document.getElementById("ShootBtn2").style.backgroundColor = "grey";
     }
     //Finding the Winner of individual rounds and incrementing their score by 1
     if(player1Fire>player2Fire){
       player1Score2 = player1Score2+1;
     }
     if(player2Fire>player1Fire){
       player2Score2=player2Score2+1;
 
     }
     localStorage.setItem("lastname",player1Score2);
 
     console.warn("Player 1 Win :" + player1Score2)
     console.warn("Player 2 Win :" + player2Score2)
     document.getElementById("grid-item-42").innerHTML=player1Score2;
     document.getElementById("grid-item-82").innerHTML=player2Score2; 

     console.log("");
  }
function gameOver2(playercomment){
  document.getElementById("grid-item-92").innerHTML = playercomment;
  document.getElementById("ShootBtn2").disabled = true;
  document.getElementById("ShootBtn2").innerHTML="Game Over";
  document.getElementById("ShootBtn2").style.backgroundColor = "grey";
}


//   round 3

let roundCounter3=0;
    let player1Score3=0;
   let player2Score3=0;

function shootBtn3(){
   
  //Getting Random Power for each player
  var player1Fire =   Math.floor(Math.random() * 5);
  var player2Fire =  Math.floor(Math.random() * 5);
  
  console.log("Player 1 Fire : " +player1Fire);
  console.log("Player 2 Fire : "+ player2Fire);
  
  document.getElementById("p1FireScore").innerHTML=player1Fire; 
  localStorage.setItem("player1Score","p1FireScore");
  document.getElementById("p2FireScore").innerHTML=player2Fire;

  //Calculating Players Health after hitting by power
    player1Health = player1Health-player2Fire;
    player2Health= player2Health-player1Fire;
  
    console.log("Player 1 Health : "+player1Health);
    console.log("Player 2 Health : "+player2Health)
    
    //Counting Number of Rounds Left
     roundCounter3++;
     console.log(roundCounter3)
     //Restricting Shoot Button after 5 Rounds are Completed
     if(roundCounter3==5){
       document.getElementById("ShootBtn3").disabled = true;
       document.getElementById("ShootBtn3").innerHTML="Game Over";
       document.getElementById("ShootBtn3").style.backgroundColor = "grey";
     }
     //Finding the Winner of individual rounds and incrementing their score by 1
     if(player1Fire>player2Fire){
       player1Score3 = player1Score3+1;
     }
     if(player2Fire>player1Fire){
       player2Score3=player2Score3+1;
 
     }
     localStorage.setItem("lastname",player1Score3);
 
     console.warn("Player 1 Win :" + player1Score3)
     console.warn("Player 2 Win :" + player2Score3)
     document.getElementById("grid-item-42").innerHTML=player1Score3;
     document.getElementById("grid-item-82").innerHTML=player2Score3; 

     console.log("");
  }
function gameOver3(playercomment){
  document.getElementById("grid-item-93").innerHTML = playercomment;
  document.getElementById("ShootBtn3").disabled = true;
  document.getElementById("ShootBtn3").innerHTML="Game Over";
  document.getElementById("ShootBtn3").style.backgroundColor = "grey";
}

// round 4

let roundCounter4=0;
    let player1Score4=0;
   let player2Score4=0;

function shootBtn4(){
   
  //Getting Random Power for each player
  var player1Fire =   Math.floor(Math.random() * 5);
  var player2Fire =  Math.floor(Math.random() * 5);
  
  console.log("Player 1 Fire : " +player1Fire);
  console.log("Player 2 Fire : "+ player2Fire);
  
  document.getElementById("p1FireScore").innerHTML=player1Fire; 
  localStorage.setItem("player1Score","p1FireScore");
  document.getElementById("p2FireScore").innerHTML=player2Fire;

  //Calculating Players Health after hitting by power
    player1Health = player1Health-player2Fire;
    player2Health= player2Health-player1Fire;
  
    console.log("Player 1 Health : "+player1Health);
    console.log("Player 2 Health : "+player2Health)
    
    //Counting Number of Rounds Left
     roundCounter4++;
     console.log(roundCounter4)
     //Restricting Shoot Button after 5 Rounds are Completed
     if(roundCounter4==5){
       document.getElementById("ShootBtn4").disabled = true;
       document.getElementById("ShootBtn4").innerHTML="Game Over";
       document.getElementById("ShootBtn4").style.backgroundColor = "grey";
     }
     //Finding the Winner of individual rounds and incrementing their score by 1
     if(player1Fire>player2Fire){
       player1Score4 = player1Score4+1;
     }
     if(player2Fire>player1Fire){
       player2Score4=player2Score4+1;
 
     }
     localStorage.setItem("lastname",player1Score4);
 
     console.warn("Player 1 Win :" + player1Score4)
     console.warn("Player 2 Win :" + player2Score4)
     document.getElementById("grid-item-44").innerHTML=player1Score4;
     document.getElementById("grid-item-84").innerHTML=player2Score4; 

     console.log("");
  }
function gameOver4(playercomment){
  document.getElementById("grid-item-94").innerHTML = playercomment;
  document.getElementById("ShootBtn4").disabled = true;
  document.getElementById("ShootBtn4").innerHTML="Game Over";
  document.getElementById("ShootBtn4").style.backgroundColor = "grey";
}


//     round 5


let roundCounter5=0;
    let player1Score5=0;
   let player2Score5=0;

function shootBtn5(){   
  //Getting Random Power for each player
  var player1Fire =   Math.floor(Math.random() * 5);
  var player2Fire =  Math.floor(Math.random() * 5);
  
  console.log("Player 1 Fire : " +player1Fire);
  console.log("Player 2 Fire : "+ player2Fire);
  
  document.getElementById("p1FireScore").innerHTML=player1Fire; 
  localStorage.setItem("player1Score","p1FireScore");
  document.getElementById("p2FireScore").innerHTML=player2Fire;

  //Calculating Players Health after hitting by power
    player1Health = player1Health-player2Fire;
    player2Health= player2Health-player1Fire;
  
    console.log("Player 1 Health : "+player1Health);
    console.log("Player 2 Health : "+player2Health)
    
    //Counting Number of Rounds Left
     roundCounter5++;
     console.log(roundCounter5)
     //Restricting Shoot Button after 5 Rounds are Completed
     if(roundCounter5==5){
       document.getElementById("ShootBtn5").disabled = true;
       document.getElementById("ShootBtn5").innerHTML="Game Over";
       document.getElementById("ShootBtn5").style.backgroundColor = "grey";
     }
        //Finding the Winner of individual rounds and incrementing their score by 1
        if(player1Fire>player2Fire){
          player1Score5 = player1Score5+1;
        }
  
        if(player2Fire>player1Fire){
          player2Score5=player2Score5+1;
  
        }
        localStorage.setItem("lastname",player1Score5);
        console.warn("Player 1 Win :" + player1Score5)
        console.warn("Player 2 Win :" + player2Score5)
        document.getElementById("grid-item-45").innerHTML=player1Score5;
        document.getElementById("grid-item-85").innerHTML=player2Score5;

        //Checking if anyone of the player has scored 3, if yes then terminating the game and announcing the result.
        if(player1Score5==3){
          gameOver5("Player 1 Won!")
        }
        if(player2Score5==3){
          gameOver5("Player 2 Won!")
        }
      //Checking which player has scored more after completing 5 rounds
       if(roundCounter5==5){
          if(player1Score5>player2Score5){
            
              gameOver5("Player 1 Won!") 
            }
            if(player2Score5>player1Score5){
              gameOver5("Player 2 Won!")
              
            }
            //Checking if both the players have scored equaly, if yes then printing DRAW
            if(player2Score5==player1Score5){
              gameOver5("Match Draw")
            }
       }
       console.log("");
  }

function gameOver5(playercomment){
  document.getElementById("grid-item-95").innerHTML = playercomment;
  document.getElementById("ShootBtn5").disabled = true;
  document.getElementById("ShootBtn5").innerHTML="Game Over";
  document.getElementById("ShootBtn5").style.backgroundColor = "grey";
}
