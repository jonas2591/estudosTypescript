type temNome = {
  nome: string;
};

type temSobrenome = {
  sobrenome: string;
};

type temIdade = {
  idade: number;
};

type Pessoa = temNome & temSobrenome & temIdade;
//& = AND
export const pessoa: Pessoa = {
  idade: 20,
  nome: 'asdcasd',
  sobrenome: 'asdcasd',
};

console.log(pessoa);
