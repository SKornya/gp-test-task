import { FunctionComponent } from 'react';

import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';

import './Average.css';

interface AverageProps {
  value: number | null;
}

const Average: FunctionComponent<AverageProps> = ({ value }) => {
  // отображаем после расчета
  return (
    <>
    {!value ? null : (<Card className="content__average" shadow={false} form="square">
        <Text
          className="content__average-heading"
          align="center"
          style={{ color: '#667985', marginBottom: '10px' }}
        >
          Среднее за период
        </Text>        
        <Text className="content__average-currency" align="center">
          <Text
            className="value"
            as="span"
            size="4xl"
            style={{ color: '#F38B00' }}
          >
            {value}&nbsp;
          </Text>
          <Text as="span" size="xl" view="ghost" style={{ color: '#667985' }}>
            ₽
          </Text>
        </Text>
      </Card>)}
    </>
  );
};

export default Average;
