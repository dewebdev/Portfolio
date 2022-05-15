import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center"
    >
      <form
        action="https://getform.io/f/e014851c-e797-463c-a708-9dd20f30cf23"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-gray-300 text-4xl font-bold inline border-b-4 border-pink-600">
            Contact
          </p>
          <p className="text-gray-300 pt-4">
            Submit the form below or shoot a email at dhanushshetty201@gmail.com
          </p>
        </div>
        <input
          type="text"
          className="bg-[#ccd6f6] w-full p-4"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          className="bg-[#ccd6f6] w-full mt-4 p-4"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="w-full p-4 mt-4 bg-[#ccd6f6]"
          placeholder="Message"
          name="message"
        />
        <button className="mt-4 font-bold text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
