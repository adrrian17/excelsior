import { GoRepo } from 'react-icons/go';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12 py-4 bg-red-700 text-white">
      <span id="logo">Excelsior</span>
      <a
        target="_blank"
        href="https://github.com/adrrian17/excelsior"
        rel="noopener noreferrer"
        className="github-repo"
      >
        <GoRepo className="mr-2" />
        Repo
      </a>
    </nav>
  );
}
