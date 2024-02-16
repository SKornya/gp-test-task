import { FunctionComponent, useState } from 'react';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';

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
    <div className="header">
      <span className="header__heading">
        {`${currenciesTranslations[currency]}, ${currency}/₽`}
      </span>
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
    </div>
  );
};

export default Header;
