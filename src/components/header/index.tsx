import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';

const HeaderLink = ({ href, text }: any) => (
  <Link class="flex-1 flex justify-center items-center" href={href}>
    {text}
  </Link>
);

const Header: FunctionalComponent = () => {
  return (
    <header>
      <nav class="bg-gray-500 flex justify-between h-8 lg:justify-around">
        <HeaderLink href="/" text="Home" />
        <HeaderLink href="/profile" text="Me" />
        <HeaderLink href="/profile/john" text="John" />
      </nav>
    </header>
  );
};

export default Header;
