var numeroSecreto = 581
var chute = prompt('digite um numero entre 1 e 1000')
if (chute == numeroSecreto){
alert('acertou')
}else if( chute > numeroSecreto ) {
 alert('errou, o numero secreto é menor')   
}else if(chute < numeroSecreto){
alert('errou o numero secreto é maior')
}

