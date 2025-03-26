import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-serif mb-6">Contact Us</h1>
        <p className="text-gray-600">
          We'd love to hear from you. Please reach out to us through any of the following channels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Phone className="h-8 w-8 mx-auto mb-4 text-gray-800" />
          <h3 className="text-xl font-medium mb-2">Phone</h3>
          <p className="text-gray-600">+1 (555) 123-4567</p>
          <p className="text-gray-600">Mon-Fri: 9am - 6pm</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Mail className="h-8 w-8 mx-auto mb-4 text-gray-800" />
          <h3 className="text-xl font-medium mb-2">Email</h3>
          <p className="text-gray-600">contact@lumiere.com</p>
          <p className="text-gray-600">support@lumiere.com</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <MapPin className="h-8 w-8 mx-auto mb-4 text-gray-800" />
          <h3 className="text-xl font-medium mb-2">Visit Us</h3>
          <p className="text-gray-600">123 Jewelry Lane</p>
          <p className="text-gray-600">New York, NY 10001</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-serif mb-6 text-center">Send Us a Message</h2>
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-serif mb-6">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <Facebook className="h-8 w-8" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <Instagram className="h-8 w-8" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <Twitter className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;