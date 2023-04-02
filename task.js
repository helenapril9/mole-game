let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
for (let index = 1; index <= 9; index++) {
    function getHole (index) {
        let holeClick = document.getElementById(`hole${index}`);
        return holeClick;
    }
    let hole = getHole (index);
    dead.textContent = 0;
    lost.textContent = 0;
    hole.onclick = function() {        
        if (hole.className.includes("hole_has-mole") === true) {
            if(dead.textContent<5){
            dead.textContent = Number(dead.textContent)+1}
            else {alert ("Вы победили!");
                   dead.textContent = 0;
                   lost.textContent = 0; 
                   return;                  
            }
        } else {
            if(lost.textContent<10){
            lost.textContent = Number(lost.textContent)+1}
            else {alert ("Вы проиграли!");
                  dead.textContent = 0;
                  lost.textContent = 0;
                  return;
        }
        return;            
        }     
    }
}

