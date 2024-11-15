alert('Boas vindas ao jogo do número secreto');
let numeroMaximo =  100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;


//enquanto chute não for igual ao número secreto.
while (chute != numeroSecreto) {

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

// se chute for igual ao número secreto 
    if (chute == numeroSecreto) {
        // PARA
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        }  else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1;
        tentativas ++;
        // alert (`Você errou, o número secreto era ${numeroSecreto} e você escolheu ${chute} :(`)
    }
}

let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
// if (tentativas > 1) {
// alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }



// alert('Boas vindas ao nosso site!');
// let nome = prompt ('Usuário');
// let idade = prompt ('Qual a sua idade?');
// let numeroDeVendas = 50;
// let saldoDisponível = 1000;
// let mensagemDeErro = ('Erro! Preenha todos os campos')

// if (idade >= 18) {
//     alert (' Pode tirar a habilitação')
// }

// else
//     alert ('Não pode tirar a habilitação')

