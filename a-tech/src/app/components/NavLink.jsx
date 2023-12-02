import Link from "next/link";


const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="flex items-center px-3 py-2 border border-indigo-700 rounded text-cyan-400 hover:text-orange-500 hover:border-primary-700">
      {title}
    </Link>
  );
};

export default NavLink;
