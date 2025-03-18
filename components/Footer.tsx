// components/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DecorHub</h3>
            <p className="text-gray-300">Your one-stop shop for beautiful home decor items.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white">Products</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/category/living-room" className="text-gray-300 hover:text-white">Living Room</Link></li>
              <li><Link href="/category/bedroom" className="text-gray-300 hover:text-white">Bedroom</Link></li>
              <li><Link href="/category/kitchen" className="text-gray-300 hover:text-white">Kitchen</Link></li>
              <li><Link href="/category/wall-art" className="text-gray-300 hover:text-white">Wall Art</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <address className="text-gray-300 not-italic">
              123 Decor Street<br />
              Beautiful City, BC 12345<br />
              <a href="mailto:info@decorhub.com" className="hover:text-white">info@decorhub.com</a><br />
              <a href="tel:+1234567890" className="hover:text-white">(123) 456-7890</a>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} DecorHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}