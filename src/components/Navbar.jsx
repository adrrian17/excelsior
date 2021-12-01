import { GoRepo } from 'react-icons/go';

export default function Navbar() {
  return (
    <nav className="flex fixed w-full items-center px-6 py-4 justify-between text-red-700 z-10">
      <div className="flex items-center">
        <span id="logo">Excelsior</span>
      </div>
      <div className="flex items-center">
        <a
          target="_blank"
          href="https://github.com/adrrian17/excelsior"
          rel="noopener noreferrer"
          className="github-repo"
        >
          <GoRepo className="mr-2" />
          Repo
        </a>
      </div>
    </nav>
  );
}
