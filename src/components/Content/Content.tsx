import { FunctionComponent, useEffect, useState } from "react"
import { ReactECharts } from "../../Echarts/ReactECharts"
import Average from "../Average/Average"
import { EChartsOption } from "echarts";

interface Data {
  date: string;
  month: string;
  indicator: string;
  value: number;
}

const API_URL = 'https://65cf8186bdb50d5e5f5b6fdb.mockapi.io/api/v1/data';

const Content: FunctionComponent = () => {
  const [title, setTitle] = useState<string>('');
  const [data, setData] = useState<Data[]>([]);


  const options: EChartsOption = {
    title: {
      text: title,
    },
    xAxis: {
      data: [],
    },
    yAxis: {
      type: 'value',
    },
    series: {
      type: 'line',
      data: [],
    },
  };

  
  return (
    <div className="content">
      <ReactECharts option={options} />
      <Average />
    </div>
  )
}

export default Content
