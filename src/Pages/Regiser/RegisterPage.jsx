import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";

import "./Register.css";
import notify from "../../Components/Toast";
import { BASE_URL } from "../../Constants/constants";

const RegisterPage = () => {
  const { register, handleSubmit, formState } = useForm({
    reValidateMode: "onSubmit",
  });

  const navigate = useNavigate();

  const mutation = useMutation((newUser) => {
    return axios.post(`${BASE_URL}/auth/register`, newUser);
  });

  const onSubmit = (data) => {
    mutation.mutate(
      { data },
      {
        onSuccess: () => {
          navigate("/login");
          notify("success", "User registered successfully.");
        },
        onError: (error) => {
          notify("error", error?.response?.data?.message);
        },
      }
    );
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <div className="registerContainer">
        <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="formContainer">
            {formState?.errors?.email &&
              notify("error", formState?.errors?.email?.message)}
            <div className="username">
              <span>Username:</span>
              <input
                {...register("username", {
                  required: "username address is required",
                })}
              />
            </div>

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
                Already have an account? click <Link to="/login">here</Link> to
                Login.
              </span>
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
