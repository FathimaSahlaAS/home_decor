// components/Header.tsx
import Link from 'next/link'
import Image from 'next/image'


export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          HomeHues
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link href="/category/living-room" className="hover:text-indigo-600">
            Living Room
          </Link>
          <Link href="/category/bedroom" className="hover:text-indigo-600">
            Bedroom
          </Link>
          <Link href="/category/kitchen" className="hover:text-indigo-600">
            Kitchen
          </Link>
          <Link href="/category/wall-art" className="hover:text-indigo-600">
            Wall Art
          </Link>
          <Link href="/category/lighting" className="hover:text-indigo-600">
            Lighting
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="hover:text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <Link href="/cart" className="hover:text-indigo-600 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              0
            </span>
          </Link>
          
          <Link href="/account" className="hover:text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  )
}