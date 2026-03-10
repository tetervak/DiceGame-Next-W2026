function getRandomDiceValue() {
  return 1 + Math.floor(6 * Math.random());
}

export interface RollData{
  values: number[];
  total: number;
}

export function getRollData(numberOfDice: number): RollData{

  const values: number[] = [];
  let total: number = 0;
  for(let i: number = 1; i <= numberOfDice; i++){
    const diceValue = getRandomDiceValue();
    values.push(diceValue);
    total += diceValue;
  }
  return {
    values: values,
    total: total
  }
}