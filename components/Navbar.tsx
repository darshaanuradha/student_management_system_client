"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          D.Anuradha
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900"
          >
            Home
          </Link>

          <Link
            href="/students"
            className="text-gray-600 hover:text-gray-900"
          >
            Students
          </Link>

          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-900"
          >
            Contact
          </Link>
        </div>

        {/* Login Button */}
        <Link
          href="/login"
          className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

