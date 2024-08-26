import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer2 = () => {
  return (
    <footer className="bg-white py-10 border-t">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between text-gray-700">
        {/* Left section */}
        <div className="w-full lg:w-1/5 mb-8 lg:mb-0">
          <div className="flex items-center mb-4">
            {/* Logo */}
            <img src="Radian.png" alt="Radian Logo" className="" />
          </div>
          <p className="text-sm">
            Empowering next generation of digital thinkers and creatives
          </p>
        </div>

        {/* Center sections */}
        <div className="w-full lg:w-4/5 flex flex-wrap justify-between">
          <div className="w-1/2 sm:w-1/4 mb-8 lg:mb-0">
            <h3 className="text-sm font-semibold mb-3">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm">Watch Demo</a></li>
              <li><a href="#" className="text-sm">Pricing</a></li>
              <li><a href="#" className="text-sm">Features</a></li>
              <li><a href="#" className="text-sm">Product Roadmap</a></li>
              <li><a href="#" className="text-sm">Download app</a></li>
              <li><a href="#" className="text-sm">My Custom Link</a></li>
            </ul>
          </div>

          <div className="w-1/2 sm:w-1/4 mb-8 lg:mb-0">
            <h3 className="text-sm font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm">About</a></li>
              <li><a href="#" className="text-sm">Careers</a></li>
              <li><a href="#" className="text-sm">Customers</a></li>
              <li><a href="#" className="text-sm">Newsroom</a></li>
              <li><a href="#" className="text-sm">Become a partner</a></li>
            </ul>
          </div>

          <div className="w-1/2 sm:w-1/4 mb-8 lg:mb-0">
            <h3 className="text-sm font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm">Help Center</a></li>
              <li><a href="#" className="text-sm">Blog Articles</a></li>
              <li><a href="#" className="text-sm">FAQs</a></li>
              <li><a href="#" className="text-sm">Contact us</a></li>
              <li><a href="#" className="text-sm">Community</a></li>
            </ul>
          </div>

          <div className="w-1/2 sm:w-1/4">
            <h3 className="text-sm font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-sm">Cookie Policy</a></li>
              <li><a href="#" className="text-sm">Other Policies</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-wrap items-center justify-between border-t pt-5 mt-5 text-sm text-left md:text-center">
        <p className="w-full md:w-auto">&copy; 2024 Radian OS LLC. All Rights Reserved</p>
        <div className="flex space-x-4 mt-5 md:mt-0">
          {/* Social media icons */}
          <a href="#" aria-label="LinkedIn"><img src="/path/to/linkedin.png" alt="LinkedIn" className="h-5 w-5"/></a>
          <a href="#" aria-label="YouTube"><img src="/path/to/youtube.png" alt="YouTube" className="h-5 w-5"/></a>
          <a href="#" aria-label="Twitter"><img src="/path/to/twitter.png" alt="Twitter" className="h-5 w-5"/></a>
          <a href="#" aria-label="Instagram"><img src="/path/to/instagram.png" alt="Instagram" className="h-5 w-5"/></a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer2