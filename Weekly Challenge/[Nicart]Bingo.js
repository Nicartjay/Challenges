var letters = ["B","I","N","G","O"];
var result = [];
const defWide = 15;

letters.forEach(function(letter,range){
    for(let i = 0; i < 5; i++){
        var data = letter + ((range*defWide) + Math.floor((Math.random() * defWide) + 1));
        if(letter == "N" && i == 4) continue;
        if(result.indexOf(data) == -1){
            result.push(data);
        } else i--;
    }
})

console.log(result.join(","));