function semRetorno(...args: string[]): void {
  //void é quando uma função ou metodo não retorna nada
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otavio',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Luiz', 'Marcos');

pessoa.exibirNome();

export { pessoa };
