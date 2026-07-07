import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../services/api";

import "../styles/dashboard.css";
import "../styles/customers.css";

function CustomerDetails() {

    const { phone } = useParams();

    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        loadCustomer();
    }, []);

    const loadCustomer = async () => {
        try {
            const response = await api.get(`/customers/${phone}`);
            setCustomer(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    if (!customer) {
        return <h2 style={{ padding: "30px" }}>Loading...</h2>;
    }

    return (

        <div className="dashboard-container">

            <Sidebar />

            <div className="main-content">

                <Navbar />

                <div className="customers-container">

                    <div className="card-box">

                        <h2>👤 {customer.customerName}</h2>

                        <p><strong>Phone :</strong> {customer.phone}</p>

                        <p><strong>Total Vehicles :</strong> {customer.vehicles}</p>

                        <p><strong>Total Visits :</strong> {customer.visits}</p>

                        <p><strong>Total Spent :</strong> ₹{customer.totalSpent}</p>

                    </div>

                    <div className="activity-card" style={{ marginTop: "25px" }}>

                        <h3>Wash History</h3>

                        <table>

                            <thead>

                                <tr>

                                    <th>Date</th>

                                    <th>Vehicle</th>

                                    <th>Brand</th>

                                    <th>Model</th>

                                    <th>Amount</th>

                                    <th>Payment</th>

                                </tr>

                            </thead>

                            <tbody>

                                {customer.history.map((wash) => (

                                    <tr key={wash.id}>

                                        <td>{wash.date}</td>

                                        <td>{wash.vehicleNumber}</td>

                                        <td>{wash.brand}</td>

                                        <td>{wash.model}</td>

                                        <td>₹{wash.totalAmount}</td>

                                        <td>{wash.payment}</td>

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

export default CustomerDetails;