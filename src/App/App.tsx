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
}

export function Control({ update }: ControlProps): JSX.Element {
  const updateCharset = (charset: CharsetState) => update({ charset });
  const updateLength = (length: number) => update({length});
  return (
    <div className={'Controls'}>
      <Length update={updateLength}/>
      <DipSwitch charset={'AZ'} update={updateCharset} />
      <DipSwitch charset={'09'} update={updateCharset} />
      <DipSwitch charset={'SM'} update={updateCharset} />
    </div>
  );
}

export function App(): JSX.Element {
  const [password, updatePasswordOptions] = usePasswordGenerator();
  return (
    <div className="App">
      <main>
        <InfiniScroll render={password} />
      </main>
      <header>
        <Control update={updatePasswordOptions} />
      </header>
    </div>
  );
}
