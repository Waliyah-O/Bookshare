import { Link } from "react-router-dom";
import homeImg from "../assets/images/book light.jpg";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <h1>Educating people, protecting the environment</h1>
        <div className="home-buttons">
          <Link to="books">Buy a Book</Link>
          <Link to="signup">Sell your old books</Link>
        </div>
      </div>
      <div className="home-content">
        <p>
          Join us in opening minds, bridging gaps, and making a lasting impact
          on those in need. Together, let's rewrite stories and build a brighter
          future for all.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
