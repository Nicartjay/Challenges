function rounders(n) {
    var cnt = 0;        //Counter
    const ZERO = "0";   //Zero padding

    //Loop the number until only one digit left
    while(n > 10){
        //Round the nearest ones
        n = Math.round(n/10);
        //Count how many places takes place
        cnt++;
    }

    //Return the number with ZERO padding in right
    return Number(n+ZERO.repeat(cnt));
}
//Test the data in the TEST FILE
console.log(rounders(15));      //20
console.log(rounders(1234));    //1000
console.log(rounders(1445));    //2000
console.log(rounders(14));      //10
console.log(rounders(10));      //10
console.log(rounders(7001));    //7000
console.log(rounders(99));      //100