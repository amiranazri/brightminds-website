"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function RegistrationForm() {
  const [buttonClicked, setButtonClicked] = useState(false);
  // const [subjects, setSubjects] = useState([
  //   "English",
  //   "Chinese",
  //   "Malay",
  //   "Finance",
  //   "Leadership",
  //   "Public Speaking",
  // ]);

    const [subjects, setSubjects] = useState([
      "Communication Skills",
      "Financial Literacy",
      "Public Speaking",
      "Critical Analysis",
      "Entrepreneurial Skills",
      "Debate",
      "Leadership Skills",
      "Writing Skills",
  ]);

  function handleSubmit(event) {
    event.preventDefault();

    let isSelected = false;
    const selectedSubjects = [];
    // Loop through checkboxes within the dropdown
    const checkboxes = document
      .getElementById("checkboxGroup")
      .querySelectorAll("input[type='checkbox']");
    for (const checkbox of checkboxes) {
      if (checkbox.checked) {
        isSelected = true;
        selectedSubjects.push(checkbox.name);
      }
    }

    if (!isSelected) {
      toast.warning("Please select at least one subject of interest.");
    } else {
      setButtonClicked(true);

      // Simulate an async action like a form submission
      setTimeout(() => {
        const data = new FormData(event.target);
        const dataArray = [...data.entries()];
        const dataObject = dataArray.reduce((obj, [key, value]) => {
          obj[key] = value;
          return obj;
        }, {});
        const emailPayload = {
          floating_first_name: dataObject.floating_first_name,
          floating_email: dataObject.floating_email,
          emailContent: `
                        <p><b>School Partnership Form</b></p>
                        <p>School Name: ${dataObject.floating_school_name}</p>
                        <p>Country: ${dataObject.floating_country}</p>
                        <p>City: ${dataObject.floating_city}</p>
                        <p>Name of School Representative: ${
                          dataObject.floating_first_name
                        }</p>
                        <p>Position / Title: ${dataObject.floating_position}</p>
                        <p>Phone Number: ${dataObject.floating_phone}</p>
                        <p>Subjects: ${selectedSubjects.join(", ")}</p>
                        ${
                          dataObject.floating_preferred_schedule
                            ? `<p>Preferred Schedule: ${dataObject.floating_preferred_schedule}</p>`
                            : ""
                        }
                    `,
        };
        emailjs
          .send(
            process.env.NEXT_PUBLIC_EMAIL_SERVICE,
            process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
            emailPayload,
            process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
          )
          .then(
            (result) => {
              toast.success("Successfully sent email.");
              event.target.reset();
            },
            (error) => {
              toast.error(
                "Failed to send email. Please try again later or contact us directly."
              );
            }
          );
        setButtonClicked(false);
      }, 2000); // Simulated delay
    }
  }
  return (
    <form className="max-w-xl mx-auto" onSubmit={handleSubmit} method="post">
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="floating_school_name"
          id="floating_school_name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_school_name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          School name <span className="text-red-500">*</span>
        </label>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_country"
            id="floating_country"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_country"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Country <span className="text-red-500">*</span>
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_city"
            id="floating_city"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_city"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            City <span className="text-red-500">*</span>
          </label>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name of school representative{" "}
            <span className="text-red-500">*</span>
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_position"
            id="floating_position"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_position"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Position/Title <span className="text-red-500">*</span>
          </label>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email <span className="text-red-500">*</span>
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="tel"
            pattern="\+?[1-9][0-9]{7,14}"
            name="floating_phone"
            id="floating_phone"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number <span className="text-red-500">*</span>
          </label>
        </div>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <div className="text-gray-500 mb-2 text-sm">
          Subjects: <span className="text-red-500">*</span>
        </div>
        <div id="checkboxGroup" className="w-50 h-28 overflow-y-scroll p-2">
          {subjects.map((s) => (
            <div key={s}>
              <input
                name={s}
                id="checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-sm font-medium text-gray-500"
              >
                {s}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full text-center">
        <button
          type="submit"
          className={`bg-[#19598F] hover:bg-yellow-300 text-white hover:text-black font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 w-auto`}
          disabled={buttonClicked}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;
