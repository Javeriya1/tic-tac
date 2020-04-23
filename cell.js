class Cell extends  GameController
 {
   
    handleEvent() {
        let totalcells = document.querySelectorAll('.cell')
        //let playerobj=new Player();
        for (let i = 0; i < totalcells.length; i++) {
            totalcells[i].addEventListener('click',this.handleCellClick.bind(this))
        }
    }
    handleCellClick(clickedCellEvent) {
         let clickedCell = clickedCellEvent.target;
         let clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
     
        //let gameobj=new GameController();
        console.log(gameobj.gameActive)
        if (gameobj.gameState[clickedCellIndex] !== "" || !gameobj.gameActive) {
            return;
        }
       
        
        
        //let gameobj=new GameController();
        super.handleCellPlayed(clickedCell,clickedCellIndex);
        super.handleResultValidation();
        
      
    }
}