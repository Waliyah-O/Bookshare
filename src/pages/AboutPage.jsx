import { Link } from "react-router-dom";
import gif from "../assets/gif/aboutGif2.gif";
import gif2 from "../assets/gif/aboutGif.gif";
import gif3 from "../assets/gif/reading-more-books.gif";

function AboutPage() {
  const bookShare = (
    <strong>
      BOOK<span style={ { color: "#ff8c38" } }>SHARE</span>
    </strong>
  );
  return (
<<<<<<< HEAD
    <div className="about-page-container" style={{ display: "flex" }}>
      <div className="about-page-content">
        <h1>
          About <span style={{ color: "#ff8c38" }}>us</span>
        </h1>
        <p style={{ fontWeight: "500" }}>
          At Bookshare, we are passionate advocates for the transformative power
          of literature and education. Committed to fostering a community of
          lifelong learners, we provide a platform where individuals can embark
          on intellectual journeys, exploring diverse stories and acquiring
          knowledge that enriches the mind. Our curated collection of books is
          more than a mere assortment of titles; it's a carefully selected
          tapestry of thought-provoking narratives and educational resources.
          With a dedication to accessibility and inclusivity, we strive to
          bridge gaps and connect readers, learners, and educators. Founded on
          the belief in the extraordinary impact of shared stories, we go beyond
          the traditional boundaries of a bookstore. Bookshare is a vibrant
          space where the love for learning meets the entrepreneurial spirit,
          empowering individuals to turn their passion for literature into
          educational and financial opportunities. Join us in creating a legacy
          of shared stories that inspire, empower, and transform lives. At
          Bookshare, every page tells a story, and every reader contributes to a
          community of knowledge seekers. Together, let's shape a future where
          access to literature and education knows no limits.
        </p>
      </div>
      <img
        src={bgImg}
        className="about-hero-image"
        alt=""
        style={{
          width: "50%",
          marginRight: "1.5rem",
          borderRadius: "2rem,auto",
        }}
      />
=======
    <div className="about-page-container">
      <div className="about-page-wrapper">
        <div className="about-hero-wrapper">
          <p>
            Welcome to { bookShare }, where the love for books meets the joy of
            reading! We are more than just an online bookstore; we are
            passionate bibliophiles dedicated to bringing the world of
            literature to your fingertips.
          </p>
          <img src={ gif } className="about-hero-image" alt="" />
        </div>{ " " }
        <div className="about-page-content">
          <div className="about-section2">
            <img src={ gif2 } alt="" />
            <div>
              <h3>Our Mission</h3>
              <p>
                At { bookShare }, our mission is to curate a diverse collection of
                books that cater to every taste and interest. We believe that
                everyone deserves access to great literature, and our carefully
                selected catalog reflects our commitment to quality and
                diversity. Whether you're a seasoned reader or just beginning
                your literary journey, we aim to be your trusted companion on
                the road to discovery.
              </p>
            </div>
          </div>
          <div className="about-section3">
            <div className="about-section3-content">
              <h3>What Sets Us Apart</h3>
              <p>
                Curated Selection Our team of passionate curators meticulously
                selects each title in our collection. From timeless classics to
                contemporary gems, we strive to offer a thoughtfully curated
                selection that spans genres and cultures.
              </p>
            </div>
            <img className="about-section3" src={ gif3 } alt="" />
          </div>
          <h3>Contact Us</h3>
          <p>
            Have questions or suggestions? We'd love to hear from you! Reach out
            to our dedicated support team at [support@yourbookstore.com] or
            visit us{ " " }
            <Link to="/contact" style={ { color: "#ff8c38" } }>
              here
            </Link>
            .
          </p>
          <h2>
            Thank you for choosing { bookShare } as your literary companion. Happy
            reading!
          </h2> ``
        </div>
        <div className="about-page-cta">
          <h2>Your books are ready.</h2>
          <div className="about-buttons">
            <Link className="link-button" to="/books">
              Explore
            </Link>
          </div>
        </div>
      </div>
>>>>>>> 1ae6e2ef3bcec9f16d53cd1f0783c3a0868e455d
    </div>
  );
}

export default AboutPage;
