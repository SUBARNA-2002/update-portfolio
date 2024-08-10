import React from "react";

const Contact = () => {
  return (
    <div className="p-8 bg-gray-900 text-white h-screen">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          className="p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="p-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
