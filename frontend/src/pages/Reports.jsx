import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../services/api";

import "../styles/dashboard.css";
import "../styles/reports.css";

function Reports() {

    const [dashboard, setDashboard] = useState(null);

    useEffect(() => {
        loadReport();
    }, []);

    const loadReport = async () => {
        try {
            const response = await api.get("/washes/dashboard");
            setDashboard(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    if (!dashboard) {
        return <h2 style={{ padding: "30px" }}>Loading...</h2>;
    }

    return (

        <div className="dashboard-container">

            <Sidebar />

            <div className="main-content">

                <Navbar />

                <div className="reports-container">

                    <h2>📊 Reports</h2>

                    <div className="report-grid">

                        <div className="report-card">

                            <h3>Today</h3>

                            <p>Income : ₹{dashboard.todayIncome}</p>

                            <p>Expense : ₹{dashboard.todayExpense}</p>

                            <p>Profit : ₹{dashboard.todayProfit}</p>

                            <p>Vehicles : {dashboard.todayVehicles}</p>

                        </div>

                        <div className="report-card">

                            <h3>This Week</h3>

                            <p>Income : ₹{dashboard.weeklyIncome}</p>

                            <p>Expense : ₹{dashboard.weeklyExpense}</p>

                            <p>Profit : ₹{dashboard.weeklyProfit}</p>

                            <p>Vehicles : {dashboard.weeklyVehicles}</p>

                        </div>

                        <div className="report-card">

                            <h3>This Month</h3>

                            <p>Income : ₹{dashboard.monthlyIncome}</p>

                            <p>Expense : ₹{dashboard.monthlyExpense}</p>

                            <p>Profit : ₹{dashboard.monthlyProfit}</p>

                            <p>Vehicles : {dashboard.monthlyVehicles}</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Reports;