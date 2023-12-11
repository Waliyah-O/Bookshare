import { BsStarFill } from "react-icons/bs";
import reviewsGraph from "../../assets/images/reviews-graph.png";

const Reviews = () => {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text:"BookShare is a fantastic platform for book enthusiasts! I've had the pleasure of reading various titles from fellow users, and the experience has been exceptional. The diverse collection caters to different tastes, and the sharing community is friendly and accommodating. Highly recommend for anyone passionate about exploring new books",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "I've been using BookShare for a while now, and it's a game-changer for avid readers. The ease of sharing and discovering new books is unparalleled. The website is user-friendly, and I've had seamless interactions with other users. It's like having a virtual library at your fingertips. Kudos to the BookShare community!",
      id: "2",
    },
  ];

  return (
    <section className="host-reviews">
      <div className="top-text">
        <h2>Your reviews</h2>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <img className="graph" src={reviewsGraph} alt="Review graph" />
      <h3>Reviews (2)</h3>
      {reviewsData.map((review) => (
        <div key={review.id}>
          <div className="review">
            {[...Array(review.rating)].map((_, i) => (
              <BsStarFill className="review-star" key={i} />
            ))}
            <div className="info">
              <p className="name">{review.name}</p>
              <p className="date">{review.date}</p>
            </div>
            <p>{review.text}</p>
          </div>
          <hr />
        </div>
      ))}
    </section>
  );
};

export default Reviews;
