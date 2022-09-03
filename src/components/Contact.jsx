import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-8"
    >
      <form
        method="POST"
        name="prateek.srvastav@gmail.com"
        action="https://getform.io/f/c8aceaf9-0b18-45cd-a286-1265654865ff"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -
            prateek.srvastav@gmail.com
          </p>
        </div>
        <input
          className="bg-[#30314f] p-2 "
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4  bg-[#30314f] p-2 "
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#30314f] p-2 "
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto my-8 flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
