import React from "react";

import "./ResetPassword.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import notify from "../../Components/Toast";
import { useMutation } from "react-query";
import axios from "axios";
import { BASE_URL } from "../../Constants/constants";

const ResetPassword = () => {
  const { register, handleSubmit, formState } = useForm({
    reValidateMode: "onSubmit",
  });

  const navigate = useNavigate();

  const mutation = useMutation((data) => {
    return axios.post(`${BASE_URL}/auth/gen-reset-pwd`, data);
  });

  const onSubmit = (data) => {
    mutation.mutate(
      { data },
      {
        onSuccess: (response) => {
          const { data } = response;
          notify("success", "Password reset link sent successfully.");
          navigate(`/reset-pwd?token=${data?.token}`);
          //   navigate("/login");
        },
        onError: (err) => {
          notify("error", err?.response?.data?.message);
        },
      }
    );
  };

  return (
    <div className="reset">
      <h1>Reset your Password</h1>
      <div className="resetContainer">
        <form className="resetForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="formContainer">
            {formState?.errors?.email &&
              notify("error", formState?.errors?.email?.message)}
            <div className="email">
              <span>Email:</span>
              <input
                {...register("email", {
                  required: "Email address is required",
                })}
                placeholder="Enter your email to reset your password."
              />
            </div>

            <div className="newUser">
              <span>
                Click <Link to="/login">here</Link> to go back to Login page.
              </span>
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
