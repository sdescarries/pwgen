import { useCallback } from 'react';

import { InfiniCell, InfiniScrollProps, useInfiniScroll } from './useInfiniScroll';

export type renderInfiniScroll = (key: number) => JSX.Element;

export interface CellProps extends InfiniCell {
  index: number;
}

export function Cell(props: CellProps): JSX.Element {

  const { id, index, length, shred, value = '' } = props;

  const pbcopy = useCallback(() => {
    if (value) {
      navigator
        .clipboard
        .writeText(value)
        .then(() => shred(index))
        .catch(console.warn);
    }
  }, [index, shred, value]);

  const displayWord = value.padEnd(length, '*');

  const classNames = ['Password'];

  if (value) {
    classNames.push('Ready');
  }

  return (
    <button 
      className={classNames.join(' ')} 
      disabled={!value} 
      id={`${id}`} 
      onClick={pbcopy}
    >
      {displayWord}
    </button>
  );
}

export function InfiniScroll(props: InfiniScrollProps): JSX.Element {
  const { 
    grid, 
    list, 
    loader,
    standard, 
  } = useInfiniScroll(props);

  const render = (cell: InfiniCell, index: number) => 
    <Cell key={cell.id} {...cell} index={index} />;

  return (
    <section className={'InfiniScroll'} ref={grid}>
      <div className={'Standard'} ref={standard}>
        <Cell id={-1} {...props} index={-1} shred={() => undefined} />
      </div>
      <div className={'Grid'}>
        {list.map(render)}
        <nav ref={loader} />
      </div>
    </section>
  );
}
