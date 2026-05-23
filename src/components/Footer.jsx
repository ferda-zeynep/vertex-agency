import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mx-auto py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 bg-black text-neutral-100 px-6 sm:px-12 lg:px-20 border-t border-neutral-900">
      {/* LEFT COLUMN: BRAND & SOCIALS */}
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex items-center py-3 tracking-tight">
            <span className="text-2xl font-bold text-white">
              Vertex<span className="text-green-500">Agency</span>
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Copyright © {new Date().getFullYear()} Vertex Agency.
          </p>
          <p className="text-xs text-gray-500 mt-1">All rights reserved.</p>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex gap-5 mt-6 text-gray-400">
          <a
            href="https://linkedin.com/in/ferda-zeynep-%C3%A7apa-643165256/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/ferda-zeynep"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="#"
            className="hover:text-green-500 transition-colors duration-200"
          >
            <FaSquareXTwitter size={24} />
          </a>
          <a
            href="#"
            className="hover:text-green-500 transition-colors duration-200"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* RIGHT COLUMNS: LINKS & NEWSLETTER */}
      <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
        {/* COMPANY LINKS */}
        <div>
          <h6 className="font-semibold text-gray-100 tracking-wider uppercase text-xs">
            Company
          </h6>
          <ul className="text-gray-400 mt-4 space-y-2">
            <li className="text-sm hover:text-green-500 transition-colors duration-150 cursor-pointer">
              About us
            </li>
            <li className="text-sm hover:text-green-500 transition-colors duration-150 cursor-pointer">
              Blog
            </li>
            <li className="text-sm hover:text-green-500 transition-colors duration-150 cursor-pointer">
              Contact us
            </li>
            <li className="text-sm hover:text-green-500 transition-colors duration-150 cursor-pointer">
              Pricing
            </li>
            <li className="text-sm hover:text-green-500 transition-colors duration-150 cursor-pointer">
              Testimonials
            </li>
          </ul>
        </div>

        {/* SUPPORT LINKS */}
        <div>
          <h6 className="font-semibold text-gray-100 tracking-wider uppercase text-xs">
            Support
          </h6>
          <ul className="text-gray-400 mt-4 space-y-2">
            <li className="text-sm hover:text-green-500 transition-colors duration-150 cursor-pointer">
              Help center
            </li>
            <li className="text-sm hover:text-green-500 transition-colors duration-150 cursor-pointer">
              Terms of service
            </li>
            <li className="text-sm hover:text-green-500 transition-colors duration-150 cursor-pointer">
              Legal
            </li>
            <li className="text-sm hover:text-green-500 transition-colors duration-150 cursor-pointer">
              Privacy policy
            </li>
            <li className="text-sm hover:text-green-500 transition-colors duration-150 cursor-pointer">
              Status
            </li>
          </ul>
        </div>

        {/* NEWSLETTER INPUT */}
        <div className="col-span-2 md:col-span-1">
          <h6 className="font-semibold text-gray-100 tracking-wider uppercase text-xs">
            Stay up to date
          </h6>
          <div className="relative mt-4">
            <input
              className="bg-neutral-800 p-3 pr-10 flex w-full rounded-md text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition-all"
              type="email"
              placeholder="Your email address"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer hover:opacity-80 transition-opacity">
              <img
                className="h-5 w-5"
                src="/assets/send.svg"
                alt="Submit email"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
