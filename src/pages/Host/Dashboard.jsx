import { Suspense } from "react";
import { Link, defer, Await, useLoaderData, redirect } from "react-router-dom";
import { getHostBooks } from "../../api/bookapi";
import { BsStarFill } from "react-icons/bs";
import Loader from "../../components/Loader";

export async function loader({ request }) {
  const isLoggedIn = localStorage.getItem("loggedIn");
  if (!isLoggedIn) {
    const response = redirect("/login?message=You must log in first!");
    response.body = true;
    return response;
  }
  return defer({ books: getHostBooks() });
}

const HostDashboard = () => {
  const dataPromise = useLoaderData();

  function renderVanElements(books) {
    const hostBooksEls = books.map((book) => (
      <div className="host-van-single" key={book.id}>
        <img src={book.imageUrl} alt={`Photo of ${book.name}`} />
        <div className="host-van-info">
          <h3>{book.name}</h3>
          <p>${book.price}</p>
        </div>
        <Link to={`books/${book.id}`}>View</Link>
      </div>
    ));

    return (
      <div className="host-vans-list">
        <section>{hostBooksEls}</section>
      </div>
    );
  }

  return (
    <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>
            Earnings last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>
        <BsStarFill className="star" />
        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews">Details</Link>
      </section>
      <section className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed books</h2>
          <Link to="books">View all</Link>
        </div>
        <Suspense
          fallback={
            <>
              <Loader /> <h1>Loading dashboard</h1>
            </>
          }
        >
          <Await resolve={dataPromise.books}>{renderVanElements}</Await>
        </Suspense>
      </section>
    </>
  );
};

export default HostDashboard;
