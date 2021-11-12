import { InfiniScrollProps, useInfiniScroll } from './useInfiniScroll';

export function InfiniScroll({ length, render }: InfiniScrollProps): JSX.Element {
  const { list, loader } = useInfiniScroll();

  const style = {
    '--length': `${length}rem`
  };

  return (
    <section className={'InfiniScroll'}>
      <div className={'Grid'} style={style}>
        {list.map(render)}
        <nav ref={loader} />
      </div>
    </section>
  );
}
