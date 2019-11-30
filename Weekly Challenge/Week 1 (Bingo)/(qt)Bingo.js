bingo();

function bingo(){
    
    var bingoCard = new Array();
    bingoCard.push(getRndInteger(1, 15, 5, "B"));
    bingoCard.push(getRndInteger(16, 30, 5, "I"));
    bingoCard.push(getRndInteger(31, 45, 4, "N"));
    bingoCard.push(getRndInteger(46, 60, 5, "G"));
    bingoCard.push(getRndInteger(61, 75, 5, "O"));

    console.log(bingoCard.join(","));
}

function getRndInteger(min, max, count, letter) {
    var array = new Array();
    var temp = 0;
    for(i = 0; i < count; i++){
        while(true) {
            temp = letter + (Math.floor(Math.random() * (max - min + 1) ) + min);
            if (array.indexOf(temp) == -1){
                array[i] = temp;
                break;
            }
        }
    }
    return array;
  }