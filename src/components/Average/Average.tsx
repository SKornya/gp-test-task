import { FunctionComponent } from "react"

import './Average.css';

interface AverageProps {
  currency: string;
  value: number;
}

const Average: FunctionComponent<AverageProps> = ({ currency, value }) => {
  // не отображаем данные до их расчета
  return (<>
    {!isNaN(value)
      ? (<div className="content__average">
          <div className="content__average-heading">
            <span>Среднее за период</span>
          </div>
          <div className="content__average-currency">
            <span className="value">{value} </span>
            <span>{currency}</span>
          </div>
        </div>)
      : null
    }
  </>)
}

export default Average
