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
    style: { maxWidth: "100%", height: "auto" },
    className: "mx-auto",
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h1 className="font-extrabold text-gray-900 text-3xl sm:text-4xl">
          {selectedArticle.title}
        </h1>
      </div>
      <div className="my-8">
        <img {...imgProps} />
      </div>
      <div className="max-w-full text-justify mx-auto prose">
        {selectedArticle.content &&
          selectedArticle.content.map((item, index) => (
            <div className="mb-8" key={index}>
              <p className="font-bold">{item.keywords}</p>
              <p>{item.paragraph}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default BlogDetails;
