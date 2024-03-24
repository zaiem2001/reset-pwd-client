import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import "./LoginPage.css";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import notify from "../../Components/Toast";
import { BASE_URL } from "../../Constants/constants";
import { saveToLocalStorage } from "../../Helpers/helpers";

const mutateLogin = (mutation, navigate, formState) => {
  return (data) => {
    mutation.mutate(
      {
        data,
      },
      {
        onSuccess: (data) => {
          const {
            data: { user },
          } = data;
          saveToLocalStorage("user", user);
          navigate("/");
        },
        onError: (err) => {
          notify("error", err?.response?.data?.message);
        },
      }
    );
  };
};

const LoginPage = () => {
  const { register, handleSubmit, formState } = useForm({
    reValidateMode: "onSubmit",
  });
  const navigate = useNavigate();

  const mutation = useMutation((newUser) => {
    return axios.post(`${BASE_URL}/auth/login`, newUser);
  });
  const onSubmit = mutateLogin(mutation, navigate, formState);

  return (
    <div className="login">
      <h1>Login</h1>
      <div className="loginContainer">
        <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="formContainer">
            {formState?.errors?.email &&
              notify("error", formState?.errors?.email?.message)}
            <div className="email">
              <span>Email:</span>
              <input
                {...register("email", {
                  required: "Email address is required",
                })}
              />
            </div>

            <div className="password">
              <span>Password:</span>
              <input
                {...register("password", {
                  required: "Password length should be 8 characters or more.",
                  minLength: 8,
                })}
                type="password"
              />
            </div>

            <div className="newUser">
              <span>
                New here? click <Link to="/register"> here</Link> to create an
                account.
              </span>
            </div>
            <div className="forgotPassword">
              <span>
                Forgot your password? click <Link to="/reset"> here</Link> to
                reset your password.
              </span>
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
