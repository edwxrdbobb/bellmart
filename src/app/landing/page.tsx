"use client"
import Link from 'next/link'
import Image from 'next/image'
import banner_model_img from "@/assets/images/banner-girl.png"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Landing() {
  const smartphones = [
    {
      name: "Galaxy S23 Ultra",
      price: "Le 20,000,000",
      image: "https://spellboundelectronics.com/wp-content/uploads/2023/03/S23-ULTRA.png",
      active: 3,
      time: "2 hours ago"
    },
    {
      name: "Galaxy A54 5G",
      price: "Le 8,000,000",
      image: "https://www.cnet.com/a/img/resize/eaa9992fe8eae02a6a98098c23d3eda12fa9d44f/hub/2023/05/18/2687e59f-1d0d-4cb5-a9c4-3273ef6bb0ea/samsung-galaxy-a54-5g-cnet-review-3.jpg?auto=webp&fit=crop&height=1200&width=1200",
      active: 5,
      time: "3 hours ago"
    },
    {
      name: "Galaxy S23 Plus",
      price: "Le 18,000,000",
      image: "https://image-us.samsung.com/us/smartphones/galaxy-s23/configurator/D1_D2-KV-Configurator-800x600.jpg",
      active: 2,
      time: "5 hours ago"
    },
    {
      name: "Iphone 15",
      price: "Le 15,000,000",
      image: "https://i.ytimg.com/vi/s1XVb4mdELc/maxresdefault.jpg",
      active: 4,
      time: "1 day ago"
    },
    {
      name: "OnePlus Fold",
      price: "Le 17,000,000",
      image: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/openoneplus1header.jpeg",
      active: 1,
      time: "2 days ago"
    }
  ]

  const categories = [
    { name: 'Mobile', icon: '📱' },
    { name: 'Cosmetics', icon: '💄' },
    { name: 'Electronics', icon: '🔌' },
    { name: 'Furniture', icon: '🪑' },
    { name: 'Watches', icon: '⌚' },
    { name: 'Decor', icon: '🏠' },
    { name: 'Accessories', icon: '👔' }
  ]

  const skills = [
    {
      title: "Become a Delivery Driver",
      description: "Deliver products to customers",
      image: "/placeholder.svg?height=150&width=300",
      color: "bg-gray-100"
    },
    {
      title: "Delivery Driver",
      description: "Deliver products to customers",
      image: "/placeholder.svg?height=150&width=300",
      color: "bg-yellow-100"
    },
    {
      title: "Repair & Mechanic",
      description: "Fix and repair products",
      image: "/placeholder.svg?height=150&width=300",
      color: "bg-orange-100"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="bg-primary text-white py-12 rounded-lg relative mx-16">
        <div className="flex justify-between align-center slider-btns absolute w-full h-full" >
          <button className="btn-left rounded-full bg-white border border-2 border-white w-[75px] h-[75px]">
            <ChevronLeft className='txt-primary w-[25px] h-[25px]' />
          </button>

          <button className=" btn-right rounded-full bg-white border border-2 border-white w-[75px] h-[75px]">
            <ChevronRight className='txt-primary w-[25px] h-[25px]' />
          </button>

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="">
              <h2 className="text-[30px] mb-2" style={{fontWeight: 300}}>Revolutionizing online markets in Sierra Leone</h2>
              <h1 className="text-[55px] font-bold mb-4">Request Product</h1>
              <p className="text-[30px] mb-4" style={{fontWeight: 300}}>get offers from stores.</p>
              {/* <button className="px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100">
                Get Started
              </button> */}
            </div>
            <div className="hidden md:block">
              <Image
                src={banner_model_img}
                alt="Hero image"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Smartphones Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Requests for Smartphones</h2>
          <Link href="/smartphones" className="text-green-600 hover:text-green-700">View all</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {smartphones.map((phone, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <img
                src={phone.image}
                alt={phone.name}
                className="w-full h-[200px] mb-4 object-cover rounded-lg"
              />
              <h3 className="font-semibold mb-2">{phone.name}</h3>
              <p className="text-green-600 font-bold">{phone.price}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-500">{phone.active} active</span>
                <span className="text-sm text-gray-500">{phone.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Shop From Stores</h2>
          <Link href="/categories" className="text-green-600 hover:text-green-700">View all</Link>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl mb-2">
                {category.icon}
              </div>
              <span className="text-sm text-gray-600">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Offer your skills Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Offer your skills</h2>
          <Link href="/skills" className="text-green-600 hover:text-green-700">View all</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className={`rounded-lg overflow-hidden ${skill.color}`}>
              <Image
                src={skill.image}
                alt={skill.title}
                width={300}
                height={150}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-600 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">BellMart</h3>
              <div className="space-y-2">
                <p className="font-semibold">Contact Us</p>
                <p>WhatsApp</p>
                <p>+232 78 002 001</p>
                <p>Call Us</p>
                <p>+232 88 098 903</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Most Popular Categories</h4>
              <ul className="space-y-2">
                <li>Staples</li>
                <li>Beverages</li>
                <li>Personal Care</li>
                <li>Home Care</li>
                <li>Baby Care</li>
                <li>Vegetables & Fruits</li>
                <li>Snacks & Foods</li>
                <li>Dairy & Bakery</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Services</h4>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Terms & Conditions</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
                <li>E-waste Policy</li>
                <li>Cancellation & Return Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Download App</h4>
              <div className="flex space-x-4">
                <Image
                  src="/placeholder.svg"
                  alt="App Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
                <Image
                  src="/placeholder.svg"
                  alt="Play Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-green-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-sm">© 2024 All rights reserved. BellMart</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

