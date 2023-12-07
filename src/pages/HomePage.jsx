import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>You got the plans we got the rigs.</h1>
      <p>
        Add adventure to your life by joining the #bookshare movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <div className="home-buttons">
        <Link to="vans">Find a Book</Link>
      </div>
    </div>
  );
};

export default HomePage;
