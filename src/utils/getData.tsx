import currenciesTranslations from "./currenciesTranslations";

interface Data {
  date: string;
  month: string;
  indicator: string;
  value: number;
}

const API_URL = 'https://65cf8186bdb50d5e5f5b6fdb.mockapi.io/api/v1/data';

const getParsedData = async (currency: string): Promise<Data[]> => {
  const getData = async (): Promise<Data[]> => {
    try {
      const response = await fetch(API_URL);
  
      if (response.ok) {
        return response.json();
      }
  
      throw Error(`Error ${response.status}!`);
    } catch (e: unknown) {
      console.log(e);
      if (e instanceof Error) {
        console.log(e.message);
      }
      return [];
    }
  };

  const apiData = await getData();

  return apiData.filter((cur) => cur.indicator === currenciesTranslations[currency]);
};

export default getParsedData;
