"use client";

import Image from "next/image";
import ContactInfo from "../ContactInfo";
import FormDropDown from "../FormDropDown";
import { useState } from "react";
import CorporateForm from "../CorporateForm";
import RegistrationForm from "../RegistrationForm";
import SchoolForm from "../SchoolForm";
import GeneralForm from "../GeneralForm";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import contactBanner from "../../../public/contact-us.svg";

function ContactUs() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState("Corporate");

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    const slug = url.split("/contact/")[1];

    if (slug) {
      const slugFormatted = slug.split("?")[0];
      setIsOpen(false);
      if (slugFormatted == "corporate") setSelectedForm("Corporate");
      else if (slugFormatted == "school") setSelectedForm("School Partnership");
      else if (slugFormatted == "student") setSelectedForm("Student Inquiry");
      else if (slugFormatted == "general") setSelectedForm("General");
    }
  }, [pathname, searchParams]);

  function selectFunc(value: string) {
    setIsOpen(false);
    setSelectedForm(value);
  }

  return (
    <>
      <div className="flex flex-col mt-16 px-8 sm:px-4 md:px-8 ">
        <div className="flex flex-col  md:flex-row items-center md:justify-between mx-auto max-w-6xl py-12">
          <div className="justify-center">
            <h3 className=" mt-16">CONTACT US</h3>
            <h6>How can we help?</h6>
            <p className="text-justify my-8 max-w-[80%]">
              {`Your satisfaction is our top priority. Whether you have a question
          about our services, need assistance with registration, or simply want
          to share your feedback, we are here to help. Please feel free to reach
          out using the form below, and our dedicated team will get back to you
          as soon as possible. Thank you for choosing us - we look forward to
          assisting you!`}
            </p>
            {/* CONTACT INFO ROW */}
            <div className="flex flex-col items-center justify-start sm:items-start md:items-start lg:items-start mb-24">
              <ContactInfo
                imgSrc="/icon_location.svg"
                alt="Marker"
                title="Headquarters"
                subTitle="Ipoh, Malaysia"
              />
              <ContactInfo
                imgSrc="/icon_phone.svg"
                alt="Phone"
                title="Phone"
                subTitle="(+60) 111-232-1134"
              />
              <ContactInfo
                imgSrc="/icon_email.svg"
                alt="Email"
                title="Email"
                subTitle="info@brightminds.com"
              />
            </div>
          </div>
          <div className="flex-1">
            <div
              className="flex max-w-[1920px] justify-start text-primary-black m-5 "
              key={selectedForm}
            >
              <div className="flex flex-col md:mb-40 justify-start lg:flex-row-reverse relative">
                <div className="max-w-lg flex flex-col items-center lg:ml-10">
                  <div className="w-[300px] sm:w-[600px] lg:w-[500px] lg:mr-10 lg:mt-0 flex flex-col items-end relative">
                    <div className="flex flex-row items-center">
                      <p className="text-sm text-[primary-blue]">
                        Inquiry Type:
                      </p>
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className=" bg-white hover:text-[#19598f] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center relative z-10"
                        type="button"
                        onClick={() => {
                          setIsOpen(!isOpen);
                        }}
                      >
                        {selectedForm}
                        <svg
                          className="w-2.5 h-2.5 ms-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                          data-dropdown-trigger="click"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>

                      {/* <!-- Dropdown menu --> */}
                      <div
                        id="dropdown"
                        className={`absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ${
                          isOpen ? "" : "hidden"
                        }`}
                        style={{ top: "calc(13%)", right: 0 }}
                        data-dropdown-trigger="click"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700"
                          aria-labelledby="dropdownDefaultButton"
                          data-dropdown-trigger="click"
                        >
                          <li>
                            <div
                              className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                selectFunc("General");
                              }}
                              data-dropdown-trigger="click"
                            >
                              General Inquiry
                            </div>
                          </li>
                          <li>
                            <div
                              className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                selectFunc("Corporate");
                              }}
                              data-dropdown-trigger="click"
                            >
                              Corporate
                            </div>
                          </li>
                          <li>
                            <div
                              className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                selectFunc("Student Inquiry");
                              }}
                            >
                              Student Inquiry
                            </div>
                          </li>
                          <li>
                            <div
                              className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                selectFunc("School Partnership");
                              }}
                            >
                              School Partnership
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* CONTACT FORMS */}
                    <div
                      className="mt-5 w-full rounded-lg border-black mb-8"
                      style={{
                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                      }}
                    >
                      <div
                        className={`w-full h-3 rounded-t-full mb-3 bg-primary-yellow`}
                      ></div>
                      <div className="p-2">
                        {selectedForm === "Corporate" ? (
                          <CorporateForm />
                        ) : selectedForm === "School Partnership" ? (
                          <SchoolForm />
                        ) : selectedForm === "General" ? (
                          <GeneralForm />
                        ) : (
                          <RegistrationForm />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
