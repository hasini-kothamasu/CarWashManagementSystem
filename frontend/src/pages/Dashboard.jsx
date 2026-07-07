import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/dashboard.css";
function Dashboard() {
  const navigate = useNavigate();
  const [recentExpenses, setRecentExpenses] = useState([]);
 


const [dashboard, setDashboard] = useState({
  todayIncome: 0,
  todayExpense: 0,
  todayProfit: 0,
  todayVehicles: 0,

  weeklyIncome: 0,
  weeklyExpense: 0,
  weeklyProfit: 0,
  weeklyVehicles: 0,

  monthlyIncome: 0,
  monthlyExpense: 0,
  monthlyProfit: 0,
  monthlyVehicles: 0,
});

const [recentWashes, setRecentWashes] = useState([]);
useEffect(() => {
  loadDashboard();
}, []);

const loadDashboard = async () => {
  try {

    // Dashboard
    const dashboardResponse = await api.get("/washes/dashboard");
    setDashboard(dashboardResponse.data);

    // Recent Washes
    const recentResponse = await api.get("/washes/recent");
    setRecentWashes(recentResponse.data);

    // Recent Expenses
    const expenseResponse = await api.get("/expenses/recent");
    setRecentExpenses(expenseResponse.data);

  } catch (error) {
    console.error(error);
  }
};
  return (
    <div className="dashboard-container">

      <Sidebar />

      <div className="main-content">

        <Navbar />

       <div className="cards">

  <StatCard
    title="Today's Income"
   value={`₹${dashboard.todayIncome}`}
    color="#2563EB"
    subtitle="+12% from yesterday"
  />

  <StatCard
    title="Today's Expenses"
    value={`₹${dashboard.todayExpense}`}
    color="#EF4444"
    subtitle="Today's spending"
  />

  <StatCard
    title="Today's Profit"
    value={`₹${dashboard.todayProfit}`}
    color="#22C55E"
    subtitle="Excellent performance"
  />

  <StatCard
    title="Vehicles Washed"
    value={dashboard.todayVehicles}
    color="#F59E0B"
    subtitle="Today"
  />

</div>
<div className="quick-actions">

   <button onClick={() => navigate("/newwash")}>
    🚗 New Wash
   </button>
    <button onClick={() => navigate("/expenses")}>
  💰 Add Expense
</button>

    <button onClick={() => navigate("/customers")}>
  👥 Customers
</button>

    <button onClick={() => navigate("/reports")}>
      📊 Reports
      </button>

</div>
<div className="summary-section">

    <div className="summary-card">

        <h3>Weekly Summary</h3>

        <p>Income : ₹{dashboard.weeklyIncome}</p>

        <p>Expense : ₹{dashboard.weeklyExpense}</p>

        <p>Profit : ₹{dashboard.weeklyProfit}</p>

        <p>Vehicles : {dashboard.weeklyVehicles}</p>

    </div>

    <div className="summary-card">

        <h3>Monthly Summary</h3>

        <p>Income : ₹{dashboard.monthlyIncome}</p>

        <p>Expense : ₹{dashboard.monthlyExpense}</p>

        <p>Profit : ₹{dashboard.monthlyProfit}</p>

        <p>Vehicles : {dashboard.monthlyVehicles}</p>

    </div>

</div>
<div className="activity-section">

  <div className="activity-card">

    <h3>Recent Washes</h3>

    <table>
      <thead>
        <tr>
          <th>Vehicle</th>
          <th>Customer</th>
          <th>Amount</th>
        </tr>
      </thead>

      <tbody>

{recentWashes.map((wash) => (

<tr key={wash.id}>

<td>{wash.vehicleNumber}</td>

<td>{wash.customerName}</td>

<td>₹{wash.totalAmount}</td>

</tr>

))}

</tbody>
    </table>

  </div>

  <div className="activity-card">

    <h3>Recent Expenses</h3>

    <table>

      <thead>

        <tr>
          <th>Category</th>
          <th>Amount</th>
        </tr>

      </thead>

      <tbody>

{recentExpenses.map((expense) => (

<tr key={expense.id}>

<td>{expense.category}</td>

<td>₹{expense.amount}</td>

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

export default Dashboard;