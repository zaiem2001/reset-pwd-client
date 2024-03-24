import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import notify from "../../Components/Toast";
import { useMutation } from "react-query";
import axios from "axios";
import { BASE_URL } from "../../Constants/constants";

const ResetPwd = () => {
  const { handleSubmit, formState, register } = useForm();

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const mutation = useMutation((data) => {
    return axios.post(`${BASE_URL}/auth/reset-pwd?token=${token}`, data);
  });

  const onSubmit = (data) => {
    mutation.mutate(
      { data },
      {
        onSuccess: () => {
          navigate("/login");
          notify("success", "Password reset done successfully.");
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
            <div className="password">
              <span>Password:</span>
              <input
                {...register("password", {
                  required: "Password is required",
                  min: 8,
                })}
                placeholder="Enter new Password."
              />
            </div>

            <div className="password">
              <span>Password:</span>
              <input
                {...register("confirmPassword", {
                  required: true,
                  min: 8,
                })}
                placeholder="Confirm your new Password."
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

export default ResetPwd;
