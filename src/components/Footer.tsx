import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div>&copy; 2023 CDMBR. All rights reserved.</div>
          <div>
            <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}