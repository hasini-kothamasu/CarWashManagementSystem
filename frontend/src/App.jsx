import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import Login from "./pages/Login";

function ProtectedRoute({ children }) {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/customers"
          element={
            <ProtectedRoute>
              <Customers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wash-history"
          element={
            <ProtectedRoute>
              <WashHistory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/inventory"
          element={
            <ProtectedRoute>
              <Inventory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bills"
          element={
            <ProtectedRoute>
              <Bills />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bill/:id"
          element={
            <ProtectedRoute>
              <Bill />
            </ProtectedRoute>
          }
        />

        <Route
          path="/expenses"
          element={
            <ProtectedRoute>
              <Expense />
            </ProtectedRoute>
          }
        />

        <Route
          path="/newwash"
          element={
            <ProtectedRoute>
              <NewWash />
            </ProtectedRoute>
          }
        />

        <Route
          path="/customers/:phone"
          element={
            <ProtectedRoute>
              <CustomerDetails />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;