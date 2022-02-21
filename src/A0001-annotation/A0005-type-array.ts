export function multiplicaArgs(...args: Array<number>) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

//const result = multiplicaArgs(1, 2, 3, 4, 6);
//const concatenacao = concatenaString('1', '2', '4');
const upper = toUpperCase('a', 'b', 'c');

//console.log(concatenacao);
console.log(upper);
