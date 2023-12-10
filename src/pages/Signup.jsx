import {
  useLoaderData,
  Form,
  redirect,
  useActionData,
  useNavigation,
  Link,
} from "react-router-dom";
import { useEffect } from "react";
import { signupUser } from "../api/bookapi";

export function loader({ request }) {
  // ibile (native) javascript lol!
  return new URL(request.url).searchParams.get("message");
}

// export async function action({ request }) {
//   const formData = await request.formData();
//   const username = formData.get("username");
//   const email = formData.get("email");
//   const password = formData.get("password");
//   const pathname =
//     new URL(request.url).searchParams.get("redirectTo") || "/host";
//   // console.log(pathname);

//   try {
//     const data = await signupUser({ username, email, password });
//     localStorage.setItem("loggedIn", true);
//     // console.log(data.user);
//     const response = redirect(pathname);
//     response.body = true;
//     return response;
//   } catch (err) {
//     return err.message;
//   }
//   // save user data.user in local storage
//   // save token in a cookie
// }

export async function action({ request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";

  try {
    const data = await signupUser({ username, email, password });

    // Save the token in localStorage
    localStorage.setItem("token", data.token);

    // Redirect to the desired path
    const response = redirect(pathname);
    response.body = true;
    return response;
  } catch (err) {
    return err.message;
  }
}

const SignUp = () => {
  const message = useLoaderData();
  // console.log(message);
  const errorMessage = useActionData();
  const navigation = useNavigation();

  // useEffect(() => {
  //   if (isAuthenticated()) {
  //     fetchData()
  //       .then((data) => {
  //         // Handle the data from the authenticated request
  //         console.log("Authenticated request data:", data);
  //       })
  //       .catch((error) => {
  //         // Handle errors
  //         console.error("Authenticated request error:", error);
  //       });
  //   } else {
  //     // Redirect or handle the case where the user is not authenticated
  //     console.log("User not authenticated");
  //   }
  // }, []);

  return (
    <div className="login-container">
      <h1>create an account</h1>
      {message && <h3 className="login-error">{message}</h3>}
      {errorMessage && <h4 className="login-error">{errorMessage}</h4>}

      <Form method="post" className="login-form" replace>
        <input name="username" placeholder="username" type="text" />
        <input name="email" placeholder="Email address" type="email" />
        <input name="password" placeholder="Password" type="password" />
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "13px",
          }}
        >
          <Link to="/login">Sign in</Link>
          <Link to="/forgotpassword">forgot password</Link>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
