import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiClient from "../api";
import type { Item } from "../types/item";

function ItemList() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiClient
      .get("/items")
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading items...</div>;
  }

  return (
    <div>
      <h2>Item List</h2>
      <Link to="/items/new">
        <button>Add New Item</button>
      </Link>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <strong>{item.name}</strong>
              {item.description && <span>- {item.description}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
