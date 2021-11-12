import { useState } from 'react';

import { DipSwitch } from '@/DipSwitch/';
import { InfiniScroll } from '@/InfiniScroll/';
import { Length } from '@/Length/';
import { 
  CharsetState,
  UpdatePasswordOptions,
  usePasswordGenerator,
} from '@/Password/';

export interface ControlProps {
  update: UpdatePasswordOptions;
  setLength: (length: number) => void;
}

export function Control({ setLength, update }: ControlProps): JSX.Element {
  const updateCharset = (charset: CharsetState) => update({ charset });
  const updateLength = (length: number) => {
    setLength(length);
    update({length});
  };

  return (
    <div className={'Controls'}>
      <DipSwitch charset={'AZ'} update={updateCharset} />
      <DipSwitch charset={'09'} update={updateCharset} />
      <DipSwitch charset={'SM'} update={updateCharset} />
      <Length update={updateLength}/>
    </div>
  );
}

export function App(): JSX.Element {
  const [password, updatePasswordOptions] = usePasswordGenerator();
  const [length, setLength] = useState<number>(8);
  return (
    <div className="App">
      <header>
        <Control setLength={setLength} update={updatePasswordOptions} />
      </header>
      <main>
        <InfiniScroll render={password} length={length} />
      </main>
    </div>
  );
}
