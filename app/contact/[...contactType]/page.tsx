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
  const [isFree, setIsFree] = useState(false);

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    const slug = url.split("/contact/")[1];

    if (slug) {
      const slugFormatted = slug.split("?")[0];
      setIsOpen(false);
      if (slugFormatted === "corporate") setSelectedForm("Corporate");
      else if (slugFormatted === "school")
        setSelectedForm("School Partnership");
      else if (slugFormatted === "student") setSelectedForm("Student Inquiry");
      else if (slugFormatted === "general") setSelectedForm("General");
      else if (slugFormatted === "student/free") {
        setSelectedForm("Student Inquiry");
        setIsFree(true);
      }
    }
  }, [pathname, searchParams]);

  function selectFunc(value: any) {
    setIsOpen(false);
    setSelectedForm(value);
  }

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      updateWindowWidth();
      window.addEventListener("resize", updateWindowWidth);
      return () => {
        window.removeEventListener("resize", updateWindowWidth);
      };
    }
  }, []);

  return (
    <>
      {windowWidth <= 1024 ? (
        <div className="flex flex-col items-center justify-center mt-16 px-8 sm:px-4 md:px-8 lg:px-16">
          <div className="w-[90%] max-w-2xl">
            <h1 className="mt-16 text-center">Register Now</h1>
            <h4 className="text-center">How can we help?</h4>
            <p className="text-justify my-8">
              Your satisfaction is our top priority. Whether you have a question
              about our services, need assistance with registration, or simply
              want to share your feedback, we are here to help. Please feel free
              to reach out using the form below, and our dedicated team will get
              back to you as soon as possible. Thank you for choosing us - we
              look forward to assisting you!
            </p>
            {/* CONTACT INFO ROW */}
            <div
              className="flex flex-row items-center justify-center my-8"
              style={{
                flexWrap:
                  typeof window !== "undefined" && window.innerWidth <= 425
                    ? "wrap"
                    : "nowrap",
              }}
            >
              <ContactInfo
                imgSrc="/icon_location.svg"
                alt="Marker"
                title="Service Locations"
                subTitle="Ipoh, Malaysia"
              />
              <ContactInfo
                imgSrc="/icon_phone.svg"
                alt="Phone"
                title="Phone"
                subTitle="111-232-1134"
              />
              <ContactInfo
                imgSrc="/icon_email.svg"
                alt="Email"
                title="Email"
                subTitle="nfo@brightmindsedu.org"
              />
            </div>
          </div>
          <div className="flex justify-center items-center  mt-8 w-full">
            <div className="flex flex-col items-center w-[70%] mb-16">
              <div className="w-full flex flex-row items-center justify-center">
                <p className="text-sm text-[primary-blue] mr-2">
                  Inquiry Type:
                </p>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className=" bg-white hover:text-[#19598f] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
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
                {/* Dropdown menu */}
                <div
                  id="dropdown"
                  className={`absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ${
                    isOpen ? "" : "hidden"
                  }`}
                  style={{ top: "calc(100% + 0.5rem)", right: "50%" }}
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
                style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
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
                    <RegistrationForm isFree={isFree} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex sm:flex-col md:flex-col lg:flex-row mt-16 justify-center items-center px-8 sm:px-4 md:px-8 lg:px-16">
          <div className="w-[90%] max-w-2xl">
            <h1 className=" mt-16 text-center">CONTACT US</h1>
            <h4 className="text-center">How can we help?</h4>
            <p className="text-justify my-8">
              {`Your satisfaction is our top priority. Whether you have a question
        about our services, need assistance with registration, or simply want
        to share your feedback, we are here to help. Please feel free to reach
        out using the form below, and our dedicated team will get back to you
        as soon as possible. Thank you for choosing us - we look forward to
        assisting you!`}
            </p>
            {/* CONTACT INFO ROW */}
            <div className="flex lg:flex-col sm:fex-row md:fex-row items-center justify-start sm:items-start md:items-start lg:items-start sm:mb-8 md:mb-8 lg:mb-24">
              <ContactInfo
                imgSrc="/icon_location.svg"
                alt="Marker"
                title="Headquarters"
                subTitle="Ipoh, Malaysia"
              />
              <div
                className="cursor-pointer"
                onClick={() => {
                  window.open(`https://wa.me/+60123658903`, "_blank");
                }}
              >
                <ContactInfo
                  imgSrc="/whatsapp.png"
                  alt="Phone"
                  title="Phone (WhatsApp)"
                  subTitle="(+60) 12-365 8903"
                />
              </div>
              <ContactInfo
                imgSrc="/icon_email.svg"
                alt="Email"
                title="Email"
                subTitle="info@brightmindsedu.org"
              />
            </div>
          </div>
          <div className=" sm:mt-0 md:mt-0 lg:mt-16 w-[90%] sm:w-[50%] md:w-[50%] sm:ml-[-16] md:ml-[-16] max-w-2xl">
            <div
              className="flex max-w-[1920px] text-primary-black lg:justify-center lg:items-center "
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
                          <RegistrationForm isFree={isFree} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactUs;
