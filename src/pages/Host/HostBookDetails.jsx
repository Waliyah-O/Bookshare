import { Link, Outlet, NavLink, useLoaderData } from "react-router-dom";
import { activeStyle } from "../../components/HostLayout";
import { getHostBooks } from "../../api/bookapi";
<<<<<<< HEAD
// import { getVan } from "../../api/vanapi";
=======
>>>>>>> 16289cf57e600de90f64c61c7f36fddaeb0ad680
import { requireAuth } from "../../utils";

export async function loader({ params, request }) {
  await requireAuth(request);
  return getHostBooks(params.id);
  // return getVan(params.id);
}

const HostBookDetails = () => {
  const currentVan = useLoaderData();

  // useEffect(() => {
  //   fetch(`/api/host/vans/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setCurrentVan(data.vans))
  //     .catch((error) => console.log(error));
  // }, [id]);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
<<<<<<< HEAD
        <span> &larr; Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} alt="" />
          <div className="host-van-detail-info-text">
=======
        <span> &larr; Back to all books</span>
      </Link>
      <div className="host-book-detail-layout-container">
        <div className="host-book-detail">
          <img src={currentVan.imageUrl} alt="" />
          <div className="host-book-detail-info-text">
>>>>>>> 16289cf57e600de90f64c61c7f36fddaeb0ad680
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h2>{currentVan.name}</h2>
<<<<<<< HEAD
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
=======
            <h4>${currentVan.price}</h4>
          </div>
        </div>
        <nav className="host-book-detail-nav">
>>>>>>> 16289cf57e600de90f64c61c7f36fddaeb0ad680
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="."
            end
          >
            Details
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="pricing"
          >
            Pricing
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="photos"
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
};

export default HostBookDetails;
