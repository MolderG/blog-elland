import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
export function Footer() {
  return (
    <div className="bg-gray-200 text-white py-8 w-full">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between max-w-5xl">
        <div className="flex items-center space-x-4">
          <Link
            href="#"
            className="text-white hover:text-gray-300"
            prefetch={false}
          >
            <FaLinkedin className="h-6 w-6" />
            <span className="sr-only">Linkedin</span>
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300"
            prefetch={false}
          >
            <FaFacebook className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300"
            prefetch={false}
          >
            <FaInstagram className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
        <p className="mt-4 md:mt-0 text-sm text-gray-300">
          &copy; 2024 Acme Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}
