function buildPalindrome(s) {
    for(let i = 0; ; i++){
        let second = s.slice(i).split('').reverse().join(''),
            first = s.slice(0,i);
            
        if( first.slice(first.length - second.length) == second){
            return first + first.split('').reverse().join('');
        }
        if( first.slice(first.length - second.length + 1) == second.slice(0,-1)){
            return first + second.slice(-1) + first.split('').reverse().join('');
        }
    }
}