'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-green-600">BellMart</Link>
            <div className="flex items-center space-x-4">
              <Link href="/auth/signup" className="text-gray-600 hover:text-gray-900">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Login Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="text-3xl font-bold">Welcome Back</h2>
              <p className="mt-2 text-gray-600">Login into your account</p>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 flex items-center justify-center px-4 py-2 border rounded-lg hover:bg-gray-50">
                <Image src="/placeholder.svg" alt="Google" width={20} height={20} className="mr-2" />
                Google
              </button>
              <button className="flex-1 flex items-center justify-center px-4 py-2 border rounded-lg hover:bg-gray-50">
                <Image src="/placeholder.svg" alt="Facebook" width={20} height={20} className="mr-2" />
                Facebook
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link href="/auth/recover" className="text-green-600 hover:text-green-500">
                    Recover Password
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Login
              </button>
            </form>

            <p className="text-center text-sm text-gray-600">
              Do not have an account?{' '}
              <Link href="/auth/signup" className="text-green-600 hover:text-green-500">
                Sign Up!
              </Link>
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block lg:flex-1">
          <Image
            src="/placeholder.svg"
            alt="Login"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}