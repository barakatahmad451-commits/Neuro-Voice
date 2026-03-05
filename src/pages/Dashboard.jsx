import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  LogOut,
  Brain,
  LayoutDashboard,
  Upload,
  FileText,
  User,
  Heart,
  TrendingUp,
  Activity,
  BarChart3,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const dashboardData = [
  { name: "Mon", patients: 24, revenue: 2400 },
  { name: "Tue", patients: 13, revenue: 2210 },
  { name: "Wed", patients: 20, revenue: 2290 },
  { name: "Thu", patients: 39, revenue: 2000 },
  { name: "Fri", patients: 48, revenue: 2181 },
  { name: "Sat", patients: 38, revenue: 2500 },
];

export default function Dashboard({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredChart, setHoveredChart] = useState(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const bgGradient = isDarkMode
    ? "linear-gradient(135deg, #0f1729 0%, rgba(20, 45, 100, 0.8) 100%)"
    : "linear-gradient(135deg, #f0f4f8 0%, #e0eaf5 100%)";

  const textPrimary = isDarkMode ? "white" : "#0f1729";
  const textSecondary = isDarkMode ? "#93c5fd" : "#475569";
  const buttonBg = isDarkMode
    ? "rgba(59, 130, 246, 0.1)"
    : "rgba(59, 130, 246, 0.08)";
  const buttonBorder = isDarkMode
    ? "1px solid rgba(59, 130, 246, 0.3)"
    : "1px solid rgba(59, 130, 246, 0.2)";
  const cardBg = isDarkMode
    ? "linear-gradient(135deg, rgba(30, 58, 138, 0.5), rgba(20, 45, 100, 0.4))"
    : "linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(240, 249, 255, 0.7))";
  const cardBorder = isDarkMode
    ? "1px solid rgba(59, 130, 246, 0.2)"
    : "1px solid rgba(59, 130, 246, 0.15)";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
        background: bgGradient,
      }}
    >
      <style>{`
        @keyframes soft-glow { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        @keyframes heartbeat { 0%, 100% { transform: scale(1); } 25% { transform: scale(1.15); } 50% { transform: scale(1.25); } 75% { transform: scale(1.15); } }
        @keyframes heart-glow { 0% { filter: drop-shadow(0 0 0px #ec4899); } 100% { filter: drop-shadow(0 0 30px #ec4899); } }
        @keyframes revenue-glow { 0% { filter: drop-shadow(0 0 0px #10b981); } 100% { filter: drop-shadow(0 0 30px #10b981); } }
        @keyframes activity-glow { 0% { filter: drop-shadow(0 0 0px #3b82f6); } 100% { filter: drop-shadow(0 0 30px #3b82f6); } }
        @keyframes chart-glow-anim { 0% { filter: drop-shadow(0 0 0px #f59e0b); } 100% { filter: drop-shadow(0 0 30px #f59e0b); } }
        @keyframes revenue-arrow { 0%, 100% { transform: translateY(0) translateX(0); } 33% { transform: translateY(-8px) translateX(2px); } 66% { transform: translateY(-4px) translateX(-2px); } }
        @keyframes activity-zigzag { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(3deg); } 50% { transform: rotate(-3deg); } 75% { transform: rotate(2deg); } }
        @keyframes bars-grow { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.2); } }
        @keyframes brain-expand { 0% { transform: scale(1); filter: brightness(1); } 100% { transform: scale(1.3); filter: brightness(1.4) drop-shadow(0 0 30px rgba(59, 130, 246, 1)) drop-shadow(0 0 60px rgba(6, 182, 212, 0.8)); } }
        @keyframes glow-expand { 0% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(59, 130, 246, 0.2); } 100% { box-shadow: 0 0 80px rgba(59, 130, 246, 1), inset 0 0 50px rgba(6, 182, 212, 0.8); } }
        @keyframes icon-expand { 0% { transform: scale(1); } 100% { transform: scale(1.4); } }
        @keyframes chart-glow-box { 0% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.2), inset 0 0 20px rgba(59, 130, 246, 0.1); } 100% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), inset 0 0 30px rgba(6, 182, 212, 0.5); } }
        .soft-glow { animation: soft-glow 4s ease-in-out infinite; }
        .heartbeat-icon { animation: heartbeat 0.8s ease-in-out infinite; }
        .arrow-icon { animation: revenue-arrow 0.9s ease-in-out infinite; }
        .activity-icon { animation: activity-zigzag 0.8s ease-in-out infinite; }
        .chart-icon { animation: bars-grow 0.8s ease-in-out infinite; }
        .logo-glow { opacity: 0.3; transition: all 0.3s ease; background: linear-gradient(135deg, #3b82f6, #0ea5e9) !important; }
        .logo-glow:hover { opacity: 1; background: transparent !important; animation: glow-expand 0.6s ease-out forwards; }
        .logo-glow:hover svg { animation: brain-expand 0.6s ease-out forwards; }
        .icon-container { transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; }
        .icon-container:hover { background: transparent !important; }
        .icon-container:hover svg { animation: icon-expand 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards !important; }
        .heart-icon-container:hover svg { animation: icon-expand 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, heart-glow 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s forwards, heartbeat 0.8s cubic-bezier(0.4, 0, 0.6, 1) 1s infinite !important; }
        .revenue-icon-container:hover svg { animation: icon-expand 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, revenue-glow 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s forwards, revenue-arrow 0.9s cubic-bezier(0.4, 0, 0.6, 1) 1s infinite !important; }
        .activity-icon-container:hover svg { animation: icon-expand 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, activity-glow 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s forwards, activity-zigzag 0.8s cubic-bezier(0.4, 0, 0.6, 1) 1s infinite !important; }
        .chart-icon-container:hover svg { animation: icon-expand 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, chart-glow-anim 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s forwards, bars-grow 0.8s cubic-bezier(0.4, 0, 0.6, 1) 1s infinite !important; }
        .stat-card { transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); }
        .stat-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2); border-color: rgba(59, 130, 246, 0.6) !important; }
        .chart-container { transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); }
        .chart-container:hover { animation: chart-glow-box 0.8s ease-out forwards; transform: translateY(-8px); box-shadow: 0 20px 50px rgba(59, 130, 246, 0.35), 0 0 30px rgba(59, 130, 246, 0.3); border-color: rgba(59, 130, 246, 0.8) !important; }
        .chart-container:hover text { filter: brightness(1.1); }
      `}</style>

      {/* Background Orbs */}
      <div
        className="soft-glow"
        style={{
          position: "fixed",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.08), transparent)",
          borderRadius: "50%",
          top: "-15%",
          left: "-10%",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        className="soft-glow"
        style={{
          position: "fixed",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.06), transparent)",
          borderRadius: "50%",
          bottom: "-10%",
          right: "-5%",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Navbar */}
      <Navbar isDarkMode={isDarkMode} isAuthenticated={true} setIsLoggedIn={setIsLoggedIn} />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 10,
          overflow: "hidden",
        }}
      >
        {/* Content */}
        <div style={{ flex: 1, padding: "30px 40px", overflowY: "auto", maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
          {/* Stats Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            {[
              {
                icon: Heart,
                label: "Active Patients",
                value: "1,234",
                color: "#ec4899",
              },
              {
                icon: TrendingUp,
                label: "Monthly Revenue",
                value: "$45,230",
                color: "#10b981",
              },
              {
                icon: Activity,
                label: "Consultations",
                value: "892",
                color: "#3b82f6",
              },
              {
                icon: BarChart3,
                label: "Avg Rating",
                value: "4.8★",
                color: "#f59e0b",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="stat-card"
                style={{
                  background: cardBg,
                  border: cardBorder,
                  borderRadius: "16px",
                  padding: "24px",
                  backdropFilter: "blur(10px)",
                  zIndex: 5,
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      color: textSecondary,
                      fontWeight: "600",
                    }}
                  >
                    {stat.label}
                  </span>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: `rgba(${stat.color === "#ec4899" ? "236, 72, 153" : stat.color === "#10b981" ? "16, 185, 129" : stat.color === "#3b82f6" ? "59, 130, 246" : "245, 158, 11"}, 0.1)`,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    className={`icon-container ${i === 0 ? "heart-icon-container" : i === 1 ? "revenue-icon-container" : i === 2 ? "activity-icon-container" : "chart-icon-container"}`}
                  >
                    <stat.icon
                      size={20}
                      color={stat.color}
                      strokeWidth={2}
                      style={{
                        transformOrigin: "center",
                        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />
                  </div>
                </div>
                <h3
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: textPrimary,
                    margin: "0",
                  }}
                >
                  {stat.value}
                </h3>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "20px",
            }}
          >
            {/* Area Chart */}
            <div
              className="chart-container"
              style={{
                background: cardBg,
                border: cardBorder,
                borderRadius: "16px",
                padding: "24px",
                backdropFilter: "blur(10px)",
                zIndex: 5,
              }}
              onMouseEnter={() => setHoveredChart(0)}
              onMouseLeave={() => setHoveredChart(null)}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: textPrimary,
                  margin: "0 0 20px 0",
                }}
              >
                Patient Visits
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={dashboardData}>
                  <defs>
                    <linearGradient
                      id="colorPatients"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={
                      isDarkMode
                        ? "rgba(59, 130, 246, 0.2)"
                        : "rgba(59, 130, 246, 0.15)"
                    }
                  />
                  <XAxis dataKey="name" stroke={textSecondary} />
                  <YAxis stroke={textSecondary} />
                  <Tooltip
                    contentStyle={{
                      background: isDarkMode
                        ? "rgba(15, 23, 42, 0.9)"
                        : "rgba(255, 255, 255, 0.9)",
                      border: `1px solid ${isDarkMode ? "rgba(59, 130, 246, 0.3)" : "rgba(59, 130, 246, 0.2)"}`,
                      borderRadius: "8px",
                      color: textPrimary,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="patients"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorPatients)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div
              className="chart-container"
              style={{
                background: cardBg,
                border: cardBorder,
                borderRadius: "16px",
                padding: "24px",
                backdropFilter: "blur(10px)",
                zIndex: 5,
              }}
              onMouseEnter={() => setHoveredChart(1)}
              onMouseLeave={() => setHoveredChart(null)}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: textPrimary,
                  margin: "0 0 20px 0",
                }}
              >
                Revenue
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={dashboardData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={
                      isDarkMode
                        ? "rgba(59, 130, 246, 0.2)"
                        : "rgba(59, 130, 246, 0.15)"
                    }
                  />
                  <XAxis dataKey="name" stroke={textSecondary} />
                  <YAxis stroke={textSecondary} />
                  <Tooltip
                    contentStyle={{
                      background: isDarkMode
                        ? "rgba(15, 23, 42, 0.9)"
                        : "rgba(255, 255, 255, 0.9)",
                      border: `1px solid ${isDarkMode ? "rgba(59, 130, 246, 0.3)" : "rgba(59, 130, 246, 0.2)"}`,
                      borderRadius: "8px",
                      color: textPrimary,
                    }}
                  />
                  <Bar dataKey="revenue" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      <Footer isDarkMode={isDarkMode} isAuthenticated={true} />
    </div>
  );
}
