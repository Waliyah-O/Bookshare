import React from "react";
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom";
import { getBooks } from "../../api/bookapi";

export function loader({ params }) {
  return getBooks(params.id);
}

export default function VanDetail() {
  const location = useLocation();
  const book = useLoaderData();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} books</span>
      </Link>

      <div className="van-detail">
        <img alt={book.name} src={book.imageUrl} />
        <i className={`van-type ${book.type} selected`}>{book.type}</i>
        <h2>{book.name}</h2>
        <p className="van-price">
          <span>${book.price}</span>/day
        </p>
        <p>{book.description}</p>
        <button className="link-button">
          <Link
            to={{
              pathname: `/book/${book.id}/checkout`,
              state: { book },
            }}
          >
            Rent this van
          </Link>
        </button>
      </div>
    </div>
  );
}
