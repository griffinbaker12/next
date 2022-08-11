import Link from 'next/link';

const Index = () => (
  <div>
    <h1>SSR Magician</h1>
    <div>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </div>
    <Link href='/robots'>
      <a>Robots 🤖</a>
    </Link>
  </div>
);

export default Index;
