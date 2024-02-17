import { FunctionComponent } from 'react';

import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';

import './Average.css';

interface AverageProps {
  currency: string;
  value: number;
}

const Average: FunctionComponent<AverageProps> = ({ currency, value }) => {
  // не отображаем данные до их расчета
  return (
    <>
      {!isNaN(value) ? (
        <Card className="content__average" shadow={false} form="square">
          <Text
            className="content__average-heading"
            align="center"
            view="ghost"
          >
            Среднее за период
          </Text>
          <Text className="content__average-currency" align="center">
            <Text className="value" as="span" size="4xl" view="warning">
              {value}&nbsp;
            </Text>
            <Text as="span" size="xl" view="ghost">
              {currency}
            </Text>
          </Text>
        </Card>
      ) : null}
    </>
  );
};

export default Average;
