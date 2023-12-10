import { Suspense, useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostBooks, checkHostIdExists } from "../../api/bookapi";
import { requireAuth } from "../../utils";
import Loader from "../../components/Loader";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ books: getHostBooks() });
}

const HostBooks = () => {
  const dataPromise = useLoaderData();

  function renderBookElements(books) {
    const hostBooksEls = books.map((book) => (
      <Link to={ book.id } key={ book.id } className="host-van-link-wrapper">
        <div className="host-van-single" key={ book.id }>
          <img src={ book.imageUrl } alt={ `Photo of ${book.name}` } />
          <div className="host-van-info">
            <h3>{ book.name }</h3>
            <p>&#8358;{ book.price }</p>
          </div>
        </div>
      </Link>
    ));
    return (
      <>
        <div className="host-vans-list">
          <div>
            <section>{ hostBooksEls }</section>
          </div >
        </div >
      </>
    );
  }

  useEffect(() => {
    // Get the hostId from user input or any other source
    const hostId = "123"; // Replace with your logic to get hostId

    const fetchData = async () => {
      // Check if the hostId exists in Firebase
      const hostExists = await checkHostIdExists(hostId);

      if (hostExists) {
        // If host exists, get the host's books
        const hostBooks = await getHostBooks(hostId);
        console.log("Host's Vans:", hostBooks);
      } else {
        console.log("Host with ID", hostId, "not found in Firebase.");
      }
    };

    fetchData(); // Fetch data when the component mounts or when hostId changes
  }, []);

  return (
    <div>
      <h1 className="host-vans-title">Your listed books</h1>
      <Suspense
        fallback={
          <>
            <Loader /> <h2>Loading books...</h2>
          </>
        }
      >
        <Await resolve={ dataPromise.books }>{ renderBookElements }</Await>
      </Suspense>
    </div >
  );
};

export default HostBooks;
