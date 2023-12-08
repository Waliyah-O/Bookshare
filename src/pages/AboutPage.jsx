import { Link } from "react-router-dom";
import bgImg from "../assets/images/about-hero.png";

function AboutPage() {
  return (
    <div className="about-page-container">
      <div className="about-page-content">
        <h1>About us</h1>
        <p>
          Bookshare Initiative facilitates the sharing of textbooks among
          students. By participating in the initiative, students can both delve
          into the captivating world of literature and collaborate in accessing
          educational resources for their studies. We believe in the
          extraordinary power of sharing, both n the form of used and new books
          and vital financial aid. By connecting readers, learners, and
          dreamers, we create a ripple effect of knowledge, inspiration, and
          opportunity. Through our platform, we unite communities, bridging gaps
          and empowering individuals from all walks of life. Join us in our
          mission to foster a world where access to literature and educational
          resources knows no boundaries. Together, let's create a legacy of
          shared stories that change lives forever.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <div className="about-buttons">
          <Link className="link-button" to="/books">
            Explore our books
          </Link>
        </div>
      </div>
      <img src={bgImg} className="about-hero-image" alt="" />
    </div>
  );
}

export default AboutPage;
