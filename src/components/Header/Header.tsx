import { FunctionComponent } from 'react';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';

import './Header.css';
import currenciesTranslations from '../../utils/currenciesTranslations';

interface HeaderProps {
  currency: string;
  currencies: string[];
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
}

const Header: FunctionComponent<HeaderProps> = ({
  currency,
  currencies,
  setCurrency,
}) => {
  return (
    <Card className="header" form="square" shadow={false}>
      <Text className="header__heading" weight="bold" transform="uppercase">
        {`${currenciesTranslations[currency]}, ${currency}/₽`}
      </Text>
      <ChoiceGroup
        value={currency}
        size="xs"
        onChange={({ value }) => setCurrency(value)}
        items={currencies}
        getItemLabel={(item) => item}
        multiple={false}
        name={'Currencies'}
        className="header__toggle"
      />
    </Card>
  );
};

export default Header;
