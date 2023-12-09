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
<<<<<<< HEAD
  return defer({ vans: getHostBooks() });
=======
  return defer({ books: getHostBooks() });
>>>>>>> 16289cf57e600de90f64c61c7f36fddaeb0ad680
}

const HostDashboard = () => {
  const dataPromise = useLoaderData();

<<<<<<< HEAD
  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
        <Link to={`vans/${van.id}`}>View</Link>
=======
  function renderVanElements(books) {
    const hostBooksEls = books.map((book) => (
      <div className="host-van-single" key={book.id}>
        <img src={book.imageUrl} alt={`Photo of ${book.name}`} />
        <div className="host-van-info">
          <h3>{book.name}</h3>
          <p>${book.price}</p>
        </div>
        <Link to={`books/${book.id}`}>View</Link>
>>>>>>> 16289cf57e600de90f64c61c7f36fddaeb0ad680
      </div>
    ));

    return (
      <div className="host-vans-list">
<<<<<<< HEAD
        <section>{hostVansEls}</section>
=======
        <section>{hostBooksEls}</section>
>>>>>>> 16289cf57e600de90f64c61c7f36fddaeb0ad680
      </div>
    );
  }

  return (
    <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>
<<<<<<< HEAD
            Income last <span>30 days</span>
=======
            Earnings last <span>30 days</span>
>>>>>>> 16289cf57e600de90f64c61c7f36fddaeb0ad680
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
<<<<<<< HEAD
          <Link to="vans">View all</Link>
=======
          <Link to="books">View all</Link>
>>>>>>> 16289cf57e600de90f64c61c7f36fddaeb0ad680
        </div>
        <Suspense
          fallback={
            <>
              <Loader /> <h1>Loading dashboard</h1>
            </>
          }
        >
<<<<<<< HEAD
          <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
=======
          <Await resolve={dataPromise.books}>{renderVanElements}</Await>
>>>>>>> 16289cf57e600de90f64c61c7f36fddaeb0ad680
        </Suspense>
      </section>
    </>
  );
};

export default HostDashboard;
