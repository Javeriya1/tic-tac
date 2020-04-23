class Player {
    constructor() {
        
        this.currentPlayer='X';
        
    }
    handleCellPlayed(clickedCell, clickedCellIndex) {
        let gameobj = new GameController();
        gameobj.gameState[clickedCellIndex] = this.currentPlayer;
        clickedCell.innerHTML = this.currentPlayer;
    }
    handlePlayerChange() 
    {
        let gameobj = new GameController();
        if(this.currentPlayer=='X')
        {
            this.currentPlayer='O';
            console.log('current palyer '+this.currentPlayer)
            
        }
        
        else if(this.currentPlayer=='O')
        {
            this.currentPlayer='X';
            console.log('current palyer else  '+this.currentPlayer)
            
        }

        //this.currentPlayer = this.currentPlayer === "X"?"O":"X";
        //console.log(this.currentPlayer);
        gameobj.statusDisplay.innerHTML = this.currentPlayerTurn();
    
    }
    currentPlayerTurn = () => `It's ${this.currentPlayer}'s turn`;
}