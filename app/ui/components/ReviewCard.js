import Image from "next/image";
import glogo from "/public/google_logo.png";

const ReviewCard = ({ author, authorImg, rating, review, date }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${authorImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="review-card bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8 mx-2 md:mx-4 lg:mx-8 my-4 md:h-56 lg:w-96 relative sm:w-80 md:w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:flex-wrap">
        <div className="author-info flex items-center mb-4 md:mb-0 md:w-full">
          <div
            className="author-image border-1 border-yellow-300 aspect-w-1 aspect-h-1 rounded-full overflow-hidden"
            style={{ width: "60px", height: "60px", ...backgroundImageStyle }}
          />
          <div className="author-details ml-2 md:ml-4">
            <div className="author-name text-sm font-semibold">{author}</div>
            <div className="author-date text-xs text-gray-600">{date}</div>
          </div>
        </div>
        <div className="google-logo absolute top-2 right-2">
          <Image src={glogo} width={30} height={30} alt="Google" />
        </div>
      </div>

      <div className="rating text-xs font-bold mt-2">{rating}</div>

      <div className="review text-sm mt-2">{review}</div>
    </div>
  );
};

export default ReviewCard;
