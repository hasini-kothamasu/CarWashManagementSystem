import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../services/api";

import "../styles/dashboard.css";
import "../styles/bill.css";

function Bill() {

    const { id } = useParams();

    const [bill, setBill] = useState(null);

    useEffect(() => {
        loadBill();
    }, []);

    const loadBill = async () => {

        const response = await api.get(`/washes/bill/${id}`);

        setBill(response.data);

    };

    if (!bill) {

        return <h2 style={{padding:"30px"}}>Loading...</h2>;

    }

    return (

        <div className="dashboard-container">

            <Sidebar />

            <div className="main-content">

                <Navbar />

                <div className="bill-container">

                    <div className="bill-card">

                        <h1>🚗 ABHI CAR WASH</h1>

                        <hr />

                        <p><strong>Bill No :</strong> CW-{String(bill.id).padStart(4,"0")}</p>

                        <p><strong>Date :</strong> {bill.date}</p>

                        <p><strong>Time :</strong> {bill.time}</p>

                        <hr />

                        <p><strong>Customer :</strong> {bill.customerName}</p>

                        <p><strong>Phone :</strong> {bill.phone}</p>

                        <p><strong>Vehicle :</strong> {bill.vehicleNumber}</p>

                        <p><strong>Brand :</strong> {bill.brand}</p>

                        <p><strong>Model :</strong> {bill.model}</p>

                        <hr />

                        <p>Vehicle Wash : ₹{bill.vehicleAmount}</p>

                        <p>Interior Polish : ₹{bill.interiorAmount}</p>

                        <hr />

                        <h2>Total : ₹{bill.totalAmount}</h2>

                        <p><strong>Payment :</strong> {bill.payment}</p>

                        <br />

                        <button
                        className="save-btn"
                        onClick={()=>window.print()}
                        >
                            🖨 Print Bill
                        </button>
                        <hr />

<h3 style={{textAlign:"center"}}>
Thank You 😊
</h3>

<p style={{textAlign:"center"}}>
Visit Again!
</p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Bill;