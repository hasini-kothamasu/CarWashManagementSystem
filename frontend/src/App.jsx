import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import NewWash from "./pages/NewWash";
import Expense from "./pages/Expense";
import CustomerDetails from "./pages/CustomerDetails";
import WashHistory from "./pages/WashHistory";
import Reports from "./pages/Reports";
import Inventory from "./pages/Inventory";
import Profile from "./pages/Profile";
import Bills from "./pages/Bills";
import Bill from "./pages/Bill";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/wash-history" element={<WashHistory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/bills" element={<Bills />} />

<Route path="/bill/:id" element={<Bill />} />
        <Route path="/expenses" element={<Expense />} />
        <Route path="/newwash" element={<NewWash />} />
        <Route
path="/customers/:phone"
element={<CustomerDetails />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;