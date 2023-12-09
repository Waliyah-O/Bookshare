import { Link } from "react-router-dom";
import bgImg from "../assets/images/about-hero.png";

function AboutPage() {
  const bookShare = (
    <strong>
      BOOK<span style={{ color: "#ff8c38" }}>SHARE</span>
    </strong>
  );
  return (
    <div className="about-page-container">
      <div className="about-page-wrapper">
        <img src={bgImg} className="about-hero-image" alt="" />
        <div className="about-page-content">
          <p>
            Welcome to {bookShare}, where the love for books meets the joy of
            reading! We are more than just an online bookstore; we are
            passionate bibliophiles dedicated to bringing the world of
            literature to your fingertips.
          </p>
          <h3>Our Mission</h3>
          <p>
            At {bookShare}, our mission is to curate a diverse collection of
            books that cater to every taste and interest. We believe that
            everyone deserves access to great literature, and our carefully
            selected catalog reflects our commitment to quality and diversity.
            Whether you're a seasoned reader or just beginning your literary
            journey, we aim to be your trusted companion on the road to
            discovery.
          </p>
          <h3>What Sets Us Apart</h3>
          <p>
            Curated Selection Our team of passionate curators meticulously
            selects each title in our collection. From timeless classics to
            contemporary gems, we strive to offer a thoughtfully curated
            selection that spans genres and cultures.
          </p>
          <h3>Community Engagement</h3>
          <p>
            We cherish the sense of community that books foster. Join us in
            discussions, author interviews, and book clubs to connect with
            fellow readers who share your interests. Together, let's celebrate
            the beauty of storytelling.
          </p>
          <h3>Exceptional Service</h3>
          <p>
            Your reading experience is our top priority. Our user-friendly
            website, secure payment options, and prompt delivery ensure that
            your journey with {bookShare} is seamless and enjoyable.
          </p>
          <h3>Contact Us</h3>
          <p>
            Have questions or suggestions? We'd love to hear from you! Reach out
            to our dedicated support team at [support@yourbookstore.com] or
            visit us{" "}
            <Link to="/contact" style={{ color: "#ff8c38" }}>
              here
            </Link>
            .
          </p>
          <h2>
            Thank you for choosing {bookShare} as your literary companion. Happy
            reading!
          </h2>
        </div>
        <div className="about-page-cta">
          <h2>Your books are ready.</h2>
          <div className="about-buttons">
            <Link className="link-button" to="/books">
              Explore our Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
