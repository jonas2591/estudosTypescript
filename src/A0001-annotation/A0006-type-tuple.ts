//Tuple
const dadosCliente: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Miranda'];
const dadosCliente3: [number, string, string?] = [1, 'Luiz'];
const dadosCliente4: [number, string, ...string[]] = [
  1,
  'Luiz',
  'Miranda',
  'sadcsadc',
  'asdcasdcasd',
  'asdcasdcsadc',
  'asdcasdc',
];
const dadosCliente5: object[] = [
  {
    test: '1',
  },
];

//dadosCliente[0] = 100;
//dadosCliente[1] = 'Carlos';

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
console.log(dadosCliente5);

//readonly array
const arrays1: readonly string[] = ['Luiz', 'Otavio'];
const arrays2: ReadonlyArray<string> = ['Luiz', 'Otavio'];

console.log(arrays1);
console.log(arrays2);
