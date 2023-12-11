import { Link } from "react-router-dom";
import bgImg from "../assets/images/about-hero.png";

function AboutPage() {
  return (
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
    </div>
  );
}

export default AboutPage;
