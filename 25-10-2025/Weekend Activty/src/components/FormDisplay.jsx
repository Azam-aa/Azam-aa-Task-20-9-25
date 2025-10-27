import React, { useState } from "react";

const FormDisplay = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formData);
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="container mt-4">
      <h3>Form Submit</h3>
      <form onSubmit={handleSubmit} className="mt-3">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Name"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Email"
          required
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {submitted && (
        <div className="card mt-3">
          <div className="card-body">
            <h5>Submitted Data</h5>
            <p>Name: {submitted.name}</p>
            <p>Email: {submitted.email}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormDisplay;
