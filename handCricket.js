const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const options = document.querySelectorAll(".options button");

let i = 0;
while (i < options.length) {
  const option = options[i];
  option.addEventListener("click", () => {
    computer.classList.add("shakeComputer");
    player.classList.add("shakePlayer");
    setTimeout(() => {
      computer.classList.remove("shakeComputer");
      player.classList.remove("shakePlayer");

      // Update player image
      player.src = "./" + option.innerHTML.toLowerCase() + "player.png";

      // Generate computer's choice
      const choices = ["ONE", "TWO", "THREE", "FOUR", "SIX"];
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];
      computer.src = "./" + computerChoice + "Computer.png";

      // Update points
      let cPoints = parseInt(computerPoints.innerHTML);
      let pPoints = parseInt(playerPoints.innerHTML);
      if (pPoints >= 50) {
        //player win
        if(pPoints>cPoints){
        return window.location.href = "file:///C:/Users/Parvez/OneDrive/Desktop/HandCricket/winner.html"; 
        }
        //computer win
       if(cPoints>pPoints){
        return window.location.href = "https://www.google.com/"; // Game over
        }
      }

      if(option.innerHTML === "ONE")
        {
         if(computerChoice ==="ONE")
          computerPoints.innerHTML = cPoints +1;
         else 
         playerPoints.innerHTML =pPoints+1 ;
        }

       if(option.innerHTML === "TWO")
          {
           if(computerChoice ==="TWO")
            computerPoints.innerHTML = cPoints +2;
           else 
           playerPoints.innerHTML =pPoints+2 ;
          }
       if(option.innerHTML === "THREE")
            {
             if(computerChoice ==="THREE")
              computerPoints.innerHTML = cPoints +3;
             else 
             playerPoints.innerHTML =pPoints+3 ;
            }
       if(option.innerHTML === "FOUR")
              {
               if(computerChoice ==="FOUR")
                computerPoints.innerHTML = cPoints +4;
               else 
               playerPoints.innerHTML =pPoints+4 ;
              }
       if(option.innerHTML === "SIX")
                {
                 if(computerChoice ==="SIX")
                  computerPoints.innerHTML = cPoints +6;
                 else 
                 playerPoints.innerHTML =pPoints+6;
                }
    }, 900);
  });
  i++;
}
