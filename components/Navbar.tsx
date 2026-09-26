
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#e7ded5] bg-[#faf8f5]/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between">

          {/* ================= LEFT - BRAND ================= */}

          <div className="flex items-center gap-5">

            {/* UOVT Logo + Name */}

            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-15 w-15 items-center justify-center rounded-xl bg-[#795548] text-lg font-bold text-white shadow-sm">
                UOVT
              </div>

              <div className="leading-tight">
                <div className="text-lg font-bold tracking-tight text-[#4e342e]">
                  Nipunatha Sisu Saviya
                </div>

                <div className="hidden text-xs text-[#8d8178] sm:block">
                  University of Vocational Technology
                </div>
              </div>
            </Link>


            </div>


          {/* ================= RIGHT - NAVIGATION ================= */}

          <div className="hidden items-center gap-7 lg:flex">

            <NavLink href="/">
              Home
            </NavLink>

            <NavLink href="/apply">
              Apply
            </NavLink>

            <NavLink href="/instructions">
              Instructions
            </NavLink>

            <NavLink href="/contact">
              Contact Us
            </NavLink>

            <NavLink href="/students">
              Students
            </NavLink>

            <NavLink href="/about">
              About
            </NavLink>

          </div>


          {/* ================= MOBILE BUTTON ================= */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-[#5d4037] transition hover:bg-[#eee7e1] lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

        </div>


        {/* ================= MOBILE NAVIGATION ================= */}

        {menuOpen && (
          <div className="border-t border-[#e7ded5] py-4 lg:hidden">

            <div className="mb-4 border-b border-[#e7ded5] pb-4">
              <p className="text-sm font-semibold text-[#795548]">
                Nipunatha Sisu Saviya
              </p>

              <p className="text-xs text-[#8d8178]">
                Student Portal
              </p>
            </div>

            <div className="flex flex-col gap-1">

              <MobileNavLink
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </MobileNavLink>

              <MobileNavLink
                href="/apply"
                onClick={() => setMenuOpen(false)}
              >
                Apply
              </MobileNavLink>

              <MobileNavLink
                href="/instructions"
                onClick={() => setMenuOpen(false)}
              >
                Instructions
              </MobileNavLink>

              <MobileNavLink
                href="/contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </MobileNavLink>

              <MobileNavLink
                href="/students"
                onClick={() => setMenuOpen(false)}
              >
                Students
              </MobileNavLink>

              <MobileNavLink
                href="/about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </MobileNavLink>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}


/* ================= DESKTOP LINK ================= */

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        text-sm
        font-medium
        text-[#6d5a50]
        transition
        duration-200
        hover:text-[#795548]
      "
    >
      {children}
    </Link>
  );
}


/* ================= MOBILE LINK ================= */

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        rounded-lg
        px-4
        py-3
        text-sm
        font-medium
        text-[#6d5a50]
        transition
        duration-200
        hover:bg-[#eee7e1]
        hover:text-[#5d4037]
      "
    >
      {children}
    </Link>
  );
}
