import {
  useLoaderData,
  Form,
  redirect,
  useActionData,
  useNavigation,
  Link,
} from "react-router-dom";

import { loginUser } from "../api/bookapi";

export function loader({ request }) {
  // ibile (native) javascript lol!
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  // console.log(pathname);

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedIn", true);
    // console.log(data.user);
    const response = redirect(pathname);
    response.body = true;
    return response;
  } catch (err) {
    return err.message;
  }

  // save user data.user in local storage
  // save token in a cookie
}

const Login = () => {
  const message = useLoaderData();
  // console.log(message);
  const errorMessage = useActionData();
  const navigation = useNavigation();

  return (
    <div className="login-container">
      <h1>sign in to your account</h1>
      {message && <h3 className="login-error">{message}</h3>}
      {errorMessage && <h4 className="login-error">{errorMessage}</h4>}

      <Form method="post" className="login-form" replace>
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
          <Link to="/signup">Sign up</Link>
          <Link to="/forgotpassword">forgot password</Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
