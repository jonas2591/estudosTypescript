const objetoA: {
  readonly chaveA: string; //utiliza-se readonly quando o valor não é alterado
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; //Quando não souber o nome da chave/nome da propriedade utiliza-se a "index signature"
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

//objetoA.chaveA = 'Outro valor';
objetoA.chaveC = 'Nova chave';
objetoA.chaveNew = 'NovaChavinha';
objetoA.chaveNew2 = 'NovaChavinha';
