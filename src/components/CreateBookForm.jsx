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
    originalPrice: "",
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
            originalPrice: formData.originalPrice,
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
    <div className="create-book-container">
      <h3>Add new book</h3>
      <Form method="post" className="create-book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Book name..."
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          id="id"
          name="id"
          placeholder="book id..."
          value={formData.id}
          onChange={handleInputChange}
        />
        <input
          type="number"
          id="originalPrice"
          name="originalPrice"
          placeholder="original price..."
          value={formData.originalPrice}
          onChange={handleInputChange}
        />
        <input
          type="number"
          id="price"
          name="price"
          placeholder="price"
          value={formData.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="description"
          name="description"
          placeholder="description..."
          value={formData.description}
          onChange={handleInputChange}
        />
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
        <input
          type="file"
          name="imageFile"
          id="imageFile"
          value={formData.imageFile}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleInputChange}
        />
        <input
          type="number"
          id="hostId"
          name="hostId"
          value={formData.hostId}
          onChange={handleInputChange}
        />
        <button type="submit">upload</button>
      </Form>
    </div>
  );
};

export default CreateBookForm;
