"use client";

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

async function About() {
  const router = useRouter();

  const handleContactUs = () => {
    router.push("/contact");
  };
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-auto max-w-6xl py-12 px-16">
        <div className="flex-1">
          <Image
            src="/about-1.svg"
            alt="Bright Minds logo"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className=" font-bold mb-4">What Is Bright Minds?</h3>
          <p className="text-gray-600 mb-8" style={{ textAlign: "justify" }}>
            We are a centre of learning that aims to equip students with
            relevant skills to take on the modern world. Going beyond classroom
            education, our courses supplement traditional learning with
            practical knowledge.
          </p>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <h6>CONTACT US</h6>
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row space-x-4 space-y-4 items-center justify-between mx-auto max-w-6xl py-12 px-16">
        <div className="flex-1 text-center md:text-left">
          <h3 className=" font-bold mb-4">
            Navigating the Gap Between Education and Industry{" "}
          </h3>
          <p className="text-gray-600 mb-8" style={{ textAlign: "justify" }}>
            Despite the historically high production of around 50,000 graduates
            annually, a significant number of them face unemployment due to a
            lack of relevant skills. The disconnect between traditional
            education and the evolving demands of society contributes to
            graduates being ill-equipped for the competitive job market. This
            highlights the pressing issue of the education system's failure to
            adapt quickly, leaving many students functionally illiterate and
            unprepared for real-world challenges.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/about-2.svg"
            alt="Bright Minds logo"
            width={400}
            height={400}
            className="rounded-lg ml-32"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-auto max-w-6xl py-12 px-16">
        <div className="flex-1">
          <Image
            src="/about-1.svg"
            alt="Bright Minds logo"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className=" font-bold mb-4">
            Nurturing Future Leaders with Modern Education{" "}
          </h3>
          <p className="text-gray-600 mb-8" style={{ textAlign: "justify" }}>
            Bright Minds is dedicated to providing education and training that
            equips students with the skills needed to navigate today's rapidly
            changing world. Recognizing the limitations of traditional
            education, we aim to supplement it by focusing on relevant skills
            essential for success in the evolving society. The modern teaching
            methods at Bright Minds prioritize student-centered learning to
            ensure a tailored approach, with our current courses designed to
            foster 21st Century Skills.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
