class GameController  {
    constructor() {
        super();
        this.gameState=["", "", "", "", "", "", "", "", ""];
        this.statusDisplay=document.querySelector('.game--status');
        this.gameActive = true;

    }
    handleResultValidation() {
        let roundWon = false;
        
        let winningMessage = () => `Player ${currentPlayer} has won!`;
        let drawMessage = () => `Game ended in a draw!`;
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            let a = this.gameState[winCondition[0]];
            let b = this.gameState[winCondition[1]];
            let c =this.gameState[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break
            }
        }

        if (roundWon) {
        
            this.statusDisplay.innerHTML = winningMessage();
            this.gameActive = false;
            return;
        }

        let roundDraw = !this.gameState.includes("");
        if (roundDraw) {
            this.statusDisplay.innerHTML = drawMessage();
            this.gameActive = false;
            return;
        }
        let player=new Player()
        player.handlePlayerChange()
    
    }
    
}  
statusDisplay=document.querySelector('.game--status');
let playerobj=new Player()

statusDisplay.innerHTML = playerobj.currentPlayerTurn();  
let cell=new Cell();
cell.handleEvent();