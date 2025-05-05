import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_d3v", // Your service ID
        "template_d3v", // Your template ID
        formRef.current,
        "uv-eZ9ievWTBDdsD6" // Your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen w-full bg-blue-75 dark:bg-neutral-950 flex flex-col items-center justify-center px-4 py-12 text-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-zentry uppercase text-center mblue-500 dark:text-blue-400 text-black special-font hero-heading">
        Cont<b>a</b>ct Us
      </h1>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-xl bg-neutral-900 rounded-2xl shadow-lg p-6 sm:p-8 space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-base sm:text-lg font-medium blue-500 dark:text-blue-400">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            required
            className="w-full p-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-base sm:text-lg font-medium blue-500 dark:text-blue-400">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            required
            className="w-full p-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-base sm:text-lg font-medium blue-500 dark:text-blue-400">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            className="w-full p-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message here"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 text-base sm:text-lg font-semibold uppercase bg-blue-500 dark:text-blue-400 text-black rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </div>

        {status && <p className="text-center mt-4 text-sm text-blue-400">{status}</p>}
      </form>
    </div>
  );
}

export default Contact;
