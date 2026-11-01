import {
  FaHome,
  FaCar,
  FaUsers,
  FaHistory,
  FaFileInvoiceDollar,
  FaMoneyBillWave,
  FaBoxes,
  FaChartBar,
  FaCog,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import carWashLogo from "../assets/abhi-car-wash.png";
const menuItems = [
  { icon: <FaHome />, title: "Dashboard", path: "/" },
  { icon: <FaCar />, title: "New Wash", path: "/newwash" },
  { icon: <FaUsers />, title: "Customers", path: "/customers" },
  { icon: <FaHistory />, title: "Wash History", path: "/wash-history" },
  { icon: <FaFileInvoiceDollar />, title: "Bills", path: "/bills" },
  { icon: <FaMoneyBillWave />, title: "Expenses", path: "/expenses" },
  { icon: <FaBoxes />, title: "Inventory", path: "/inventory" },
  { icon: <FaChartBar />, title: "Reports", path: "/reports" },
  { icon: <FaCog />, title: "Profile", path: "/profile" },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
  <img
    src={carWashLogo}
    alt="Abhi Car Wash Logo"
    className="sidebar-logo-image"
  />
  <h4>ABHI CAR WASH</h4>
</div>

   <ul className="menu">
  {menuItems.map((item, index) => (
   <NavLink
  key={index}
  to={item.path}
  end={item.path === "/"}
  className={({ isActive }) =>
    isActive ? "menu-link active" : "menu-link"
  }
>
      {item.icon}
      <span>{item.title}</span>
    </NavLink>
  ))}
</ul>
    </div>
  );
}

export default Sidebar;