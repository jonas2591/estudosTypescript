enum Cores {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

function escolhaAcor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaAcor(145345); //Falha do enum
