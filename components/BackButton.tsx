
import Link from "next/link";
export function BackButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-sm font-medium text-[#795548] hover:text-[#5d4037]"
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      Back
    </Link>
  );
}
