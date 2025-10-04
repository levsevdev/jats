import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Just Alice Transportation Service</p>
        <nav className="flex space-x-4 mt-4 md:mt-0">
          <Link to="/contact">Contact</Link>
          <Link to="/faq" >FAQ</Link>
        </nav>
      </div>
    </footer>
  );
}
