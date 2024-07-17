import { Sun } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 flex justify-evenly w-full p-6">
      <Sun size={24} />
      <ul className='flex gap-3'>
        <li>whatsapp</li>
        <li>github</li>
        <li>linkedin</li>
      </ul>
    </nav>
  )
}

export default Navbar