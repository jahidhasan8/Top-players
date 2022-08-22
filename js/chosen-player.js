

const playerList = [];
function choosePlayer(name) {
      
    // player choosing validation
    if(playerList.length > 4){
        return alert ('Sorry you can not choose more than 5 players')
        }

        // get player name
    const playerName = name.parentNode.children[0].innerText
    playerList.push(playerName);

        // get choosing-player-list field 
    const player = document.getElementById('choose-player-list');
         player.innerText = '';
     

    for (let i = 0; i < playerList.length; i++) {

        let chosenPlayerName = playerList[i];
        const li = document.createElement('li');
        
        li.innerText=chosenPlayerName;
       
        player.appendChild(li);
        
    }

}
