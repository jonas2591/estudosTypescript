function addOrConcat(
  a: number | string | boolean,
  b: number | string | boolean,
): string | number {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(5, 10));
console.log(addOrConcat('5', '10'));
