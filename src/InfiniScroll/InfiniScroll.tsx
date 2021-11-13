import { InfiniScrollProps, useInfiniScroll } from './useInfiniScroll';

export function InfiniScroll({ render }: InfiniScrollProps): JSX.Element {
  const { grid, list, loader } = useInfiniScroll();

  const { length } = list;
  const fourFifths = Math.floor(length * 4 / 5);

  return (
    <section className={'InfiniScroll'} ref={grid}>
      <div className={'Grid'}>
        {list.slice(0, fourFifths).map(render)}
        <nav ref={loader}>{render(list[fourFifths])}</nav>
        {list.slice(fourFifths + 1).map(render)}
      </div>
    </section>
  );
}
