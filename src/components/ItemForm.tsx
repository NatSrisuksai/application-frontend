import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiClient from "../api";

function ItemForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Name is required");
      return;
    }

    apiClient
      .post("/items", { name, description })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error creating item:", error);
        alert("Failed to create item");
      });
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          <button type="submit" style={{ backgroundColor: "yellow" }}>
            Submit
          </button>
          <Link to="/">
            <button type="button" style={{ backgroundColor: "red" }}>
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ItemForm;
