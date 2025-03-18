// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  // In a real application, you would fetch this data from your database
  const featuredCategories = [
    { id: 1, name: 'Living Room', slug: 'living-room', image: '/placeholder-category.jpg' },
    { id: 2, name: 'Bedroom', slug: 'bedroom', image: '/placeholder-category.jpg' },
    { id: 3, name: 'Kitchen', slug: 'kitchen', image: '/placeholder-category.jpg' },
    { id: 4, name: 'Wall Art', slug: 'wall-art', image: '/placeholder-category.jpg' },
  ]
  
  const featuredProducts = [
    { id: 1, name: 'Decorative Vase', price: 29.99, image: '/placeholder-product.jpg' },
    { id: 2, name: 'Throw Pillow', price: 19.99, image: '/placeholder-product.jpg' },
    { id: 3, name: 'Wall Clock', price: 39.99, image: '/placeholder-product.jpg' },
    { id: 4, name: 'Table Lamp', price: 49.99, image: '/placeholder-product.jpg' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Transform Your Space</h1>
          <p className="text-xl md:text-2xl mb-8">Discover beautiful home decor that reflects your style</p>
          <Link href="/products" className="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100">
            Shop Now
          </Link>
        </div>
      </section>
      
      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category) => (
              <Link href={`/category/${category.slug}`} key={category.id} className="group">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition transform hover:scale-105">
                  <div className="h-48 bg-gray-300 relative">
                    {/* Replace with actual images */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      <span>Image Placeholder</span>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-medium">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="h-48 bg-gray-200 relative">
                  {/* Replace with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <span>Image Placeholder</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  <p className="text-indigo-600 font-bold">${product.price.toFixed(2)}</p>
                  <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-6">Stay updated with our latest products and offers</p>
          <form className="flex flex-col md:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button 
              type="submit" 
              className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}