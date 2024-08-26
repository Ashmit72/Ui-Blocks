import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer1 = () => {
  return (
    <footer className="max-w-screen-xl w-full mx-auto border-t bg-background">
      <div className="flex flex-col-reverse mt-6 md:mt-0 md:flex-row justify-between items-start md:items-center md:py-[2rem] px-6 space-y-4 md:space-y-0">
        <div className="border-t mt-5 w-full md:w-auto md:mt-0 md:border-none text-sm text-left md:text-center py-5 md:py-0">
          &copy; 2024 Radian OS LLC
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-[2rem] text-sm md:text-center text-foreground">
          <a href="#" className="">About</a>
          <a href="#" className="">Pricing</a>
          <a href="#" className="">Blog</a>
          <a href="#" className="">Privacy Policy</a>
          <a href="#" className="">Terms of Service</a>
        </div>
        <div className="flex space-x-[1rem] text-muted-foreground">
          <a href="#" className="">
            <FaLinkedin size={'1.25rem'} />
          </a>
          <a href="#" className="">
            <FaYoutube size={'1.25rem'} />
          </a>
          <a href="#" className="">
            <FaTwitter size={'1.25rem'} />
          </a>
          <a href="#" className="">
            <FaInstagram size={'1.25rem'} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer1