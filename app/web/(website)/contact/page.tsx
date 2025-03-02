"use client"; // Required for using useState

import { useState, useEffect } from "react";
import { GlobeDemo } from "./globe-component";

type FormDataState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormDataState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      console.log("Submitting form data:", formData); // Debugging
  
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      
      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An unexpected error occurred.");
    }
  };
  
  

  // Ensure body background color is consistent with the page background
  useEffect(() => {
    document.body.style.backgroundColor = "#f3f4f6"; // Tailwind's `bg-gray-100`
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start justify-center p-6 bg-gray-100 pt-[120px]"> 
      {/* Added pt-[100px] to push both sections down under the purple navbar */}

      {/* Left Section (Contact Us) */}
      <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md self-start">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700">
          Contact us at{" "}
          <a href="mailto:lifesight@gmail.com" className="text-blue-600 font-semibold">
            lifesight@gmail.com
          </a>{" "}
          or fill out the form to share your experience with LifeSight and let us know how we can assist you.
        </p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Feedback and Suggestions</h3>
          <p className="text-gray-600 mt-2">
            Your feedback helps us continually improve LifeSight App and support
            our mission in uplifting the lives of individuals with visual
            impairments.
          </p>
          <a
            href="https://forms.gle/ga8at3Nz5PSSV81C9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold block mt-3"
          >
            Click here to access the Feedback Form for visually impaired individuals.
          </a>
        </div>
        <GlobeDemo/>
      </div>

      {/* Right Section (Get in Touch) */}
      <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md md:ml-6 self-start">
        <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
  <div className="md:col-span-1">
    <label className="block text-gray-700">First Name</label>
    <input
      type="text"
      name="firstName"
      value={formData.firstName}
      onChange={handleChange}
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />
  </div>
  <div className="md:col-span-2">
    <label className="block text-gray-700">Last Name</label>
    <input
      type="text"
      name="lastName"
      value={formData.lastName}
      onChange={handleChange}
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />
  </div>
</div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              //placeholder="example@domain.com"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Contact Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              //placeholder="+94"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              maxLength={120}
              placeholder="Type your message here"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4">
          By contacting us, you agree to our{" "}
          <a href="#terms-of-service" className="text-blue-600 font-semibold">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#privacy-policy" className="text-blue-600 font-semibold">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
