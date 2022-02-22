let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100;

const pessoa = {
  nome: 'Luiz' as const, //Atribuições literais dentro de objetos
  sobrenome: 'Miranda',
};

export function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  //Tipos literais
  return cor;
}

console.log(escolhaCor('Vermelho'));

//Module mode
export default 1;
