import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <div className="flex flex-row justify-between items-center p-4 bg-sky-500 text-white">
      <Link to="/" className="text-lg font-bold">Just Alice Transportation Service</Link>
      <div className="flex flex-row space-x-6">
        <Link to="/contact" className="hover:underline mx-3">Contact</Link>
        <Link to="/faq" className="hover:underline mx-3">FAQ</Link>
      </div>
    </div>
  );
}
