import { useState } from "react";

export default function Form({ moviesearch }) {
  const [formData, setFormData] = useState({ searchterm: "" });

  // Update form state on user input
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    moviesearch(formData.searchterm); // Call API function
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          placeholder="Search for a movie..."
          onChange={handleChange}
          value={formData.searchterm}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
