import { Suspense, useRef, useState } from "react";
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getBooks } from "../../api/bookapi";
import Loader from "../../components/Loader";
import SearchBar from "../../components/SearchBar";

// load the page immediately without waiting for the data
export function loader() {
  return defer({ books: getBooks() });
}

const Books = () => {
  const searchRef = useRef()
  const [searchParams, setSearchParams] = useSearchParams();
  const dataPromise = useLoaderData();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );
  const typeFilter = searchParams.get("type");
  // console.log(typeFilter);
  // console.log(searchParams.toString());

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        // Clear both the filter and the search term
        prevParams.delete("type");
        prevParams.delete("search");
        setSearchTerm("");
        handleSearch("");
        searchRef.current.value = ''
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
    setSearchParams((prevParams) => {
      if (searchTerm) {
        prevParams.set("search", searchTerm);
      } else {
        prevParams.delete("search");
      }
      return prevParams;
    });
  }

  function renderBookElements(books) {
    const displayedBooks = typeFilter
      ? books.filter((book) => book.type.toLowerCase() === typeFilter)
      : books;

    const filteredBooks = searchTerm
      ? displayedBooks.filter(
        (book) =>
          book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.id.toString().includes(searchTerm) ||
          book.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.price.toString().includes(searchTerm) ||
          book.type.toLowerCase().includes(searchTerm.toLowerCase())
      )
      : displayedBooks;

    const bookElements = filteredBooks.map((book) => (
      <div key={ book.id } className="van-tile">
        {/* save search filters */ }
        <Link
          to={ book.id }
          state={ {
            search: `?${searchParams.toString()}`,
            type: typeFilter,
          } }
        >
          <img className="van-image " src={ book.imageUrl } alt="" />
          <div className="van-info">
            <h3>{ book.name }</h3>
            <p>
              &#8358;{ book.price }
              <span></span>
            </p>
          </div>
          <i className={ `van-type ${book.type} selected` }>{ book.type }</i>
        </Link>
      </div>
    ));
    return (
      <>
        <div className="van-list-filter-buttons">
          <button
            className={ `${typeFilter === "novel"
              ? "van-type novel selected"
              : "van-type novel"
              }` }
            onClick={ () => handleFilterChange("type", "novel") }
          >
            Novels
          </button>
          <button
            className={ `${typeFilter === "book" ? "van-type book selected" : "van-type book"
              }` }
            onClick={ () => handleFilterChange("type", "book") }
          >
            Books
          </button>
          <button
            className={ `${typeFilter === "article"
              ? "van-type article selected"
              : "van-type article"
              }` }
            onClick={ () => handleFilterChange("type", "article") }
          >
            Articles
          </button>

          <SearchBar
            onSearch={ handleSearch }
            searchRef={ searchRef }
          />
          { searchTerm || typeFilter ? (
            <button
              className="van-type clear-filters"
              onClick={ () => handleFilterChange("type", null) }
            >
              clear filter
            </button>
          ) : null }
        </div>
        {/* <div className="van-list">{bookElements}</div> */ }
        { filteredBooks.length > 0 ? (
          <div className="van-list">{ bookElements }</div>
        ) : (
          <p>
            Sorry we don't have that book yet. <br /> Would you like to search
            for another?
          </p>
        ) }
      </>
    );
  }

  return (
    <div className="van-list-container">
      <h1>Explore our book options</h1>
      <Suspense
        fallback={
          <h2 style={{textAlign:'center', display:'flex', justifyContent:'center', flexDirection:'column', gap:'15px', marginTop:'80px'}}>
            <Loader />
            Loading books....
          </h2>
        }
      >
        <Await resolve={ dataPromise.books }>{ renderBookElements }</Await>
      </Suspense>
    </div>
  );
};

export default Books;

// wale
