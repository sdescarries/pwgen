import { pwgen } from './pwgenFactory';
import { usePassword } from './usePassword';

export interface PasswordProps {
  generator?: pwgen;
}

export function Password({ generator }: PasswordProps): JSX.Element {
  const value = usePassword(generator);
  return <pre>{value}</pre>;
}
