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
    <div className="review-card items-center bg-white rounded-lg shadow-md p-6 mx-8 my-32 h-72 w-72 relative">
      <div className="flex justify-between items-start">
        <div className="author-info">
          <div
            className="author-image border-1 border-yellow-300 aspect-w-1 aspect-h-1 rounded-full overflow-hidden"
            style={{ width: "60px", height: "60px", ...backgroundImageStyle }}
          />
          <div className="author-details">
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
