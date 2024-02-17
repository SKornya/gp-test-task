import { FunctionComponent, useEffect, useState } from 'react';

import { EChartsOption } from 'echarts';
import { ReactECharts } from '../../Echarts/ReactECharts';

import { Card } from '@consta/uikit/Card';

import Average from '../Average/Average';

import currenciesTranslations from '../../utils/currenciesTranslations';
import getAverage from '../../utils/getAverage';
import getParsedData, { Data } from '../../utils/getData';

import './Content.css';


interface ContentProps {
  currency: string;
}

const Content: FunctionComponent<ContentProps> = ({ currency }) => {
  // храним данные для графика
  const [data, setData] = useState<Data[]>([]);
  // стейт для среднего значения
  const [avg, setAvg] = useState<number | null>(null);

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
      axisLabel: {
        color: '#002033',
        opacity: 0.6,
      },
    },
    yAxis: {
      type: 'value',
      scale: true,
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: '#004166',
          opacity: 0.2,
        },
      },
      splitNumber: 4,
      axisLabel: {
        formatter: (value, index) => {
          if (index === 0) {
            return '';
          }
          return value.toString();
        },
        color: '#002033',
        opacity: 0.6,
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
      top: '10%',
      bottom: '50px',
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
    (async () => {
      const parsedData = await getParsedData(currency);
      setData(parsedData);
    })();
  }, [currency]);

  // вычисляем среднее значение, кладем в стейт
  // таким образом не будет так, что график отрисован, а значение еще не посчитано

  useEffect(() => {
    const average = getAverage(data);
    setAvg(average);
  }, [data]);

  return (
    <Card className="content" form="square" shadow={false}>
      <ReactECharts
        option={options}
        style={{ width: '100%', height: '100%' }}
      />
      <Average value={avg} />
    </Card>
  );
};

export default Content;
