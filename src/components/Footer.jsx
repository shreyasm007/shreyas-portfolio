//Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shreyas-mohite-750a64227/',
      icon: <FaLinkedin className="w-6 h-6" />
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/shreyasm_007',
      icon: <SiLeetcode className="w-6 h-6" />
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/user/shreyasmoe7um/',
      icon: <SiGeeksforgeeks className="w-6 h-6" />
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/shreyasm007',
      icon: <FaHackerrank className="w-6 h-6" />
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>
                <p className="flex items-center">
                  <span className="font-medium">Location:</span>
                  <span className="ml-2">Pune, Sangli, Maharashtra</span>
                </p>
              </li>
              <li>
                <p className="flex items-center">
                  <span className="font-medium">Email:</span>
                  <a href="mailto:shreyasmohite001@gmail.com" className="ml-2 hover:text-blue-400 transition-colors">
                    shreyasmohite001@gmail.com
                  </a>
                </p>
              </li>
              <li>
                <p className="flex items-center">
                  <span className="font-medium">Phone:</span>
                  <a href="tel:+919172129218" className="ml-2 hover:text-blue-400 transition-colors">
                    +91 9172129218
                  </a>
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-sm text-gray-400">
            © {currentYear} Shreyas Mohite. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;