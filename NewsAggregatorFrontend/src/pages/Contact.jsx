/* eslint-disable react/no-unescaped-entities */
export default function Contact() {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="mt-6 text-gray-700 text-center">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <div className="mt-12 max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  