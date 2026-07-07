import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../services/api";

import "../styles/dashboard.css";
import "../styles/customers.css";

function Bills() {

    const navigate = useNavigate();

    const [bills, setBills] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadBills();
    }, []);

    const loadBills = async () => {

        const response = await api.get("/washes");

        setBills(response.data);

    };

    const filtered = bills.filter((bill) =>

        bill.customerName.toLowerCase().includes(search.toLowerCase())

        ||

        bill.vehicleNumber.toLowerCase().includes(search.toLowerCase())

    );

    return (

        <div className="dashboard-container">

            <Sidebar />

            <div className="main-content">

                <Navbar />

                <div className="customers-container">

                    <h2>🧾 Bills</h2>

                    <input
                        className="search-box"
                        placeholder="Search Customer / Vehicle"
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                    />

                    <div className="table-card">

                        <table>

                            <thead>

                                <tr>

                                    <th>Date</th>

                                    <th>Customer</th>

                                    <th>Vehicle</th>

                                    <th>Total</th>

                                    <th>Bill</th>

                                </tr>

                            </thead>

                            <tbody>

                                {filtered.map((bill)=>(

                                    <tr key={bill.id}>

                                        <td>{bill.date}</td>

                                        <td>{bill.customerName}</td>

                                        <td>{bill.vehicleNumber}</td>

                                        <td>₹{bill.totalAmount}</td>

                                        <td>

<button

className="save-btn"

onClick={()=>navigate(`/bill/${bill.id}`)}

>

View

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

export default Bills;