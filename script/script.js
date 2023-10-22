// Funzione per mostrare l'interfaccia di inserimento dei nomi dei giocatori
function showPlayerSelection(game) {
    const mainScreen = document.querySelector('.main-screen');
    const playerSelection = document.querySelector('.player-select')
    if (mainScreen && playerInput) {
        mainScreen.style.display = 'none';
        playerSelection.style.display = 'block';
        // Imposta il gioco selezionato nel localStorage
        localStorage.setItem('selectedGame', game);
    }
}

function showPlayerInput(game) {
    const mainScreen = document.querySelector('.main-screen');
    const playerInput = document.querySelector('.player-input');

    if (mainScreen && playerInput) {
        mainScreen.style.display = 'none';
        playerInput.style.display = 'block';
        // Imposta il gioco selezionato nel localStorage
        localStorage.setItem('selectedGame', game);
    }
}

// Funzione per avviare il gioco dopo aver inserito i nomi dei giocatori
function startGame() {
    const player1Name = document.getElementById('player1Input').value;
    const player2Name = document.getElementById('player2Input').value;

    // Verifica se sono stati inseriti i nomi dei giocatori
    if (player1Name.trim() === '' || player2Name.trim() === '') {
        alert('Inserisci i nomi dei giocatori.');
        return;
    }

    // Nascondi l'interfaccia di input dei nomi
    const playerInput = document.querySelector('.player-input');
    if (playerInput) {
        playerInput.style.display = 'none';
    }

    const selectedGame = localStorage.getItem('selectedGame');
    document.getElementById(`${selectedGame}-selection`).style.display = 'block';

    // Memorizza i nomi dei giocatori nel localStorage
    localStorage.setItem(`${selectedGame}Player1Name`, player1Name);
    localStorage.setItem(`${selectedGame}Player2Name`, player2Name);

    // Imposta il nome del giocatore corrente
    document.getElementById('giocatorecorrente').textContent = `${player1Name} sta giocando`;
    document.getElementById('player1').textContent = `${player1Name}: 0`;
    document.getElementById('player2').textContent = `${player2Name}: 0`;
}

// Funzione per tornare alla schermata di selezione del gioco
function backToGameSelection() {
    const mainScreen = document.querySelector('.main-screen');
    const playerInput = document.querySelector('.player-input');
    const rockpaperscissors = document.getElementById('rockpaperscissors-selection')
    const trisTable = document.getElementById('tictactoe-selection');

    if (mainScreen && playerInput && trisTable) {
        mainScreen.style.display = 'block';
        playerInput.style.display = 'none';
        rockpaperscissors.style.style = 'none';
        trisTable.style.display = 'none';
    }
    restartTrisGame();
}