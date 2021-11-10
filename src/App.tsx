import { CharsetState } from '@/charset';
import { DipSwitch } from '@/DipSwitch';
import { InfiniScroll } from '@/InfiniScroll';
import {
  UpdatePasswordOptions,
  usePasswordGenerator,
} from '@/usePasswordGenerator';

import { Length } from './Length';

export interface ControlProps {
  update: UpdatePasswordOptions;
}

export function Control({ update }: ControlProps): JSX.Element {
  const updateCharset = (charset: CharsetState) => update({ charset });
  const updateLength = (length: number) => update({length});
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
  return (
    <div className="App">
      <header>
        <Control update={updatePasswordOptions} />
      </header>
      <main>
        <InfiniScroll render={password} />
      </main>
    </div>
  );
}
