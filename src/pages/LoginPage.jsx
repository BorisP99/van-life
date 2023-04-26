import React from "react";
import { Form } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);
  return null;
}

const LoginPage = () => {
  // function handleSubmit(e) {
  //   e.preventDefault();
  // }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      <Form method="post" className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input
          name="password"
          type="password"
          placeholder="Password"
          minLength="6"
        />
        <button>Sign in</button>
      </Form>
    </div>
  );
};

export default LoginPage;
