 var mytable = [{
   "img":"https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/capsule_184x69.jpg?t=1606329416",
   "name": "hades",
   "price": "$59.99",
   "discounted":"$19.99",
   "genre": "<span>Action Roguelike</span><span>, Action</span><span>, Indie</span><span>, RPG</span>"

},{
    "img":"https://cdn.cloudflare.steamstatic.com/steam/apps/782330/capsule_184x69.jpg?t=1603213568",
    "name": "DOOM Eternal",
    "price": "24.99",
    "discounted":"$19.79",
    "genre": "<span>Action Roguelike</span><span>, Action</span><span>, Indie</span><span>, RPG</span>"
},{
   "img":"https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/capsule_184x69.jpg?t=1597419522",
    "name": "Red Dead Redemption 2",
    "price": "$59.99",
    "discounted":"$40.19",
    "genre": "<span>Action Adventure</span><span>,Open World</span><span>, Action</span><span>, Western</span>"

},
{
   "img":"https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/capsule_184x69.jpg?t=1606267776",
    "name": "Destiny 2",
    "price": "$0.00",
    "discounted":"$0.00",
    "genre": "<span>Action PvP</span><span>,PvE</span><span>, Looter Shooter</span><span>, Open World</span>"

},
{
   "img":"https://cdn.cloudflare.steamstatic.com/steam/apps/397540/capsule_184x69.jpg?t=1604949576",
    "name": "Borderlands 3",
    "price": "$29.99",
    "discounted":"$19.99",
    "genre": "<span>RPG</span><span>,Action</span><span>, Looter Shooter</span><span>, Online Co-Op</span>"

},
{
   "img":"https://cdn.cloudflare.steamstatic.com/steam/apps/582010/capsule_184x69.jpg?t=1602806745",
    "name": "Monster Hunter: World",
    "price": "$59.99",
    "discounted":"$19.79",
    "genre": "<span>Co-op</span><span>,Multiplayer</span><span>, Action</span><span>,Open World </span>"

},
{
   "img":"https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_184x69.jpg?t=1605757059",
    "name": "Counter-Strike: Global Offensive",
    "price": "$0.00",
    "discounted":"$0.00",
    "genre": "<span>Co-op</span><span>,Multiplayer</span><span>, Action</span><span>, </span>"

},
{
   "img":"https://cdn.cloudflare.steamstatic.com/steam/apps/1222730/capsule_184x69.jpg?t=1606411556",
    "name": "STAR WARS: Squadrons",
    "price": "$39.99",
    "discounted":"$23.99",
    "genre": "<span>Flight</span><span>,Space</span>,Multiplayer><span>, Action</span><span>, VR</span>"

},
{
    "img":"https://cdn.cloudflare.steamstatic.com/steam/apps/1172620/capsule_184x69.jpg?t=1606326636",
    "name": "Sea of Thieves",
    "price": "$39.99",
    "discounted":"$29.99",
    "genre": "<span>Adventure</span><span>,Action</span>,Multiplayer><span>,  Open World</span><span>, Pirates</span>"

},
{
   "img":"https://cdn.cloudflare.steamstatic.com/steam/apps/271590/capsule_184x69.jpg?t=1592866696",
   "name": "Grand Theft Auto ",
   "price": "$29.99",
   "discounted":"$14.99",
   "genre": "<span>Open World</span><span>,Action</span>,Multiplayer><span>,  Open World</span><span>, Automobile Sim</span>"

},
]


table(mytable)

function table(games){
   var table = document.getElementById('gametable')

   for(var i =0; i<games.length; i++){
      var row = `<tr>
                     <th scope="row"><img class="img" src =${games[i].img}></th>
                     <td>${games[i].name}</td>
                     <td>${games[i].price}</td>
                     <td>${games[i].discounted}</td>
                     <td>${games[i].genre}</td>
		     <td> <a href="http://programer.club/searchpage.html?para1=${games[i].name}"> <button> Find Games </button> </td>


	</tr>`
                table.innerHTML += row
   }
}


