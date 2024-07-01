import React, { useEffect } from "react";
import { Form, useActionData } from "react-router-dom";
import { FormInput } from "../components";
import { isPending } from "@reduxjs/toolkit";
import { useLogin } from "../hooks/useLogin";

export const action = async ({request}) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};

function Login() {
  const userData = useActionData();
  const { loginUser, isPending } = useLogin();

  useEffect(() => {
    if (userData) {
      loginUser(userData.email, userData.password);
    }
  }, [userData]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className=" hidden lg:block h-full bg-orange-50  bg-[url('./login-img.jpg')] bg-center bg-cover"></div>
      <div className="h-full bg-slate-50 grid place-items-center  lg:bg-none  bg-[url('./login-img.jpg')] bg-center bg-cover">
        <div className="card bg-base-100 w-96 shadov-xl  p-8">
          <Form method="post" className="flex flex-col items-center gap-5 ">
            <h1 className="text-3xl font-semibold">Login</h1>
            <FormInput type="email" label="email" name="email" />
            <FormInput type="password" label="password" name="password" />

            <div className="w-full">
              <button className="btn btn-primary btn-block">Login</button>
            </div>
          </Form>
          <div className="w-full mt-5">
            <button className="btn btn-accent btn-block text-red-500  text-lg">
              GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
