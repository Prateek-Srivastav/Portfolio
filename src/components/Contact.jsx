import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !name || !message) return alert("Please fill all fields.");

    fetch("https://getform.io/f/c8aceaf9-0b18-45cd-a286-1265654865ff", {
      method: "post",
      body: JSON.stringify({
        email: email,
        name: name,
        message,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
      }) // It parses the output
      .catch(function (error) {
        console.log("error---", error);
      });
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-8"
    >
      <form
        onSubmit={handleSubmit}
        // action="https://getform.io/f/c8aceaf9-0b18-45cd-a286-1265654865ff"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            {"//"} Submit the form below or shoot me an email -
            prateek.srvastav@gmail.com
          </p>
        </div>
        <input
          className="bg-[#30314f] p-2 text-gray-300"
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="my-4  bg-[#30314f] p-2 text-gray-300"
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <textarea
          className="bg-[#30314f] p-2 text-gray-300"
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto my-8 flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
