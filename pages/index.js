import Navbar from "../components/navbar";
import "../styles/tailwind.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Company!</h1>
        <p className="text-lg">
          This is the home page content. Customize it based on your project
          needs.
        </p>
      </div>
    </div>
  );
};

export default Home;
