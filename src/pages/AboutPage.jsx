import { Link } from "react-router-dom";
import gif from "../assets/gif/aboutGif2.gif";
import gif2 from "../assets/gif/aboutGif.gif";
import gif3 from "../assets/gif/reading-more-books.gif";

function AboutPage() {
  const bookShare = (
    <strong>
      BOOK<span style={{ color: "#1A5276" }}>SHARE</span>
    </strong>
  );
  return (
    <div className="about-page-container">
      <div className="about-page-wrapper">
        <div className="about-hero-wrapper">
          <p className="about-hero-content1">
            Welcome to {bookShare}, where the love for books meets the joy of
            reading! We are more than just an online bookstore; we are
            passionate bibliophiles dedicated to bringing the world of
            literature to your fingertips.
          </p>
          <img src={gif} className="about-hero-image" alt="" />
        </div>{" "}
        <div className="about-page-content">
          <div className="about-section2">
            <img src={gif2} alt="" />
            <div>
              <div class="our-mission">
                <h3 style={{ color: "#1A5276", fontSize: '3em' }}>Our Mission</h3>
              
              </div>

              <p className="about-mission-content">
                At {bookShare}, our mission is to curate a diverse collection of
                books that cater to every taste and interest. Whether you're a
                seasoned reader or just beginning your literary journey, we aim
                to be your trusted companion on the road to discovery.
              </p>
            </div>
          </div>
          <div className="about-section3">
            <div className="about-section3-content">
              <div className="contents">
                <h3 style={{ color: "#1A5276", fontSize: '3em' }}>What Sets Us Apart</h3>
                
              </div>
              <p className="us-apart">
                Curated Selection Our team of passionate curators meticulously
                selects each title in our collection. From timeless classics to
                contemporary gems, we strive to offer a thoughtfully curated
                selection that spans genres and cultures.
              </p>
            </div>
            <img className="about-section3" src={gif3} alt="" />
          </div>
          <div className="about-contact">
            <h3 style={{ color: "#1A5276", fontSize: '3em' }}>Contact Us</h3>
            <p>
              Have questions or suggestions? We'd love to hear from you! Reach
              out to our dedicated support team at [support@yourbookstore.com]
              or visit us{" "}
              <Link to="/contact" style={{ color: "#ff8c38" }}>
                here
              </Link>
              .
            </p>
          </div>
          <h2>
            Thank you for choosing {bookShare} as your literary companion. Happy
            reading!
          </h2>
        </div>
      </div>{" "}
      <div className="about-page-cta">
        <h2>Your books are ready.</h2>
        <div className="about-buttons">
          <Link className="link-button" to="/books">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
