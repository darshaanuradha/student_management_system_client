import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2026 MyApp. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <Link
            href="/about"
            className="text-gray-500 hover:text-gray-900"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-gray-500 hover:text-gray-900"
          >
            Contact
          </Link>

          <Link
            href="/privacy"
            className="text-gray-500 hover:text-gray-900"
          >
            Privacy
          </Link>
        </div>

      </div>
    </footer>
  );
}

