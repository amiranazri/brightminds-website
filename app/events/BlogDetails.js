import React from "react";

const BlogDetails = ({ selectedArticle }) => {
  console.log("Selected Article in BlogDetails:", selectedArticle);

  if (!selectedArticle || !selectedArticle.styleType) {
    return <div>Loading...</div>;
  }

  const renderLayout = () => {
    const imgProps = {
      src: `/${selectedArticle.img}`,
      alt: selectedArticle.title,
      style: { width: 600, height: 400 },
      className: "mx-auto",
    };

    switch (selectedArticle.styleType) {
      case 1:
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
      case 2:
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
      case 3:
        return (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {selectedArticle.title}
              </h2>
            </div>
          </section>
        );
      case 4:
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
        return null;
    }
  };

  return renderLayout();
};

export default BlogDetails;
