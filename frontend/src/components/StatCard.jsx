import { FaArrowTrendUp } from "react-icons/fa6";

function StatCard({ title, value, color, subtitle }) {
  return (
    <div className="stat-card">
      <div className="card-header">
        <h6>{title}</h6>
        <FaArrowTrendUp style={{ color }} />
      </div>

      <h2 style={{ color }}>{value}</h2>

      <p>{subtitle}</p>
    </div>
  );
}

export default StatCard;