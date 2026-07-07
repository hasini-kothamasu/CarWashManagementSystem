import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../services/api";

import "../styles/dashboard.css";
import "../styles/inventory.css";

function Inventory() {

  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("Liters");
  const [cost, setCost] = useState("");
  const [supplier, setSupplier] = useState("");

  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    try {
      const response = await api.get("/inventory");
      setInventory(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const clearForm = () => {
    setItemName("");
    setQuantity("");
    setUnit("Liters");
    setCost("");
    setSupplier("");
  };

  const saveInventory = async () => {

    if (!itemName || !quantity || !cost) {
      alert("Please fill all required fields");
      return;
    }

    try {

      await api.post("/inventory", {
        itemName,
        quantity,
        unit,
        cost,
        supplier,
        date: new Date().toISOString().split("T")[0]
      });

      alert("✅ Inventory Saved");

      clearForm();

      loadInventory();

    } catch (error) {

      console.error(error);

      alert("Failed to save");

    }

  };

  const deleteInventory = async (id) => {

    if (!window.confirm("Delete this item?")) return;

    await api.delete(`/inventory/${id}`);

    loadInventory();

  };

  const totalCost = inventory.reduce(
    (sum, item) => sum + item.cost,
    0
  );

  return (

    <div className="dashboard-container">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="inventory-container">

          <h2>📦 Inventory</h2>

          <div className="inventory-card">

            <div className="form-grid">

              <div className="form-group">
                <label>Item</label>
                <input
                  value={itemName}
                  onChange={(e)=>setItemName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Quantity</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e)=>setQuantity(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Unit</label>

                <select
                  value={unit}
                  onChange={(e)=>setUnit(e.target.value)}
                >
                  <option>Liters</option>
                  <option>Bottles</option>
                  <option>Pieces</option>
                  <option>Boxes</option>
                </select>

              </div>

              <div className="form-group">
                <label>Cost</label>
                <input
                  type="number"
                  value={cost}
                  onChange={(e)=>setCost(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Supplier</label>
                <input
                  value={supplier}
                  onChange={(e)=>setSupplier(e.target.value)}
                />
              </div>

            </div>

            <div className="button-group">

              <button
                className="clear-btn"
                onClick={clearForm}
              >
                Clear
              </button>

              <button
                className="save-btn"
                onClick={saveInventory}
              >
                Save
              </button>

            </div>

          </div>

          <div className="summary-card" style={{marginTop:"20px"}}>

            <h3>Total Inventory Cost</h3>

            <h2>₹{totalCost}</h2>

          </div>

          <div className="table-card" style={{marginTop:"20px"}}>

            <table>

              <thead>

                <tr>

                  <th>Date</th>

                  <th>Item</th>

                  <th>Qty</th>

                  <th>Unit</th>

                  <th>Cost</th>

                  <th>Supplier</th>

                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {inventory.map((item)=>(

                  <tr key={item.id}>

                    <td>{item.date}</td>

                    <td>{item.itemName}</td>

                    <td>{item.quantity}</td>

                    <td>{item.unit}</td>

                    <td>₹{item.cost}</td>

                    <td>{item.supplier}</td>

                    <td>

                      <button
                        className="delete-btn"
                        onClick={()=>deleteInventory(item.id)}
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Inventory;