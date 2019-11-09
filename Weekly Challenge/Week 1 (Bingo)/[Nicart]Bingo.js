var letters = ["B","I","N","G","O"];    //letters in bingo
var result = [];                        //container for the result
const defWide = 15;                     //scope for the random number

//Loop each Letter and generate 5 random number
letters.forEach(function(letter,range){
    for(let i = 0; i < 5; i++){
        //Generate random number
        var data = letter + ((range*defWide) + Math.floor((Math.random() * defWide) + 1));
        if(letter == "N" && i == 4) continue; //Make only 4 data in column N

        //Repeat generation if the random number is repeated
        if(result.indexOf(data) == -1){
            result.push(data);
        } else i--; 
    }
})

//Print to console
console.log(result.join(","));