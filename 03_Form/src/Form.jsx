import { useState } from "react";

const Form = () => {
  // Step 1: Declare state to store form values
  const [formData, setFormDate] = useState({
    name: "",
    email: "",
    password: "",
  });

  // For errors
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {}; // Initialized an empty object to store any erros during the validation
    if (!formData.name) newErrors.name = "Name is required"; // Checking
    if (!formData.email) newErrors.email = "Email is required"; // Checking
    if (!formData.password) newErrors.password = "Password is required"; // Checking
    setErrors(newErrors); // State value setted

    //then checks if the newErrors object is empty by evaluating Object.keys(newErrors).length === 0.
    // If newErrors has no keys (meaning no validation errors were found), it returns true indicating that the form is valid.
    // If there are any errors, it returns false, signaling that the form is not valid.
    return Object.keys(newErrors).length === 0; //
  };

  // Step 2: Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDate((prevData) => ({
      ...prevData, // Spread the current formData state
      [name]: value, // dynamically update the changed field
    }));
  };

  // Step: Handle submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // validation checking before submitting form
    if (validateForm()) {
      alert(
        `Name: ${formData.name} Email: ${formData.email} Password: ${formData.password}`
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 mt-12">
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-md"
          />
          {errors.name && (
            <span className="block text-red-600"> {errors.name}</span>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-md"
          />

          {errors.email && (
            <span className="block text-red-600">{errors.email}</span>
          )}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-md"
          />
          {errors.password && (
            <span className="block text-red-600">{errors.password}</span>
          )}
        </div>
        <button type="submit" className="px-3 py-2 bg-gray-500 rounded-sm">
          Submit
        </button>
      </form>
    </>
  );
};
export default Form;
