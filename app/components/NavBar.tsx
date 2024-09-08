import { Link } from '@tanstack/react-router'

export function NavBar() {
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="px-4 mx-auto w-full">
        <div className="flex justify-between items-center h-16">
          <div className="space-x-8">
            <Link
              to="/"
              className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
            >
              About
            </Link>
          </div>
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out ml-auto"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}
