//Contact.jsx
import React from 'react'; 
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import DOMPurify from 'dompurify';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateForm = (formData) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return 'Invalid email format';
    if (formData.message.length < 10) return 'Message too short (min 10 chars)';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const formData = Object.fromEntries(new FormData(formRef.current));
      const validationError = validateForm(formData);
      if (validationError) throw new Error(validationError);

      const cleanData = {
        name: DOMPurify.sanitize(formData.name),
        email: DOMPurify.sanitize(formData.email),
        message: DOMPurify.sanitize(formData.message)
      };

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      setError(error.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 dark:bg-primary bg-white relative">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-heading dark:text-white text-gray-800"
        >
          Get in Touch
        </motion.h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white text-gray-800">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:shreyasmohite001@gmail.com" className="dark:text-gray-300 text-gray-600 hover:text-purple-600 transition-colors">
                    shreyasmohite001@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+919172129218" className="dark:text-gray-300 text-gray-600 hover:text-purple-600 transition-colors">
                    +91 9172129218
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="dark:text-gray-300 text-gray-600">
                    Pune, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white text-gray-800">
                Professional Profiles
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/shreyas-mohite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  LinkedIn
                </a>
                <a
                  href="https://leetcode.com/Shreyasm007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  LeetCode
                </a>
                <a
                  href="https://auth.geeksforgeeks.org/user/shreyasmoe7um"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  GeeksforGeeks
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="dark:bg-tertiary bg-gray-100 p-8 rounded-xl"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium dark:text-white text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg dark:bg-gray-800 bg-white border dark:border-gray-700 border-gray-300 dark:text-white text-gray-900 focus:ring-2 focus:ring-purple-600"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg dark:bg-gray-800 bg-white border dark:border-gray-700 border-gray-300 dark:text-white text-gray-900 focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-white text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 rounded-lg dark:bg-gray-800 bg-white border dark:border-gray-700 border-gray-300 dark:text-white text-gray-900 focus:ring-2 focus:ring-purple-600"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full btn-primary ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {success && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-500 text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-center"
                >
                  {error}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;