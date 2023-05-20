class Scoreboard {
    constructor() {
      this.playerOneScore = document.querySelector(".scorePlayerOne");
      this.playerTwoScore = document.querySelector(".scorePlayerTwo");
      this.resetBtn = document.querySelector(".resetButton");
      this.playerOneButton = document.querySelector(".playerOnePlus");
      this.playerTwoButton = document.querySelector(".playerTwoPlus");
      this.selectElement = document.getElementById("score-select");
  
      this.playerOne = 0;
      this.playerTwo = 0;
      this.scoreToWin = 0;
  
      this.setupEventListeners();
      this.gameSetting();
    }
  
    setupEventListeners() {

      this.playerOneButton.addEventListener("click", () => {
        if (this.playerOne < this.scoreToWin) {
          this.playerOne += 1;
          this.updatePlayerScore(this.playerOneScore, this.playerOne);
          this.gameSetting();
        }
      });
  
      this.playerTwoButton.addEventListener("click", () => {
        if (this.playerTwo < this.scoreToWin) {
          this.playerTwo += 1;
          this.updatePlayerScore(this.playerTwoScore, this.playerTwo);
          this.gameSetting();
          console.log(this.playerTwo);
        }
      });
  
      this.resetBtn.addEventListener("click", () => {
        this.resetGame();
        this.selectElement.disabled = false;
      });
  
      this.selectElement.addEventListener("change", () => {
        this.checkSelectedOption();
      });
    }
  
    gameSetting() {
      if (this.playerOne > this.playerTwo) {
        this.playerOneScore.style.color = "green";
        this.playerTwoScore.style.color = "red";
      } else if (this.playerOne < this.playerTwo) {
        this.playerOneScore.style.color = "red";
        this.playerTwoScore.style.color = "green";
      } else {
        this.playerOneScore.style.color = "black";
        this.playerTwoScore.style.color = "black";
      }
  
      if (
        this.scoreToWin === 0 ||
        this.playerOne === this.scoreToWin ||
        this.playerTwo === this.scoreToWin
      ) {
        this.playerOneButton.disabled = true;
        this.playerTwoButton.disabled = true;
      }
    }
  
    checkSelectedOption() {
      this.scoreToWin = parseInt(this.selectElement.value);
       
      if(this.scoreToWin > 0) {
        this.selectElement.disabled = true;
      }

      if (this.scoreToWin === 0) {
        this.resetGame();
      } else {
        this.playerOneButton.disabled = false;
        this.playerTwoButton.disabled = false;
      }
    }
  
    resetGame() {
      this.playerOne = 0;
      this.playerTwo = 0;
      this.scoreToWin = 0;
      this.updatePlayerScore(this.playerOneScore, this.playerOne);
      this.updatePlayerScore(this.playerTwoScore, this.playerTwo);
      this.gameSetting();
      this.selectElement.value = "";
      console.log(this.playerOne, this.playerTwo, this.scoreToWin);
    }
  
    updatePlayerScore(scoreElement, score) {
      scoreElement.textContent = score;
    }
  }
  
  // Usage:
  const scoreboard = new Scoreboard();