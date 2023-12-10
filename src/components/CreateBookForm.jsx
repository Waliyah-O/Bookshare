import { useState, useEffect } from "react";
import { Link, useNavigate, Form } from "react-router-dom";
import axios from "axios";
import { requireAuth } from "../utils";
import { getHostBooks } from "../api/bookapi";

export async function loader({ params, request }) {
  await requireAuth(request);
  return getHostBooks(params.id);
}

const CreateBookForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: new Date().getTime(),
    name: "",
    price: "",
    description: "",
    type: "",
    imageUrl: "",
    hostId: "",
  });

  useEffect(() => {
    // Check local storage for saved book data on component mount
    const storedBookDataString = localStorage.getItem("savedBookData");
    if (storedBookDataString) {
      const storedBookData = JSON.parse(storedBookDataString);
      setFormData(storedBookData);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate(`/host/books/${formData.id}`);

    axios
      .post("/api/books", formData)
      .then((response) => {
        alert(`Status: Book ${response.statusText} `);

        if (response.data && response.data.id !== null) {
          // Save the book data to local storage
          const bookData = {
            id: formData.id,
            name: formData.name,
            price: formData.price,
            description: formData.description,
            type: formData.type,
            imageUrl: formData.imageUrl,
            hostId: formData.hostId,
          };

          // Convert bookData to a JSON string
          const bookDataString = JSON.stringify(bookData);

          // Save bookDataString to local storage
          localStorage.setItem("savedBookData", bookDataString);

          // Clear form data
          setFormData({
            name: "",
            id: "",
            price: 0,
            description: "",
            type: "",
            imageUrl: "",
            hostId: 0,
          });
        } else {
          // Handle the case where the 'id' is not found in the server response
          console.error(
            "Error: No 'id' found in the server response.",
            response.data
          );
        }
      })
      .catch((error) => {
        // Handle errors more gracefully (e.g., show an error message to the user)
        console.error("Error creating book", error);
      });
  };

  return (
    <div className="login-container">
      <h3>Add new book</h3>
      <Form method="post" className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">Book ID:</label>
          <input
            type="number"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
          />
        </div>
        
        <div>
          <label htmlFor="">price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ display: "flex", gap: "1em" }}>
          <div>
            <select
              value={formData.type}
              id="type"
              name="type"
              onChange={handleInputChange}
            >
              <option value="">Select option</option>
              <option value="novel">Novel</option>
              <option value="book">Book</option>
              <option value="article">Article</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="">imageUrl:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">hostId:</label>
          <input
            type="number"
            id="hostId"
            name="hostId"
            value={formData.hostId}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">upload</button>
      </Form>
    </div>
  );
};

export default CreateBookForm;
