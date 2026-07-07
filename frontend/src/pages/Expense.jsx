import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../services/api";

import "../styles/dashboard.css";
import "../styles/expense.css";

function Expense() {

  const [category, setCategory] = useState("Shampoo");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const clearForm = () => {
    setCategory("Rent");
    setAmount("");
    setDescription("");
  };

  const saveExpense = async () => {

    if (!amount) {
      alert("Enter Amount");
      return;
    }

    const expense = {
      category,
      amount: Number(amount),
      description,
      date: new Date().toISOString().split("T")[0],
      time: new Date().toTimeString().split(" ")[0]
    };

    try {

      await api.post("/expenses", expense);

      alert("✅ Expense Saved");

      clearForm();

    } catch (error) {

      console.error(error);

      alert("❌ Failed to Save Expense");

    }

  };

  return (

    <div className="dashboard-container">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="expense-container">

          <h2>💰 Add Expense</h2>

          <div className="expense-card">

            <div className="form-group">

              <label>Category</label>

              <select
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
              >

                
                <option>Water</option>
                <option>Electricity</option>
                <option>Salary</option>
                <option>Rent</option>
                <option>Other</option>

              </select>

            </div>

            <div className="form-group">

              <label>Amount</label>

              <input
                type="number"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                placeholder="Enter amount"
              />

            </div>

            <div className="form-group">

              <label>Description</label>

              <textarea
                rows="4"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                placeholder="Description"
              />

            </div>

            <div className="button-group">

              <button
                className="clear-btn"
                onClick={clearForm}
              >
                🗑 Clear
              </button>

              <button
                className="save-btn"
                onClick={saveExpense}
              >
                💾 Save Expense
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Expense;