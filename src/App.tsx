import { Routes, Route } from "react-router-dom";
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1>Simple Full Stack Application</h1>
      <div style={{ width: "100%", maxWidth: "800px" }}>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/items/new" element={<ItemForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
