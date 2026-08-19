import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900">
      <h1 className="text-3xl font-bold text-white">Hello, World!</h1>
      <Link href="/students">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Students
        </button>
      </Link>
    </div>
  );
}
