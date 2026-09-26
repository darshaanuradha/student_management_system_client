
import Link from "next/link";
export function BackButton() {
  return (
    <Link
      href="/"
      className="bg-[#795548] text-white hover:bg-[#5d4037] inline-flex items-center gap-2 text-sm font-medium py-2 px-4 rounded-md"
    >
      Back to Home
    </Link>
  );
}
