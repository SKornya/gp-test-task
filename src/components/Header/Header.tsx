import { FunctionComponent, useState } from 'react';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';

const Header: FunctionComponent = () => {
  
  const items: string[] = ['€', '$', '¥'];

  const [value, setValue] = useState<string | null>(items[0]);

  return (
    <div className="header">
      <span>Text</span>
      <ChoiceGroup
        value={value}
        onChange={({ value }) => setValue(value)}
        items={items}
        getItemLabel={(item) => item}
        multiple={false}
        name={'Currencies'}
      />
    </div>
  );
};

export default Header;
