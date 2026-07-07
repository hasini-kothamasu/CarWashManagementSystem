import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../services/api";
import "../styles/dashboard.css";
import "../styles/newwash.css";

function NewWash() {

  const [interior, setInterior] = useState(false);
  const prices = {
  Bike: 100,
  "Small Car": 300,
  "Medium Car": 350,
  "Large Car": 400,
};
const [customerName, setCustomerName] = useState("");
const [phone, setPhone] = useState("");
const [vehicleNumber, setVehicleNumber] = useState("");
const [brand, setBrand] = useState("Maruti Suzuki");
const [model, setModel] = useState("");
const [category, setCategory] = useState("Small Car");
const [quantity, setQuantity] = useState(1);

const [payment, setPayment] = useState("Cash");
const [notes, setNotes] = useState("");

const vehicleAmount = prices[category] * quantity;
const interiorAmount = interior ? 100 * quantity : 0;
const totalAmount = vehicleAmount + interiorAmount;
const clearForm = () => {
  setCustomerName("");
  setPhone("");
  setVehicleNumber("");
  setBrand("Maruti Suzuki");
  setModel("");
  setCategory("Small Car");
  setQuantity(1);
  setInterior(false);
  setPayment("Cash");
  setNotes("");
};
const saveWash = async () => {

    if (!customerName.trim()) {
        alert("Enter Customer Name");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Enter Valid Phone Number");
        return;
    }

    if (!vehicleNumber.trim()) {
        alert("Enter Vehicle Number");
        return;
    }

    if (!model.trim()) {
        alert("Enter Vehicle Model");
        return;
    }

    const wash = {
        customerName,
        phone,
        vehicleNumber,
        brand,
        model,
        category,
        quantity,
        interior,
        payment,
        notes,
        vehicleAmount,
        interiorAmount,
        totalAmount,
        date: new Date().toISOString().split("T")[0],
time: new Date().toTimeString().split(" ")[0]
    };

    try {

        await api.post("/washes", wash);

        alert("✅ Wash Saved Successfully");

        clearForm();

    } catch (error) {

        console.error(error);

        alert("❌ Failed to Save Wash");

    }

};
  return (
    <div className="dashboard-container">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="newwash-container">

          <h2>🚗 New Wash</h2>
          <p className="date-time">
  📅 {new Date().toLocaleDateString()} &nbsp;&nbsp;
  🕒 {new Date().toLocaleTimeString()}
</p>

          <div className="newwash-grid">

            {/* LEFT SIDE */}

            <div className="left-section">

             {/* Customer */}

<div className="card-box">

  <h3>Customer Details</h3>

  <div className="form-grid">

    <div className="form-group">
      <label>Customer Name</label>
      <input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Enter customer name"
      />
    </div>

    <div className="form-group">
      <label>Phone Number</label>
      <input
  type="text"
  value={phone}
  maxLength={10}
  onChange={(e) =>
    setPhone(e.target.value.replace(/\D/g, ""))
  }
  placeholder="Enter phone number"
/>
    </div>

  </div>

</div>

             <div className="card-box">

  <h3>Vehicle Details</h3>

  <div className="form-grid">

    <div className="form-group">
      <label>Vehicle Number</label>
      <input
        type="text"
        value={vehicleNumber}
        onChange={(e) =>
          setVehicleNumber(e.target.value.toUpperCase())
        }
        placeholder="AP39AB1234"
      />
    </div>

    <div className="form-group">
      <label>Brand</label>

      <select
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      >
        <option>Maruti Suzuki</option>
        <option>Hyundai</option>
        <option>Tata</option>
        <option>Kia</option>
        <option>Honda</option>
        <option>Toyota</option>
        <option>Mahindra</option>
      </select>

    </div>

    <div className="form-group">
      <label>Model</label>

      <input
        type="text"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder="Swift"
      />
    </div>

    <div className="form-group">

      <label>Category</label>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Bike</option>
        <option>Small Car</option>
        <option>Medium Car</option>
        <option>Large Car</option>
      </select>

    </div>

    <div className="form-group">

      <label>Quantity</label>

     <input
  type="number"
  min="1"
  value={quantity}
  onChange={(e) =>
    setQuantity(Math.max(1, Number(e.target.value) || 1))
  }
/>

    </div>

  </div>

</div>

              

              {/* Additional */}

              <div className="card-box">

                <h3>Additional Service</h3>

                <label className="checkbox">

                  <input
                    type="checkbox"
                    checked={interior}
                    onChange={() => setInterior(!interior)}
                  />

                  Interior Polish (+₹100)

                </label>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="right-section">

              <div className="card-box">

                <h3>Payment</h3>

               <select
  value={payment}
  onChange={(e) => setPayment(e.target.value)}
>
  <option>Cash</option>
  <option>UPI</option>
  <option>Card</option>
</select>

              </div>

              <div className="card-box">

                <h3>Notes</h3>

               <textarea
  rows="3"
  value={notes}
  onChange={(e) => setNotes(e.target.value)}
  placeholder="Any remarks..."
></textarea>

              </div>

              <div className="card-box">

           <h3>Bill Summary</h3>

<div className="bill-row">
  <span>Vehicle Type</span>
  <span>{category}</span>
</div>

<div className="bill-row">
  <span>Quantity</span>
  <span>{quantity}</span>
</div>

<div className="bill-row">
  <span>Vehicle Wash</span>
  <span>₹{vehicleAmount}</span>
</div>

<div className="bill-row">
  <span>Interior Polish</span>
  <span>₹{interiorAmount}</span>
</div>

<hr />

<div className="bill-total">
  <span>Total</span>
  <span>₹{totalAmount}</span>
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
onClick={saveWash}
>
💾 Save Wash
</button>

</div>


              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
);
}
export default NewWash;