import { FunctionComponent, useEffect, useState } from 'react';

import { EChartsOption } from 'echarts';
import { ReactECharts } from '../../Echarts/ReactECharts';

import { Loader } from '@consta/uikit/Loader';

import Average from '../Average/Average';

import currenciesTranslations from '../../utils/currenciesTranslations';
import getAverage from '../../utils/getAverage';
import getParsedData from '../../utils/getData';

import './Content.css';

interface Data {
  date: string;
  month: string;
  indicator: string;
  value: number;
}

interface ContentProps {
  currency: string;
}

const Content: FunctionComponent<ContentProps> = ({ currency }) => {
  // флаг для показа лоадера при загрузке данных
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // храним данные для графика 
  const [data, setData] = useState<Data[]>([]);

  // опции графика
  const options: EChartsOption = {
    xAxis: {
      data: data.map((item) => item.month),
      boundaryGap: false,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      scale: true,
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dotted',
          color: '#004166',
        },
      },
      splitNumber: 4,
      axisLabel: {
        formatter: (value, index ) => {
          if (index === 0) {
            return '';
          }
          return value.toString();
        },
      },
    },
    series: {
      type: 'line',
      data: data.map((item) => item.value),
      showSymbol: false,
      lineStyle: {
        color: '#F38B00',
      },
      symbol: undefined,
      symbolSize: 0,
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '15%',
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        label: {
          textBorderColor: '#ffffff',
        },
      },
      valueFormatter: (value) => `${value}${currency}`,
      textStyle: {
        fontWeight: 'bold',
      },
      formatter: (params): string => {
        // @ts-expect-error
        const { axisValue, value } = params[0];
        return `${axisValue} год<br>
        <span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#F38B00;"></span> 
        <span style="font-weight: normal">${currenciesTranslations[currency]}</span>&nbsp;
        ${value}${currency}`;
      },
    },
  };

  // Запрос данных по API,
  // отбор необходимых данных для конкретной валюты
  // и сохранение в состоянии компонента

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const parsedData = await getParsedData(currency);
      setData(parsedData);
      setIsLoading(false);
    })();
  }, [currency]);

  return (
    <>
      {isLoading ? (
        <Loader size="m" />
      ) : (
        <div className="content">
          <ReactECharts option={options} />
          <Average 
            currency={currency}
            value={getAverage(data)}
          />
        </div>
      )}
    </>
  );
};

export default Content;
