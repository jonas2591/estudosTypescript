export function criaErro(): never {
  //função que nunca vai retornar nada (Erros/laços infinitos)
  throw new Error('Erro qualquer');
}

criaErro();
