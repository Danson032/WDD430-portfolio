
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-950 text-white shadow-lg">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-wide">
          Danson Nganga<span className="text-blue-400">.</span>
        </Link>

        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
