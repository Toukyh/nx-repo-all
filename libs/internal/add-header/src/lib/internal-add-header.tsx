import Header from './header/header';

/* eslint-disable-next-line */
export interface InternalAddHeaderProps {}

export function InternalAddHeader(props: InternalAddHeaderProps) {
  return (
    <div className="bg-stone-600/10">
      <Header />
    </div>
  );
}

export default InternalAddHeader;
