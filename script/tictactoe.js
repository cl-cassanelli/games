const tris = [[0,0,0],[0,0,0],[0,0,0]];
var player = true;
var gameOver = true;
var winPl1 = 0, winPl2 = 0;
var cont = 0;

function getPlayerNames() {
    const selectedGame = localStorage.getItem('selectedGame');
    const player1Name = localStorage.getItem(`${selectedGame}Player1Name`);
    const player2Name = localStorage.getItem(`${selectedGame}Player2Name`);
    
    // Verifica se i nomi dei giocatori sono stati impostati
    if (player1Name && player2Name) {
        document.getElementById('giocatorecorrente').textContent = `${player1Name} sta giocando`;
        document.getElementById('player1').textContent = `${player1Name}: 0`;
        document.getElementById('player2').textContent = `${player2Name}: 0`;
    }

    return [player1Name,player2Name];
}

function checkTrisWin(pl) {
    // Controlla le righe
    for (let i = 0; i < 3; i++) {
        if (tris[i][0] === pl && tris[i][1] === pl && tris[i][2] === pl) return true; // Ha vinto il giocatore 
    }
    // Controlla le colonne
    for (let i = 0; i < 3; i++) {
        if (tris[0][i] === pl && tris[1][i] === pl && tris[2][i] === pl) return true; // Ha vinto il giocatore
    }
    // Controlla le diagonali
    if (tris[0][0] === pl && tris[1][1] === pl && tris[2][2] === pl) return true; // Ha vinto
    if (tris[0][2] === pl && tris[1][1] === pl && tris[2][0] === pl) return true; // Ha vinto

    cont++;
    if(cont == 9) alert("Pareggio");
    
    return false; // Nessuna vittoria
}

function trisGame(b) {
    const [player1Name, player2Name] = getPlayerNames();
    let r = Number(b.substr(0,1));
    let c = Number(b.substr(1,1));
    if(player){//1 gamer
        if(tris[r][c]==0 && gameOver == true){
            document.getElementById(b).src = "img/tris/x.png";
            tris[r][c]=1;
            if (checkTrisWin(1)) {
                winPl1++;
                gameOver = false;
                document.getElementById("player1").innerHTML = `${player1Name}: ${winPl1}`;
                alert(`${player1Name} ha vinto!`);
            }
            player = false;
            document.getElementById("giocatorecorrente").innerHTML = `${player2Name} sta giocando`;
        }
    }else{//2 gamer   
        if(tris[r][c]==0 && gameOver == true){
            document.getElementById(b).src = "img/tris/o.png"
            tris[r][c]=2;
            if (checkTrisWin(2)) {
                winPl2++;
                gameOver = false;
                document.getElementById("player2").innerHTML = `${player2Name}: ${winPl2}`;
                alert(`${player2Name} ha vinto!`);
            }
            player = true;
            document.getElementById("giocatorecorrente").innerHTML = `${player1Name} sta giocando`;
        }    
    }
}

function restartTrisGame(){
    const [player1Name, player2Name] = getPlayerNames();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.getElementById(`${i}${j}`).src = "img/tris/vuoto.png"
            tris[i][j] = 0;
        }
    }
    // if(player) document.getElementById("giocatorecorrente").innerHTML = `${player1Name} sta giocando`;
    // else document.getElementById("giocatorecorrente").innerHTML = `${player2Name} sta giocando`;
    document.getElementById("player1").innerHTML = `${player1Name}: ${winPl1}`;
    document.getElementById("player2").innerHTML = `${player2Name}: ${winPl2}`;
    gameOver = true;
    cont = 0;
}

function newGame() {
    const selectedGame = localStorage.getItem('selectedGame');

    const playerInput = document.querySelector('.player-input');
    const trisTable = document.getElementById('tictactoe-selection');

    if (playerInput && trisTable) {
        playerInput.style.display = 'none';
        trisTable.style.display = 'none';
    }

    showPlayerInput(selectedGame);
}

function trisOv(id) {
    let r = Number(id.substr(0,1));
    let c = Number(id.substr(1,1));
    if(tris[r][c]==0 && gameOver == true){
        if(player) document.getElementById(id).src = "img/tris/x.png"
        else document.getElementById(id).src = "img/tris/o.png" 
    } 
}
function trisOu(id) {
	let r = Number(id.substr(0,1));
    let c = Number(id.substr(1,1));
    if(tris[r][c]==0 && gameOver == true) document.getElementById(id).src = "img/tris/vuoto.png"
}