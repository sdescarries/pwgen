import { charsetLabels } from '@/charset';
import { 
  DipSwitchProps,
  useDipSwitchStorage,
} from '@/useDipSwitchStorage';

export function DipSwitch(props: DipSwitchProps): JSX.Element {

  const [checked, toggle] = useDipSwitchStorage(props);

  const id = `dipSwitch-${props.charset}`;
  const label = charsetLabels[props.charset];
  const hint = `${checked ? 'disable' : 'enable'} ${label} characters`.toLocaleLowerCase();

  return (
    <div className={'DipSwitch'} data-testid={id}>
      <input
        checked={checked}
        className={'checkbox'}
        id={id}
        onChange={() => toggle(!checked)}
        type={'checkbox'}
      />
      <label className={'frame'} htmlFor={id} title={hint}>
        <label className='toggleWrapper' htmlFor={id} >
          <div className='toggle' />
        </label>
        <p className='label'>{label}</p>
      </label>
    </div>
  );
}
