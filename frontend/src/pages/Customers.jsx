import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import "../styles/customers.css";

function Customers() {
const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    try {
      const response = await api.get("/customers");
      setCustomers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

 const filteredCustomers = customers.filter((customer) =>
    customer.customerName.toLowerCase().includes(search.toLowerCase()) ||
    customer.phone.includes(search)
);

  return (
    <div className="dashboard-container">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="customers-container">

          <h2>👥 Customers</h2>

          <input
            type="text"
            placeholder="Search by Name, Phone or Vehicle"
            className="search-box"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="table-card">

            <table>

              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Phone</th>
                  <th>Vehicles</th>
                  <th>Visits</th>
                </tr>
              </thead>

              <tbody>

                {filteredCustomers.map((customer, index) => (

<tr
key={index}
style={{cursor:"pointer"}}
onClick={()=>navigate(`/customers/${customer.phone}`)}
>
                    <td>{customer.customerName}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.vehicles}</td>
<td>{customer.visits}</td>
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

export default Customers;