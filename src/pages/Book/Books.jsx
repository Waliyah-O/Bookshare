import { Suspense } from "react";
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getBooks } from "../../api/bookapi";
import Loader from "../../components/Loader";

// load the page immediately without waiting for the data
export function loader() {
  return defer({ books: getBooks() });
}

const Books = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dataPromise = useLoaderData();

  const typeFilter = searchParams.get("type");
  // console.log(typeFilter);
  // console.log(searchParams.toString());

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  function renderBookElements(books) {
    const displayedBooks = typeFilter
      ? books.filter((book) => book.type.toLowerCase() === typeFilter)
      : books;

    const bookElements = displayedBooks.map((book) => (
      <div key={book.id} className="van-tile">
        {/* save search filters */}
        <Link
          to={book.id}
          state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter,
          }}
        >
          <img className="van-image " src={book.imageUrl} alt="" />
          <div className="van-info">
            <h3>{book.name}</h3>
            <p>
              ${book.price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${book.type} selected`}>{book.type}</i>
        </Link>
      </div>
    ));
    return (
      <>
        <div className="van-list-filter-buttons">
          <button
            className={`${
              typeFilter === "simple"
                ? "van-type simple selected"
                : "van-type simple"
            }`}
            onClick={() => handleFilterChange("type", "simple")}
          >
            Simple
          </button>
          <button
            className={`${
              typeFilter === "luxury"
                ? "van-type luxury selected"
                : "van-type luxury"
            }`}
            onClick={() => handleFilterChange("type", "luxury")}
          >
            luxury
          </button>
          <button
            className={`${
              typeFilter === "rugged"
                ? "van-type rugged selected"
                : "van-type rugged"
            }`}
            onClick={() => handleFilterChange("type", "rugged")}
          >
            rugged
          </button>
          {typeFilter ? (
            <button
              className="van-type clear-filters"
              onClick={() => handleFilterChange("type", null)}
            >
              clear filter
            </button>
          ) : null}
        </div>
        <div className="van-list">{bookElements}</div>
      </>
    );
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <Suspense
        fallback={
          <h2>
            <Loader />
            Loading books....
          </h2>
        }
      >
        <Await resolve={dataPromise.books}>{renderBookElements}</Await>
      </Suspense>
    </div>
  );
};

export default Books;
