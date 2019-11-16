//Using javascripts library
function arithmeticExpression1(A, B, C) {
    return [...'+-*/'].some(op => eval(`${A}${op}${B}`) === C)
}

//Using OR gates only
function arithmeticExpression2(A, B, C) {
    return A+B==C || A-B==C || A*B==C || A/B==C
}