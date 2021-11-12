import { pwgen } from './pwgenFactory';
import { usePassword } from './usePassword';

export interface FieldProps {
  word: string;
}

export function Field({ word }: FieldProps): JSX.Element {

  const ready = word ? ' Ready' : '';

  return (
    <div className={'Field'}>
      <p className={`Password${ready}`}>{word}</p>
    </div>
  );
}
    
export interface PasswordProps {
  generator?: pwgen;
}

export function Password({ generator }: PasswordProps): JSX.Element {
  const value = usePassword(generator);
  return <Field word={value} />;
}
