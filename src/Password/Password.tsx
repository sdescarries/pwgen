import { pwgen } from './pwgenFactory';
import { usePassword } from './usePassword';

export interface FieldProps {
  word: string;
}

export const Field = ({ word }: FieldProps) => 
  (
    <pre>{word}</pre>
  );

export interface PasswordProps {
  generator?: pwgen;
}

export function Password({ generator }: PasswordProps): JSX.Element {
  const value = usePassword(generator);
  return <Field word={value} />;
}
