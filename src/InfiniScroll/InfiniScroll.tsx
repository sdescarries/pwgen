import { useEffect, useState } from 'react';

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

  return (<p className={'Password'} id={`${id}`}>{word}</p>);
}


export function InfiniScroll({ generator, options: {length} }: InfiniScrollProps): JSX.Element {
  const { grid, standard, list, loader, rotate } = useInfiniScroll(generator);

  const count = list.length;
  const fourFifths = Math.floor(count * 4 / 5);

  const render = (cell: InfiniCell) => <TestCell key={cell.id} {...cell} {...{length}} />;

  return (
    <section className={'InfiniScroll'} ref={grid}>
      <div className={'Standard'} ref={standard}><TestCell {...generator(-1)} /></div>
      <button onClick={rotate} style={{ position: 'absolute'}}>rotate</button>
      <div className={'Grid'}>
        {list.slice(0, fourFifths).map(render)}
        <nav key={-1} ref={loader}/>
        {list.slice(fourFifths).map(render)}
      </div>
    </section>
  );
}

/*
        {list.map(render)}

        {list.slice(0, fourFifths).map((id) => render(id))}
        {render(list[fourFifths], { loader })}
        {list.slice(fourFifths + 1).map((id) => render(id))}

*/