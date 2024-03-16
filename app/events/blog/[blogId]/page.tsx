"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import BlogData from "../../../../data/blog-data.json";

function BlogDetails() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedArticle, setSelectedArticle] = useState({
    img: "",
    title: "",
    styleType: "",
  });

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    const slug = url.split("/events/blog/")[1];

    if (slug) {
      const slugFormatted = slug.split("?")[0];
      const foundArticle = BlogData.find((b) => b.blogID == slugFormatted) || {
        img: "",
        title: "",
        styleType: "",
      };
      setSelectedArticle(foundArticle);
    }
  }, [pathname, searchParams]);

  const imgProps = {
    src: `/${selectedArticle.img}`,
    alt: selectedArticle.title,
    style: { maxWidth: "100%", height: "auto" },
    className: "mx-auto",
  };

  if (!selectedArticle) {
    return <div>Loading...</div>;
  } else {
    switch (selectedArticle.styleType) {
      case "1":
        return (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {selectedArticle.title}
              </h2>
            </div>
            <div className="my-8">
              <img {...imgProps} />
            </div>
          </section>
        );
      case "2":
        return (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {selectedArticle.title}
              </h2>
            </div>
            <div className="my-8">
              <img {...imgProps} />
            </div>
          </section>
        );
      case "3":
        return (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {selectedArticle.title}
              </h2>
            </div>
          </section>
        );
      case "4":
        return (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {selectedArticle.title}
              </h2>
            </div>
          </section>
        );
      default:
        return <div>Blog not found</div>;
    }
  }
}

export default BlogDetails;
