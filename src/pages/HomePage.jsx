import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Educating people, protecting the environment</h1>
      <p>
        Add adventure to your life by joining the #bookshare movement. BookShare
        Initiative, a non-governmental organization, champions 'readcycling' to
        enhance education in Nigeria. By collecting, processing, and
        distributing quality donated books and educational materials, we divert
        donors to empower institutions, community libraries, and individuals.
        Our platform combines the magic of literature with community compassion,
        creating pathways to knowledge and empowerment. Join us in opening
        minds, bridging gaps, and making a lasting impact on those in need.
        Together, let's rewrite stories and build a brighter future for all.
      </p>
      <div className="home-buttons">
        <Link to="books">Find a Book</Link>
        <Link to="books">Donate???????</Link>
      </div>
    </div>
  );
};

export default HomePage;
