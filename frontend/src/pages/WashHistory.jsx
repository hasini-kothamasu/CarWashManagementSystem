import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../services/api";

import "../styles/dashboard.css";
import "../styles/washhistory.css";

function WashHistory() {

    const [washes, setWashes] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadWashes();
    }, []);

    const loadWashes = async () => {
        const response = await api.get("/washes");
        setWashes(response.data);
    };

    const deleteWash = async (id) => {

        if (!window.confirm("Delete this wash?")) return;

        await api.delete(`/washes/${id}`);

        loadWashes();

    };

    const filtered = washes.filter((wash) =>
        wash.customerName.toLowerCase().includes(search.toLowerCase()) ||
        wash.vehicleNumber.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className="dashboard-container">

            <Sidebar />

            <div className="main-content">

                <Navbar />

                <div className="customers-container">

                    <h2>🚗 Wash History</h2>

                    <input
                        className="search-box"
                        placeholder="Search Customer / Vehicle"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <div className="table-card">

                        <table>

                            <thead>

                                <tr>

                                    <th>Date</th>
                                    <th>Customer</th>
                                    <th>Vehicle</th>
                                    <th>Category</th>
                                    <th>Amount</th>
                                    <th>Payment</th>
                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {filtered.map((wash) => (

                                    <tr key={wash.id}>

                                        <td>{wash.date}</td>

                                        <td>{wash.customerName}</td>

                                        <td>{wash.vehicleNumber}</td>

                                        <td>{wash.category}</td>

                                        <td>₹{wash.totalAmount}</td>

                                        <td>{wash.payment}</td>

                                        <td>

                                            <button
                                                className="delete-btn"
                                                onClick={() => deleteWash(wash.id)}
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

export default WashHistory;