"use client";

import Image from "next/image";
import ContactInfo from "./ContactInfo";
import FormDropDown from "./FormDropDown";
import { useState } from "react";
import CorporateForm from "./CorporateForm";
import RegistrationForm from "./RegistrationForm";
import SchoolForm from "./SchoolForm";

function ContactUs() {
  const [selectedForm, setSelectedForm] = useState("Corporate");

  return (
    <div className="max-w-[1920px] text-primary-black m-5 mt-[170px] lg:mt-[300px] flex flex-col items-center justify-center lg:flex-row-reverse">
      {/* Text Part */}
      <div className="max-w-lg flex flex-col items-center lg:ml-10">
        <div className="text-primary-yellow font-bold">CONTACT US</div>
        <div className="text-primary-blue text-2xl font-bold mt-3 mb-3">
          How can we help?
        </div>
        <div>
          Your satisfaction is our top priority. Whether you have a question
          about our services, need assistance with an order, or simply want to
          share your feedback, we are here to help. Please feel free to reach
          out using the form below, and our dedicated team will get back to you
          as soon as possible. Thank you for choosing us - we look forward to
          assisting you!
        </div>

        <div className="flex flex-col items-center space-y-3 w-[100%] lg:items-start mt-5">
          <ContactInfo
            imgSrc="/brightminds_logo_1.png"
            alt="Marker"
            title="HEADQUARTERS"
            subTitle="Ipoh, Malaysia"
          />
          <ContactInfo
            imgSrc="/brightminds_logo_1.png"
            alt="Email"
            title="EMAIL"
            subTitle="info@brightminds.com"
          />
          <ContactInfo
            imgSrc="/brightminds_logo_1.png"
            alt="Phone"
            title="PHONE"
            subTitle="(+60) 111-232-1134"
          />
        </div>
      </div>
      {/* Form Part */}
      <div className="w-[300px] sm:w-[600px] lg:w-[500px] lg:mr-10 mt-5 lg:mt-0 flex flex-col items-center relative">
        <FormDropDown setState={setSelectedForm} />
        <div
          className="mt-5 w-full rounded-lg border-black"
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <div
            className={`w-full h-3 rounded-t-full mb-3 ${
              selectedForm === "Corporate"
                ? "bg-primary-blue"
                : selectedForm === "School Partnership"
                ? "bg-gray-500"
                : "bg-primary-yellow"
            }`}
          ></div>
          <div className="p-2">
            {selectedForm === "Corporate" ? (
              <CorporateForm />
            ) : selectedForm === "School Partnership" ? (
              <SchoolForm />
            ) : (
              <RegistrationForm />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
