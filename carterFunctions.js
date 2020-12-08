document.addEventListener('DOMContentLoaded',testML);
document.addEventListener('DOMContentLoaded',getNameData);
class Game {
  
  constructor(name) {
    //var req = new XMLHttpRequest();
    this.name = name;
    this.ID = 0;
    this.price = 0;
    this.json = "";
    this.ready = false;
    var instance = this;
    var phpReq = new XMLHttpRequest();
    phpReq.open("GET","nameTranslation.php?game="+this.name,true);
    //this.phpThing = phpReq
    phpReq.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	    console.log(this.responseText)
	    instance.ID = this.responseText
	    var newURL = "http://www.programer.club/nodejs/getnews/?"+instance.ID;
	    var req = new XMLHttpRequest();
	    req.open("GET",newURL,true);
	    req.addEventListener('load',function() {
                instance.json = JSON.parse(req.responseText);
		instance.price = getPriceJSON(instance.json,instance.ID);
		instance.pic = getPic(instance.json,instance.ID);
		instance.ready = true;
		displayGame(instance.json,instance.ID,instance.name);
	    });
	    req.send(null);
	    
	}
    };
    phpReq.send();
    //this.phpThing = phpReq;
  }
  
}

function testML() {
   //$SCRIPT_ROOT = {{ request.script_root|tojson|safe }};
	//console.log($SCRIPT_ROOT)
  document.getElementById("testML").addEventListener('click',function(event) {
    var sBar = (document.getElementById("getNameInput").value).split(" ");
    //console.log($SCRIPT_ROOT)
    var w1 = ""
    var w2 = ""
    if (sBar.length != 0) {
      if (sBar.length == 1) {
        w1 = sBar[0]
      } else {
	w1 = sBar[sBar.length-2]
	w2 = sBar[sBar.length-1]
      }
      var URL = "http://www.programer.club/macPhp.php?word1="+w1+"&word2="+w2;
      var req = new XMLHttpRequest();
      //req.open("GET",URL,true);
      //console.log("On ready state change");
      req.onreadystatechange = function() {
  	 if (this.readyState == 4) {
	  var rep = this.responseText.trim()
	  var repA = ["None"]
          if (rep != "None") {
	     rep = rep.substring(1,rep.length-1)
             repA = rep.split(", ")
	     for (var i = 0; i<repA.length;i++) {
               repA[i] = repA[i].substring(1,repA[i].length-1)
	     }
	     console.log(repA);
	  } 
	  displaySuggestions(repA,"suggestions");
	}
	//console.log(this)
        //console.log(this.responseText)
      }
      //console.log("Opening")
      req.open("GET",URL,true);
      //console.log("Sending")
      req.send(null);
    }
    event.preventDefault();
  });

}




function checkLogin() {
  console.log("Checking login");
  document.getElementById('login').addEventListener('click',function(event) {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var phpURL = "login.php?user="+user+"&pass="+pass;
    var req = new XMLHttpRequest();
    req.open("GET",phpURL,true);
    req.onreadystatechange = function() {
      console.log(this.responseText);
      if (this.responseText == "1") {
        goodInfo()
      } else {
        badInfo()
      }
    }
  });
}
function goodInfo() {
  //Make an document element say good info
	//send back to index.html
  console.log("Good info")
}
function badInfo() {
  //Make a document element say bad info
  console.log("Bad info")
  document.getElementById("bad").value = "Username or password was incorrect."
}
function getNameData() {
  console.log("Starting getNameData new");
  document.getElementById('getName').addEventListener('click',function(event){
    var homeURL = "nameTranslation.php?game=";
    var userInput = document.getElementById('getNameInput').value;
    var queryString = "?para1="+userInput;
    //window.location.href = "searchpage.html"+queryString;
    var newURL = homeURL + userInput;
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
	if (this.responseText != "0") {
	window.location.href = "searchpage.html"+queryString;
	var req2 = new XMLHttpRequest();
	var gameID = this.responseText;
	var url2 = "http://www.programer.club/nodejs/getnews/?"+gameID;
	req2.open("GET",url2,true);
	req2.addEventListener('load',function() {
          if (req2.status>=200 && req2.status < 400) {
            var response = JSON.parse(req2.responseText);
            displayGame(response,gameID,userInput);
	  }
	});
	req2.send(null);
       } else {
         console.log("Invalid game");
	 document.getElementById("Invalid game").innerHTML = "Invalid game name. Try using the suggest feature to avoid misspellings."
       }
      }
    };
    req.open("GET",newURL,true)
    req.send();
    event.preventDefault();
    console.log("Finished");
  });
}


