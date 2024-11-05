"use client";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { CarIcon, Check, LocateIcon, ShoppingBasket, User } from "lucide-react";


export default function Navbar(){

    return(
        <>
            <nav className="top-nav ">
                <div className="flex justify-between align-center p-4 border-b">
                    <div className="user-greeting">
                        <h3 className="text-lg text-black">Welcom <span className="text-green-600 font-bold">Edward</span></h3>
                    </div>
                    <div className="user-actions">
                        <div className="flex justify-between gap-6">
                        <Link href="/deliver" className="flex gap-2 text-sm text-gray-600 hover:text-gray-900">
                            <CarIcon className="text-green-600" />
                            Deliver to Address
                        </Link>
                        <Link href="/deliver" className="flex gap-2 text-sm text-gray-600 hover:text-gray-900">
                            <LocateIcon className="text-green-600" />
                            Track your Request
                        </Link>
                        <Link href="/deliver" className="flex gap-2 text-sm text-gray-600 hover:text-gray-900">
                            <Check className="text-green-600" />
                            All Offers
                        </Link>
                        
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="border-b">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                <Link href="/" className="flex items-center">
                    <span className="text-2xl font-bold text-green-600">Bell</span>
                    <span className="text-2xl font-bold text-gray-900">Mart</span>
                </Link>
                </div>
                <div className="flex-1 max-w-2xl mx-4">
                <div className="relative">
                    <input
                    type="text"
                    placeholder="Search essentials, groceries and more..."
                    className="w-[550px] px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500 bg-[#F3F9FB] border-none"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    </div>
                </div>
                </div>
                <div className="flex items-center space-x-4">
                <Link href="/auth/login" className="flex gap-2 text-sm text-gray-600 hover:text-gray-900 font-bold border-r pr-4">
                    <User />
                    Sign Up/Sign In
                </Link>
                <Link href="/requests" className="flex gap-2 text-sm text-gray-600 hover:text-gray-900">
                    <ShoppingBasket />
                    Requests
                </Link>
                <ThemeToggle />
                </div>
            </div>
            </div>
        </nav>

        </>
    )
}