import { useState } from "react";
import { FileText, Download, Eye, Share2, BarChart3 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MyReports({ setIsLoggedIn }) {
  const [isDarkMode] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all");

  const bgGradient = isDarkMode
    ? "linear-gradient(135deg, #0f1729 0%, rgba(20, 45, 100, 0.8) 100%)"
    : "linear-gradient(135deg, #f0f4f8 0%, #e0eaf5 100%)";

  const textPrimary = isDarkMode ? "white" : "#0f1729";
  const textSecondary = isDarkMode ? "#93c5fd" : "#475569";
  const cardBg = isDarkMode ? "rgba(30, 58, 138, 0.5)" : "rgba(255, 255, 255, 0.8)";
  const cardBorder = isDarkMode ? "1px solid rgba(59, 130, 246, 0.3)" : "1px solid rgba(59, 130, 246, 0.2)";

  const reports = [
    { 
      id: 1, 
      name: "Comprehensive Voice Analysis", 
      date: "Feb 28, 2026", 
      score: "92%",
      status: "completed",
      type: "Full Analysis",
      details: "30-min recording, 150+ voice metrics"
    },
    { 
      id: 2, 
      name: "Baseline Neurological Screening", 
      date: "Feb 20, 2026", 
      score: "88%",
      status: "completed",
      type: "Screening",
      details: "Quick baseline assessment completed"
    },
    { 
      id: 3, 
      name: "Follow-up Analysis Report", 
      date: "Jan 15, 2026", 
      score: "90%",
      status: "completed",
      type: "Follow-up",
      details: "Compared with previous baseline"
    },
    { 
      id: 4, 
      name: "Professional Review Pending", 
      date: "Jan 8, 2026", 
      score: "-",
      status: "pending",
      type: "Full Analysis",
      details: "Awaiting clinician review"
    },
  ];

  const filterReports = reports.filter(report => {
    if (filterStatus === "all") return true;
    return report.status === filterStatus;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case "completed": return "#10b981";
      case "pending": return "#f59e0b";
      case "processing": return "#3b82f6";
      default: return "#6b7280";
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case "completed": return "✓ Completed";
      case "pending": return "⏱ Pending";
      case "processing": return "⟳ Processing";
      default: return "—";
    }
  };

  return (
    <div style={{ background: bgGradient, minHeight: "100vh" }}>
      <Navbar isDarkMode={isDarkMode} isAuthenticated={true} setIsLoggedIn={setIsLoggedIn} />

      <div style={{ padding: "60px 40px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "36px", fontWeight: "bold", color: textPrimary, margin: 0 }}>
            My Reports
          </h1>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => setFilterStatus("all")}
              style={{
                padding: "8px 16px",
                backgroundColor: filterStatus === "all" ? "#3b82f6" : "transparent",
                color: filterStatus === "all" ? "white" : textSecondary,
                border: `1px solid ${filterStatus === "all" ? "#3b82f6" : "rgba(59, 130, 246, 0.3)"}`,
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "600"
              }}
            >
              All
            </button>
            <button
              onClick={() => setFilterStatus("completed")}
              style={{
                padding: "8px 16px",
                backgroundColor: filterStatus === "completed" ? "#10b981" : "transparent",
                color: filterStatus === "completed" ? "white" : textSecondary,
                border: `1px solid ${filterStatus === "completed" ? "#10b981" : "rgba(59, 130, 246, 0.3)"}`,
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "600"
              }}
            >
              Completed
            </button>
            <button
              onClick={() => setFilterStatus("pending")}
              style={{
                padding: "8px 16px",
                backgroundColor: filterStatus === "pending" ? "#f59e0b" : "transparent",
                color: filterStatus === "pending" ? "white" : textSecondary,
                border: `1px solid ${filterStatus === "pending" ? "#f59e0b" : "rgba(59, 130, 246, 0.3)"}`,
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "600"
              }}
            >
              Pending
            </button>
          </div>
        </div>

        {filterReports.length === 0 ? (
          <div style={{
            textAlign: "center",
            padding: "60px 20px",
            backgroundColor: cardBg,
            border: cardBorder,
            borderRadius: "12px"
          }}>
            <FileText size={60} color={textSecondary} style={{ margin: "0 auto 20px", opacity: 0.5 }} />
            <p style={{ color: textSecondary, fontSize: "18px" }}>
              No reports found
            </p>
          </div>
        ) : (
          <div style={{ display: "grid", gap: "20px" }}>
            {filterReports.map((report) => (
              <div key={report.id} style={{
                backgroundColor: cardBg,
                border: cardBorder,
                padding: "25px",
                borderRadius: "12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(59, 130, 246, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", flex: 1 }}>
                  <div style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: `${getStatusColor(report.status)}20`,
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <FileText size={24} color={getStatusColor(report.status)} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                      <h3 style={{ fontSize: "16px", fontWeight: "600", color: textPrimary, margin: 0 }}>
                        {report.name}
                      </h3>
                      <span style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        padding: "4px 12px",
                        backgroundColor: `${getStatusColor(report.status)}20`,
                        color: getStatusColor(report.status),
                        borderRadius: "4px"
                      }}>
                        {getStatusText(report.status)}
                      </span>
                    </div>
                    <p style={{ color: textSecondary, fontSize: "13px", margin: 0 }}>
                      {report.date} • {report.type} • {report.details}
                    </p>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  {report.score !== "-" && (
                    <div style={{
                      textAlign: "center",
                      padding: "10px 15px",
                      backgroundColor: `rgba(16, 185, 129, 0.1)`,
                      borderRadius: "8px",
                      minWidth: "60px"
                    }}>
                      <div style={{ fontSize: "20px", fontWeight: "700", color: "#10b981" }}>
                        {report.score}
                      </div>
                      <div style={{ fontSize: "11px", color: textSecondary }}>Score</div>
                    </div>
                  )}
                  
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button style={{
                      backgroundColor: "transparent",
                      color: "#3b82f6",
                      border: "1px solid rgba(59, 130, 246, 0.3)",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontWeight: "600",
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(59, 130, 246, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}>
                      <Eye size={16} />
                      View
                    </button>
                    <button style={{
                      backgroundColor: "#3b82f6",
                      color: "white",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontWeight: "600",
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#2563eb";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#3b82f6";
                    }}>
                      <Download size={16} />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer isDarkMode={isDarkMode} isAuthenticated={true} />
    </div>
  );
}
