import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <span className="text-2xl font-bold">StreamLine</span>
            <p className="text-gray-300 text-base">Simplifying your workflow, one stream at a time.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Product</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-gray-300 hover:text-white">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-300 hover:text-white">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-gray-300 hover:text-white">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-300 hover:text-white">
                      API Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-300 hover:text-white">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-gray-300 hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-300 hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-300 hover:text-white">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-gray-300 hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-300 hover:text-white">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; 2023 StreamLine, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

