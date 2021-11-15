import { PasswordProps } from './types';
import { usePassword } from './usePassword';

export function Password({ generator, seed }: PasswordProps): JSX.Element {
  const word = usePassword({ generator, seed });
  const ready = word ? ' Ready' : '';
  return (<p className={`Password${ready}`} id={`${seed}`}>{word}</p>);
}
