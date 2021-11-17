import { useCallback, useEffect, useState } from 'react';

import { PasswordOptions } from '@/Password';

import { InfiniCell, InfiniGenerator, useInfiniScroll } from './useInfiniScroll';


export type renderInfiniScroll = (key: number) => JSX.Element;

interface ComponentProps {
  seed: number;
  length: number;
  promise?: Promise<string>;
  cancel?: () => void;
}

export interface InfiniScrollProps {
  Component: React.FunctionComponent<ComponentProps>;
  generator: InfiniGenerator;
  options: PasswordOptions;
}


export function TestCell({ id, value, promise, cancel }: InfiniCell): JSX.Element {

  const [word, update] = useState<string>(value);

  useEffect(() => {

    if (promise) {
      promise
        .then((w) => 
          update(w.padEnd(length, '*')))
        .catch(console.warn);
    }
    return cancel;

  }, [promise, cancel]);

  return (<button className={'Password'} id={`${id}`}>{word}</button>);
}


export function InfiniScroll({ generator, options: { length } }: InfiniScrollProps): JSX.Element {
  const { 
    grid, 
    list, 
    loader,
    standard, 
  } = useInfiniScroll(generator);

  const render = useCallback((cell: InfiniCell) => (
    <TestCell key={cell.id} {...cell} {...{ length }} />
  ), [length]);

  return (
    <section className={'InfiniScroll'} ref={grid}>
      <div className={'Standard'} ref={standard}>
        <TestCell {...generator(-1)} />
      </div>
      <div className={'Grid'}>
        {list.map(render)}
        <nav ref={loader} />
      </div>
    </section>
  );
}
