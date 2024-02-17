import { Data } from "./getData";

// расчет среднего значения
const getAverage = (data: Data[]): number => {
  // округляем результат до десятых
  const roundPosition = 10;

  const valuesSum: number = data
    .map((cur: Data) => cur.value)
    .reduce((acc, value) => acc + value, 0);
  const average: number = valuesSum / data.length;
  return Math.round(average * roundPosition) / roundPosition;
};

export default getAverage;
