import { charsetLabels, charsetShorts } from '@/Password/';

import { 
  DipSwitchProps,
  useDipSwitchStorage,
} from './useDipSwitchStorage';

interface LabelProps {
  charset: string;
  checked: boolean;
  id: string,
}

export function Label({ id, charset, checked }: LabelProps): JSX.Element {
  const label = charsetLabels[charset];
  const short = charsetShorts[charset];
  const hint = `${checked ? 'disable' : 'enable'} ${label} characters`.toLocaleLowerCase();
  return (
    <label className={'Frame Flame'} htmlFor={id} title={hint}>
      <div className={'Large'}>
        <label className='toggleWrapper' htmlFor={id} >
          <div className='toggle' />
        </label>
        <p className='label'>{label}</p>
      </div>
      <div className={'Small'}>
        <p className='label'>{short}</p>
      </div>
    </label>
  );
}

export function DipSwitch(props: DipSwitchProps): JSX.Element {
  const [checked, toggle] = useDipSwitchStorage(props);
  const id = `dipSwitch-${props.charset}`;
  return (
    <div className={'DipSwitch'} data-testid={id}>
      <input
        checked={checked}
        className={'checkbox'}
        id={id}
        onChange={() => toggle(!checked)}
        type={'checkbox'}
      />
      <Label 
        id={id} 
        charset={props.charset} 
        checked={checked} 
      />
    </div>
  );
}
