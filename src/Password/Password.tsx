import { pwgen } from './pwgenFactory';
import { usePassword } from './usePassword';

export interface FieldProps {
  seed: number;
  word: string;
}

export function Field({ seed, word }: FieldProps): JSX.Element {

  const ready = word ? ' Ready' : '';

  return (
    <div className={'Field'} id={`${seed}`}>
      <p className={`Password${ready}`}>{word}</p>
    </div>
  );
}
    
export interface PasswordProps {
  generator?: pwgen;
  seed: number;
}

export function Password({ generator, seed }: PasswordProps): JSX.Element {
  const value = usePassword({ generator, seed });
  return <Field word={value} seed={seed} />;
}
