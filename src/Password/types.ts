export interface CharsetState {
  [key: string]: boolean,
}

export interface CharsetLabels {
  [key: string]: string;
}

export type WordGenerator = () => Promise<string>;

export interface PasswordContext {
  generator: WordGenerator;
  options: PasswordOptions;
  update: UpdatePasswordOptions;
}

export interface PasswordProps {
  generator?: WordGenerator;
  seed: number;
}

export interface PasswordOptions {
  charset: CharsetState;
  length: number;
}

export type PasswordUserOptions = Partial<PasswordOptions>;
export type PasswordRenderer = (key: number) => JSX.Element;
export type UpdatePasswordOptions = (options: PasswordUserOptions) => void;
