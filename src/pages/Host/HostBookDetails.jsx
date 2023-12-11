import { Link, Outlet, NavLink, useLoaderData } from "react-router-dom";
import { activeStyle } from "../../components/HostLayout";
import { getHostBooks } from "../../api/bookapi";
import { requireAuth } from "../../utils";

export async function loader({ params, request }) {
  await requireAuth(request);
  return getHostBooks(params.id);
  // return getVan(params.id);
}

const HostBookDetails = () => {
  const currentBook = useLoaderData();

  // useEffect(() => {
  //   fetch(`/api/host/vans/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setcurrentBook(data.vans))
  //     .catch((error) => console.log(error));
  // }, [id]);

  if (!currentBook) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        <span> &larr; Back to all books</span>
      </Link>
      <div className="host-book-detail-layout-container">
        <div className="host-book-detail">
          <img src={ currentBook.imageUrl } alt="" />
          <div className="host-book-detail-info-text">
            <i className={ `van-type van-type-${currentBook.type}` }>
              { currentBook.type }
            </i>
            <h2>{ currentBook.name }</h2>
            <p>Market Price: <span style={{textDecoration: 'line-through', color: 'red'}}>&#8358;{currentBook.originalPrice}</span></p>
            <h4>&#8358;{ currentBook.price }</h4>
          </div>
        </div>
        <nav className="host-book-detail-nav">
          <NavLink
            style={ ({ isActive }) => (isActive ? activeStyle : null) }
            to="."
            end
          >
            Details
          </NavLink>
          <NavLink
            style={ ({ isActive }) => (isActive ? activeStyle : null) }
            to="pricing"
          >
            Pricing
          </NavLink>
          <NavLink
            style={ ({ isActive }) => (isActive ? activeStyle : null) }
            to="photos"
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={ { currentBook } } />
      </div>
    </section>
  );
};

export default HostBookDetails;
