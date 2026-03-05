import { useState } from "react";
import { Link } from "react-router-dom";
import { Brain, Menu, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [isDarkMode] = useState(true);

  const bgGradient = isDarkMode
    ? "linear-gradient(135deg, #0f1729 0%, rgba(20, 45, 100, 0.8) 100%)"
    : "linear-gradient(135deg, #f0f4f8 0%, #e0eaf5 100%)";

  const textPrimary = isDarkMode ? "white" : "#0f1729";
  const textSecondary = isDarkMode ? "#93c5fd" : "#475569";

  return (
    <div style={{ background: bgGradient, minHeight: "100vh" }}>
      <Navbar isDarkMode={isDarkMode} />
      
      <div style={{ padding: "60px 40px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Hero Section */}
        <div style={{ textAlign: "center", paddingTop: "60px", paddingBottom: "80px" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
            <Brain size={80} color="#3b82f6" />
          </div>
          <h1 style={{ 
            fontSize: "48px", 
            fontWeight: "bold", 
            color: textPrimary,
            marginBottom: "20px"
          }}>
            NeuroVoice
          </h1>
          <p style={{ 
            fontSize: "20px", 
            color: textSecondary, 
            marginBottom: "40px",
            maxWidth: "600px",
            margin: "0 auto 40px"
          }}>
            Advanced Voice Analysis Technology for Neurological Health Screening
          </p>
          <Link to="/screening" style={{
            display: "inline-block",
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "12px 40px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "600",
            transition: "all 0.3s ease",
            cursor: "pointer"
          }}>
            Start Screening
          </Link>
        </div>

        {/* Features Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "30px",
          marginTop: "60px"
        }}>
          {[
            { title: "Accurate", desc: "AI-powered analysis for precise results" },
            { title: "Fast", desc: "Get insights in seconds" },
            { title: "Secure", desc: "Your data is encrypted and private" }
          ].map((feature, i) => (
            <div key={i} style={{
              backgroundColor: isDarkMode ? "rgba(30, 58, 138, 0.5)" : "rgba(255, 255, 255, 0.8)",
              border: isDarkMode ? "1px solid rgba(59, 130, 246, 0.3)" : "1px solid rgba(59, 130, 246, 0.2)",
              padding: "30px",
              borderRadius: "12px",
              textAlign: "center"
            }}>
              <h3 style={{ color: "#3b82f6", marginBottom: "10px", fontSize: "18px", fontWeight: "600" }}>
                {feature.title}
              </h3>
              <p style={{ color: textSecondary, fontSize: "14px" }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer isDarkMode={isDarkMode} isAuthenticated={false} />
    </div>
  );
}
