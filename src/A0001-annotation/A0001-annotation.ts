/* eslint-disable */
const nome: string = 'luiz';
const idade: number = 20;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');

let arrayDeNumeros: Array<number> = [1, 2, 3]
let arrayDeNumeros2: number[] = [1, 2, 3]

let arrayDeStrings: Array<string> = ['1', '2', '3']
let arrayDeStrings2: string[] = ['1', '2', '3']

let arrayDeObjeto: Array<object> = [{ 'ola': 'mundo' }]
let arrayDeObjeto2: object[] = [{ 'ola': 'mundo' }]


//Objeto
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  idade: 20,
  nome: 'luiz',
}

//Funcoes
function soma(x: number, y: number): number {
  return x + y
}

const soma2: (x: number, y: number) => number = (x, y) => x + y
