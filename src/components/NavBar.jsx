import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <div className="flex flex-row justify-between items-center p-4 bg-sky-500 text-white">
      <Link to="/" className="text-xs md:text-lg font-semibold nav-link">Just Alice Transportation Service</Link>
      <div className="flex flex-row space-x-6">
        <Link to="/contact" className="nav-link mx-3 text-xs md:text-md">Contact</Link>
        <Link to="/faq" className="nav-link mx-3 text-xs md:text-md">FAQ</Link>
      </div>
    </div>
  );
}
