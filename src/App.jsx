import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// styles
import "./App.css";

//components
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";

// server
import "./server/server";

// pages
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import Books, { loader as BooksPageLoader } from "./pages/Book/Books";
import BookDetail, { loader as BookDetailLoader } from "./pages/Book/BookDetail";
import HostDashboard, {
  loader as hostDashboardLoader,
} from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostBooks, { loader as hostBooksLoader } from "./pages/Host/HostBooks";
import HostBookDetails, {
  loader as hostBookDetailLoader,
} from "./pages/Host/HostBookDetails";
import HostBookPricing from "./pages/Host/HostBookPricing";
import HostBookPhotos from "./pages/Host/HostBookPhotos";
import HostBookInfo from "./pages/Host/HostBookInfo";
import NotFoundPage from "./pages/NotFound";
import Error from "./components/Error";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";

import { requireAuth } from "./utils";
import ContactUs from "./pages/ContactUs";
import CheckoutPage, { loader as checkoutLoader } from "./pages/CheckOut";
import SuccessPage from "./pages/SuccessPage";
import SignUp from "./pages/Signup";
import CreateBookForm from "./components/CreateBookForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<ContactUs />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route path="signup" element={<SignUp />} />
      <Route
        path="book/:id/checkout"
        element={<CheckoutPage />}
        loader={checkoutLoader}
      />
      <Route
        path="books"
        element={<Books />}
        errorElement={<Error />}
        loader={BooksPageLoader}
      />
      <Route
        path="books/:id"
        element={<BookDetail />}
        loader={BookDetailLoader}
        errorElement={<Error />}
      />

      <Route path="host" element={<HostLayout />} errorElement={<Error />}>
        <Route
          index
          element={<HostDashboard />}
          loader={hostDashboardLoader}
          // loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />

        <Route path="addbook" element={<CreateBookForm />} />
        <Route
          path="books"
          element={<HostBooks />}
          loader={hostBooksLoader}
          errorElement={<Error />}
        />
        <Route
          path="books/:id"
          element={<HostBookDetails />}
          loader={hostBookDetailLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<HostBookInfo />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostBookPricing />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostBookPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="paymentsuccessful" element={<SuccessPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
