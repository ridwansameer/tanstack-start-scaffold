import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Home</h1>
      <p className="text-gray-700 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat
        velit nec ante sagittis, quis feugiat nunc tincidunt. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices.
      </p>
      <p className="text-gray-700 mb-4">
        Fusce euismod, nisi vel tincidunt lacinia, nunc elit aliquam mauris, vel
        tincidunt nunc nunc eu nisi. Sed euismod, nunc vel tincidunt lacinia,
        nunc elit aliquam mauris, vel tincidunt nunc nunc eu nisi.
      </p>
      <p className="text-gray-700">
        Donec auctor, nisl eget ultricies tincidunt, nunc elit aliquam mauris,
        vel tincidunt nunc nunc eu nisi. Sed euismod, nunc vel tincidunt
        lacinia, nunc elit aliquam mauris, vel tincidunt nunc nunc eu nisi.
      </p>
    </div>
  )
}
