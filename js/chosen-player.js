

const playerList = [];
function choosePlayer(name) {

    // player choosing validation
    if (playerList.length > 4) {
        
         alert('Sorry you can not choose more than 5 players');
         return playerList[i].disabled=false;
    }

    // get player name
    const playerName = name.parentNode.children[0].innerText
    playerList.push(playerName);

    //   get total number player added
    document.getElementById('total-added-player').innerText = playerList.length;

    // get choosing-player-list field 
    const player = document.getElementById('choose-player-list');
    player.innerText = '';


    for (let i = 0; i < playerList.length; i++) {

        let chosenPlayerName = playerList[i];
        const li = document.createElement('li');

        li.innerText = chosenPlayerName;

        player.appendChild(li);

    }

}
