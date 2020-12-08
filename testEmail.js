var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function getGames() {
    console.log("Running")
    var phpURL = "http://www.programer.club/getUserGames.php";
    var phpReq = new XMLHttpRequest();
    phpReq.open("GET", phpURL, false);
    phpReq.send(null);
    
      if (phpReq.status == 200) {
        parse(phpReq.responseText);
     }
    
    

}
console.log("Node works to run this");
getGames()



function parse(response) {
  var userL = response.split("\n");
  
  for (var i = 0; i < userL.length-1; i++) {
    var userGameL = userL[i].split(":");
    console.log(userGameL[0]);
    var gameL = userGameL[1].split(" ");
    var emailText = ""
    for (var j = 0; j < gameL.length-1; j++) {
      emailText = emailText + (checkSale(gameL[j]));
    }
    console.log(emailText);
    var php2URL = "http://www.programer.club/testEmail.php?word1="+encodeURI(userGameL[0])+"&word2="+encodeURI(emailText);
    console.log(php2URL);
    php2Req = new XMLHttpRequest();
    php2Req.open("GET",php2URL,false);
    php2Req.send(null);
    console.log(php2Req);
  }
}


function checkSale(gameID) {
  var serverURL = "http://www.programer.club/nodejs/getnews/?"+gameID;
  var steamReq = new XMLHttpRequest();
  var retString = ""
  
  steamReq.open("GET",serverURL,false);
  steamReq.send(null);
  //console.log(steamReq.status);
  if (steamReq.status == 200) {
    
   
       
      var gameInfo = JSON.parse(steamReq.responseText);
      console.log(gameInfo)      
      if (gameInfo[gameID].data.price_overview != undefined) {
        var priceStuff = gameInfo[gameID].data.price_overview;
        if (priceStuff.discount_percent != 0) {
          retString = gameInfo[gameID].data.name + " now on sale for: $"+priceStuff.final/100 + " a ";
          retString = retString + priceStuff.discount_percent + "% savings!<br>";
        }
      }
      
    }
  
return retString
}

