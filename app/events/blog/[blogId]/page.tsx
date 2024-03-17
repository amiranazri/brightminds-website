"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import BlogData from "../../../../data/blog-data.json";

function BlogDetails() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedArticle, setSelectedArticle] = useState({});

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    const slug = url.split("/events/blog/")[1];

    if (slug) {
      const slugFormatted = slug.split("?")[0];
      const foundArticle =
        BlogData.find((b) => b.blogID == slugFormatted) || {};
      setSelectedArticle(foundArticle);
    }
  }, [pathname, searchParams]);

  const imgProps = {
    src: `/${selectedArticle.img}`,
    alt: selectedArticle.title,
    style: { width: 600, height: 400 },
    className: "mx-auto",
  };

  return (
    <section className="mt-[113px] md:mt-[136px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h1 className="font-extrabold text-gray-900 sm:text-4xl">
          {selectedArticle.title}
        </h1>
      </div>
      <div className="my-8">
        <img {...imgProps} />
      </div>
      <div className="max-w-2xl mx-auto prose">
        {selectedArticle.content &&
          selectedArticle.content.map((item, index) => (
            <div key={index}>
              <h5>{item.keywords}</h5>
              <p className="mb-8">{item.paragraph}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default BlogDetails;
