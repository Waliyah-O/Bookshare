import { Suspense, useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostBooks, checkHostIdExists } from "../../api/bookapi";
import { requireAuth } from "../../utils";
import Loader from "../../components/Loader";

export async function loader({ request }) {
  await requireAuth(request);
<<<<<<< HEAD
  return defer({ vans: getHostBooks() });
}

const HostVans = () => {
  const [trucks, setTrucks] = useState([]);
  const dataPromise = useLoaderData();

  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
      <Link to={van.id} key={van.id} className="host-van-link-wrapper">
        <div className="host-van-single" key={van.id}>
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
=======
  return defer({ books: getHostBooks() });
}

const HostBooks = () => {
  const dataPromise = useLoaderData();

  function renderBookElements(books) {
    const hostBooksEls = books.map((book) => (
      <Link to={book.id} key={book.id} className="host-van-link-wrapper">
        <div className="host-van-single" key={book.id}>
          <img src={book.imageUrl} alt={`Photo of ${book.name}`} />
          <div className="host-van-info">
            <h3>{book.name}</h3>
            <p>${book.price}</p>
>>>>>>> 16289cf57e600de90f64c61c7f36fddaeb0ad680
          </div>
        </div>
      </Link>
    ));
    return (
      <>
        <div className="host-vans-list">
          <div>
<<<<<<< HEAD
            <section>{hostVansEls}</section>
=======
            <section>{hostBooksEls}</section>
>>>>>>> 16289cf57e600de90f64c61c7f36fddaeb0ad680
          </div>
        </div>
      </>
    );
  }

  useEffect(() => {
<<<<<<< HEAD
    fetch("/api/host/trucks")
      .then((res) => res.json())
      .then((data) => setTrucks(data.trucks))
      .catch((error) => console.log(error));
  }, []);
  // console.log(trucks);

  useEffect(() => {
=======
>>>>>>> 16289cf57e600de90f64c61c7f36fddaeb0ad680
    // Get the hostId from user input or any other source
    const hostId = "123"; // Replace with your logic to get hostId

    const fetchData = async () => {
      // Check if the hostId exists in Firebase
      const hostExists = await checkHostIdExists(hostId);

      if (hostExists) {
<<<<<<< HEAD
        // If host exists, get the host's vans
        const hostVans = await getHostBooks(hostId);
        console.log("Host's Vans:", hostVans);
=======
        // If host exists, get the host's books
        const hostBooks = await getHostBooks(hostId);
        console.log("Host's Vans:", hostBooks);
>>>>>>> 16289cf57e600de90f64c61c7f36fddaeb0ad680
      } else {
        console.log("Host with ID", hostId, "not found in Firebase.");
      }
    };

    fetchData(); // Fetch data when the component mounts or when hostId changes
  }, []);

<<<<<<< HEAD
  const hostTruckEls = trucks.map((truck) => (
    <Link to={truck.id} key={truck.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={truck.id}>
        <img src={truck.imageUrl} alt={`Photo of ${truck.name}`} />
        <div className="host-van-info">
          <h3>{truck.name}</h3>
          <p>${truck.price}/day</p>
        </div>
      </div>
    </Link>
  ));

=======
>>>>>>> 16289cf57e600de90f64c61c7f36fddaeb0ad680
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
<<<<<<< HEAD
        <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
      </Suspense>
      <section>{hostTruckEls}</section>
=======
        <Await resolve={dataPromise.books}>{renderBookElements}</Await>
      </Suspense>
>>>>>>> 16289cf57e600de90f64c61c7f36fddaeb0ad680
    </div>
  );
};

<<<<<<< HEAD
export default HostVans;
=======
export default HostBooks;
>>>>>>> 16289cf57e600de90f64c61c7f36fddaeb0ad680
