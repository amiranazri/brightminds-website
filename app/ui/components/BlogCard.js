const BlogCard = ({ blogData, handleNavigation }) => {
  const handleReadMoreClick = (article) => {
    handleNavigation(`/events/blog/${article.blogID}`);
  };

  const reversedArticlesData = blogData.slice().reverse();

  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {reversedArticlesData.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => handleReadMoreClick(article)}
            style={{ borderRadius: "8px 8px 0 0" }}
          >
            <img
              src={`/${article.img}`}
              alt={article.title}
              className="w-full h-64 mt-4 object-cover object-center"
              style={{ borderRadius: "8px 8px 0 0" }}
            />
            <div className="p-4" style={{ minHeight: "148px" }}>
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="text-sm text-gray-700 mt-2">
                {article.description}
              </p>
            </div>
            <div className="p-4 flex justify-center items-center">
              <button
                onClick={() => handleReadMoreClick(article)}
                className="w-90 bg-[#19598F] hover:bg-yellow-300 text-white hover:text-black font-bold py-2 px-4 rounded"
                style={{ width: "100%" }}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCard;
