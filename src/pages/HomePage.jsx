import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Beyond Pages: Unlock Value, Earn Reward– Welcome to Bookshare</h1>
      <p>
        Embark on a Literary Journey with Bookshare. Uncover the World of
        Knowledge: Immerse Yourself in Educational Adventures at Bookshare.
        Explore Intriguing Stories, Discover New Realms of Understanding, and
        Nourish Your Mind. Dive into our Thoughtfully Curated Collection of
        Books that Speak to the Essence of Learning. Immerse Yourself in the
        Rich Diversity of Words and Ideas. Your Next Educational Journey Awaits
        at Bookshare.
      </p>
      <div className="home-buttons">
        <Link to="books">Buy a Book</Link>
        <Link to="login">Sell your old books</Link>
      </div>
    </div>
  );
};

export default HomePage;
