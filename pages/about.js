import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link href='/'>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default About;
