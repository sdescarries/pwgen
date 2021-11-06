import { InfiniScrollProps, useInfiniScroll } from '@/useInfiniScroll';

export function InfiniScroll({ render }: InfiniScrollProps): JSX.Element {
  const { list, loader } = useInfiniScroll();
  return (
    <section className={'InfiniScroll'}>
      {list.map(render)}
      <nav ref={loader} />
    </section>
  );
}
