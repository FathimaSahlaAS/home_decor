"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Moon, Sun, User, ShoppingBag, ChevronDown, LogOut, Heart, ShoppingCart, HelpCircle, X, ArrowRight} from "lucide-react";
import { useRouter } from "next/navigation"; // For programmatic navigation

export default function Header() {
  const [cartCount, setCartCount] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Track dark mode state
  const [searchQuery, setSearchQuery] = useState(""); // Track search input
  const router = useRouter(); // Next.js navigation

  // Handle Search
  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      router.push(`/search?q=${searchQuery}`);
    }
  };

  // Handle Theme Toggle
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
  <header
      className={`shadow-md transition-colors duration-300 ${
        darkMode ? "bg-[#1A1A1A] text-[#E6C992]" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="homehues" width={120} height={40} />
          <span className="text-4xl font-extrabold tracking-wide">HomeHues</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-12 text-2xl font-semibold">
          <Link href="/" className="hover:text-[#484848]">Home</Link>
          <Link href="/shop" className="hover:text-[#484848]">Shop</Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-[#484848] flex items-center cursor-pointer focus:outline-none"
            >
              Pages
              <ChevronDown
                aria-hidden="true"
                className={`size-9 flex-none ml-1 transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {dropdownOpen && (
              <div
                className={`absolute left-0 mt-2 w-68 rounded-md shadow-lg transition-opacity z-50 overflow-visible ${
                  darkMode ? "bg-[#1A1A1A] text-[#E6C992]" : "bg-white text-black"
                }`}
              >
                <Link href="/page1" className={`block px-4 py-2 ${ darkMode ? "hover:bg-[#2C2C2C]" : "hover:bg-gray-200"}`} onClick={() => setDropdownOpen(false)}>
                  Blog Page
                </Link>
                <Link href="/page2" className={`block px-4 py-2 ${ darkMode ? "hover:bg-[#2C2C2C]" : "hover:bg-gray-200"}`} onClick={() => setDropdownOpen(false)}>
                  Dashboard
                </Link>
                <Link href="/page3" className={`block px-4 py-2 ${ darkMode ? "hover:bg-[#2C2C2C]" : "hover:bg-gray-200"}`} onClick={() => setDropdownOpen(false)}>
                  Login Page
                </Link>
                <Link href="/page4" className={`block px-4 py-2 ${ darkMode ? "hover:bg-[#2C2C2C]" : "hover:bg-gray-200"}`} onClick={() => setDropdownOpen(false)}>
                  Signup Page
                </Link>
                <Link href="/page5" className={`block px-4 py-2 ${ darkMode ? "hover:bg-[#2C2C2C]" : "hover:bg-gray-200"}`} onClick={() => setDropdownOpen(false)}>
                  Forget Password
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Search Bar & Icons */}
        <div className="flex items-center gap-5">
          {/* Search Bar */}
          <div className="relative hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className={`border rounded-full px-4 py-2 pl-10 w-76 focus:outline-none transition-colors ${
                darkMode ? "bg-transparent border-[#E6C992] text-white" : "bg-gray-100 border-gray-400 text-black"
              }`}
            />
            <Search
              onClick={handleSearch}
              className="absolute left-3 top-2 text-[#E6C992] w-5 h-5 cursor-pointer"
            />
          </div>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="w-6 h-6 cursor-pointer transition">
            {darkMode ? <Moon className="text-[#E6C992]" /> : <Sun className="text-black" />}
          </button>

          {/* User Icon with Dropdown */}
          <div className="relative dropdown-container">
          <button 
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="cursor-pointer"
            >
            <User className={`w-6 h-6 cursor-pointer transition ${darkMode ? "text-[#E6C992]" : "text-black"}`} />
          </button>

          {userDropdownOpen && (
              <div className={`absolute right-0 mt-2 w-64 rounded-md shadow-lg z-50 ${
                darkMode ? "bg-[#121212] border border-[#2C2C2C]" : "bg-white border border-gray-200"
              }`}>
                {/* User Info Section */}
                <div className={`px-4 py-3 border-b ${darkMode ? "border-[#2C2C2C]" : "border-gray-200"}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image src="/profilepic.jpg" alt="User" width={40} height={40} className="rounded-full" />
                    </div>
                    <div>
                      <p className="font-bold">Welcome,</p>
                      <p>Shohag Miah</p>
                    </div>
                  </div>
                </div>
                
                {/* Menu Items */}
                <div>
                  <Link href="/account" className={`flex items-center gap-3 px-4 py-3 ${darkMode ? "hover:bg-[#2C2C2C]" : "hover:bg-gray-100"}`}>
                    <User size={20} />
                    <span>My Account</span>
                  </Link>
                  
                  <Link href="/wishlist" className={`flex items-center gap-3 px-4 py-3 ${darkMode ? "hover:bg-[#2C2C2C]" : "hover:bg-gray-100"}`}>
                    <Heart size={20} />
                    <span>Wishlist</span>
                  </Link>
                  
                  <Link href="/orders" className={`flex items-center gap-3 px-4 py-3 ${darkMode ? "hover:bg-[#2C2C2C]" : "hover:bg-gray-100"}`}>
                    <ShoppingCart size={20} />
                    <span>My Orders</span>
                  </Link>
                  
                  <Link href="/help" className={`flex items-center gap-3 px-4 py-3 ${darkMode ? "hover:bg-[#2C2C2C]" : "hover:bg-gray-100"}`}>
                    <HelpCircle size={20} />
                    <span>Help</span>
                  </Link>
                  
                  <Link href="/logout" className={`flex items-center gap-3 px-4 py-3 border-t ${darkMode ? "border-[#2C2C2C] hover:bg-[#2C2C2C]" : "border-gray-200 hover:bg-gray-100"}`}>
                    <LogOut size={20} />
                    <span>Logout</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setCartOpen(!cartOpen)}
              className="cursor-pointer"
            >
            <ShoppingBag
              className={`w-6 h-6 cursor-pointer transition ${darkMode ? "text-[#E6C992]" : "text-black"}`}
            />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
            </button>
          </div>
        </div>
      </div>
    </header>

    {cartOpen && (
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Overlay */}
        <div 
          className="absolute inset-0" 
          onClick={() => setCartOpen(false)}
        >
        </div>
        
        {/* Cart Sidebar */}
        <div className={`cart-sidebar relative w-full max-w-md h-full ${darkMode ? "bg-[#0D1117]" : "bg-white"} shadow-xl overflow-y-auto flex flex-col`}>
          {/* Cart Header */}
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <h2 className={`text-xl font-bold ${darkMode ? "text-[#E6C992]" : "text-black"}`}>Shopping Cart</h2>
            <button 
              onClick={() => setCartOpen(false)}
              className={`p-1 rounded-full ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"}`}
            >
              <X className={darkMode ? "text-[#E6C992]" : "text-black"} size={24} />
            </button>
          </div>
          
          {/* Cart Body (empty in this case) */}
          <div className="flex-grow flex flex-col justify-center items-center">
            <div className="p-8 text-center">
              {/* You can add empty cart message or cart items here */}
            </div>
          </div>
          
          {/* Cart Footer */}
          <div className="p-4 border-t border-gray-700 mt-auto">
            <div className="flex justify-between items-center mb-4">
              <span className={`text-lg font-semibold ${darkMode ? "text-[#E6C992]" : "text-black"}`}>Your Subtotal:</span>
              <span className="text-lg font-bold text-green-500">$ 0.00</span>
            </div>
            
            <div className="grid gap-3">
              <Link 
                href="/cart" 
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-full border ${
                  darkMode ? "border-gray-600 text-[#E6C992] hover:bg-gray-800" : "border-gray-300 text-black hover:bg-gray-100"
                }`}
              >
                <ShoppingBag size={20} />
                <span>View Cart</span>
              </Link>
              
              <Link 
                href="/checkout" 
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#E6C992] text-black hover:bg-[#b08b2f]"
              >
                <ArrowRight size={20} />
                <span>Checkout Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )}
    </> 
  );
}
