import React, { useState } from "react";
import FormInput from "./FormInput";
import useForm from "../hooks/useForm";
import validateForm from "../hooks/validateForm";

const EventRegistrationForm = () => {
  const initialState = {
    name: "",
    email: "",
    age: "",
    hasGuest: false,
    guestName: "",
  };

  const {
    handleChange,
    handleSubmit,
    resetForm,
    values,
    errors,
    isSubmitting,
  } = useForm(initialState, validateForm);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(values);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
    handleSubmit();
  };

  const isFormValid = () => {
    return (
      values.name.trim() !== "" &&
      values.email.trim() !== "" &&
      values.age.trim() !== "" &&
      (!values.hasGuest ||
        (values.hasGuest && values.guestName.trim() !== "")) &&
      Object.keys(errors).length === 0
    );
  };

  const handleClear = () => {
    resetForm();
    setSubmitted(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#f0fdfa] rounded-3xl shadow-black-lg text-[#042f2e]">
      <h2 className="text-lg font-bold mb-4">Event Registration Form</h2>
      <form onSubmit={onSubmit}>
        <FormInput
          label="Name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormInput
          label="Age"
          name="age"
          type="number"
          placeholder="Enter your age"
          value={values.age}
          onChange={handleChange}
          error={errors.age}
        />
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="hasGuest"
              checked={values.hasGuest}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-sm font-bold">
              Are you attending with a guest?
            </span>
          </label>
        </div>
        {values.hasGuest && (
          <FormInput
            label="Guest Name"
            name="guestName"
            type="text"
            placeholder="Enter guest name"
            value={values.guestName}
            onChange={handleChange}
            error={errors.guestName}
          />
        )}
        <div className="flex items-center justify-between">
          <button
            className="bg-[#042f2e] text-white font-bold py-2 px-4 rounded-xl"
            type="submit"
            disabled={isSubmitting}>
            Submit
          </button>
          <button
            className="bg-[#99f6e4] text-black font-bold py-2 px-4 rounded-xl"
            type="button"
            onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
      {submitted && isFormValid() && (
        <div className="mt-4">
          <div>
            <h3 className="font-bold">Registration Summary:</h3>
            <p>Name: {values.name}</p>
            <p>Email: {values.email}</p>
            <p>Age: {values.age}</p>
            <p>Attending with guest: {values.hasGuest ? "Yes" : "No"}</p>
            {values.hasGuest && <p>Guest Name: {values.guestName}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventRegistrationForm;
