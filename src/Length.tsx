import { LengthProps, useLengthStorage } from '@/useLengthStorage';

export function Length(props: LengthProps): JSX.Element {

  const [length, toggle] = useLengthStorage(props);

  const id = 'Length';
  const hint = 'change the length of the password';

  return (
    <button
      className={'Length'} data-testid={id}
      onClick={() => toggle()}
      type={'submit'}
      title={hint}
    >{length}</button>
  );
}
