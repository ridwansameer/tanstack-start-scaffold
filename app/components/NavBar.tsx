import { Link } from '@tanstack/react-router'
import { Button } from './ui/button'

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
            <Link
              to="/posts"
              className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
            >
              Posts
            </Link>
          </div>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