/*
function getData() {
	console.log("Starting getNews");
	document.getElementById('getPrice').addEventListener('click', function(event) {
	var homeURL = "http://www.programer.club/nodejs/getnews/?"
	var userInput = document.getElementById('getPriceInput').value;
	var newURL = homeURL+userInput;
        console.log("Making request");
	var req = new XMLHttpRequest();
	req.open("GET", newURL, true);
	req.addEventListener('load', function(){
		if(req.status>= 200 && req.status<400){
		var response = JSON.parse(req.responseText);
		console.log(response);
		//console.log(response.applist.apps.app);
		//console.log(response.applist.apps.app[1]);
		//console.log(response.applist.apps.app["test2"]);
		console.log("Getting Price: ");
		console.log(getPriceJSON(response,userInput));
		setText("outputPrice",getPriceJSON(response,userInput));
		
		}
			else {
				
				console.log("Error in network request: ");
			} 
	});
	req.send(null);
	event.preventDefault();
	console.log("Finished");
});
}

*/
function displayGame(data,id,name) {
  var header = document.createElement("h1");
  //var gameName = document.createTextNode(name)
  var gameName = name.toLowerCase();
  var gameNameL = gameName.split(" ");
  for (var i = 0; i< gameNameL.length; i++) {
    gameNameL[i] = gameNameL[i].substring(0,1).toUpperCase()+gameNameL[i].substring(1,gameNameL[i].length);
  }
  gameName = gameNameL.join(" ");
  var gameNameObj = document.createTextNode(gameName)
  header.appendChild(gameNameObj);
  var img = document.createElement("img");
  img.src = getPic(data,id);
  var price = document.createElement("h3");
  var pData = document.createTextNode("Price: "+getPriceJSON(data,id)+getSale(data,id));
  price.appendChild(pData);
  var gameDescDiv = document.createElement('div');
  
  gameDescDiv.innerHTML = (data[id].data.detailed_description)
  document.getElementById('output').appendChild(header);
  document.getElementById('output').appendChild(img);
  document.getElementById('output').appendChild(gameDescDiv);
  document.getElementById('output').appendChild(price);
  document.getElementById("id").innerHTML = id;	
  document.getElementById("game").innerHTML = gameName;
}


function displaySuggestions(arr, dID) {
  var suggest = arr.join(", ");
  document.getElementById("Invalid game").innerHTML = "" 
  document.getElementById(dID).innerHTML = suggest;
}

function getPriceJSON(obj, id) {
  if (obj[id].data.price_overview != undefined) {
    return(obj[id].data.price_overview.final/100);
  } else {
    return "Free!"
  }
}

function setText(elem,text) {
  document.getElementById(elem).innerHTML = text;

}
function getPic(obj,id) {
  return(obj[id].data.header_image);
}

function checkSale(obj,id) {
  if (obj[id].data.price_overview != undefined) {
    return (obj[id].data.price_overview.discount_percent != 0)
  } else {
    return false
  }
}
function getSale(obj,id) {
  var sale = ""
  if (checkSale(obj,id)) {
    sale = " down from: " + obj[id].data.price_overview.initial/100;
  }
  return sale
}

