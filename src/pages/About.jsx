import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  const [isDarkMode] = useState(true);

  const bgGradient = isDarkMode
    ? "linear-gradient(135deg, #0f1729 0%, rgba(20, 45, 100, 0.8) 100%)"
    : "linear-gradient(135deg, #f0f4f8 0%, #e0eaf5 100%)";

  const textPrimary = isDarkMode ? "white" : "#0f1729";
  const textSecondary = isDarkMode ? "#93c5fd" : "#475569";

  return (
    <div style={{ background: bgGradient, minHeight: "100vh" }}>
      <Navbar isDarkMode={isDarkMode} />
      
      <div style={{ padding: "60px 40px", maxWidth: "1000px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", color: textPrimary, marginBottom: "30px" }}>
          About NeuroVoice
        </h1>

        <div style={{ 
          backgroundColor: isDarkMode ? "rgba(30, 58, 138, 0.5)" : "rgba(255, 255, 255, 0.8)",
          border: isDarkMode ? "1px solid rgba(59, 130, 246, 0.3)" : "1px solid rgba(59, 130, 246, 0.2)",
          padding: "40px",
          borderRadius: "12px",
          marginBottom: "40px"
        }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#3b82f6", marginBottom: "15px" }}>
            Our Mission
          </h2>
          <p style={{ color: textSecondary, lineHeight: "1.8", fontSize: "16px" }}>
            NeuroVoice aims to revolutionize neurological health screening through advanced voice analysis technology. 
            We believe that early detection and continuous monitoring can significantly improve quality of life for individuals 
            with neurological conditions.
          </p>
        </div>

        <div style={{ 
          backgroundColor: isDarkMode ? "rgba(30, 58, 138, 0.5)" : "rgba(255, 255, 255, 0.8)",
          border: isDarkMode ? "1px solid rgba(59, 130, 246, 0.3)" : "1px solid rgba(59, 130, 246, 0.2)",
          padding: "40px",
          borderRadius: "12px"
        }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#3b82f6", marginBottom: "15px" }}>
            How It Works
          </h2>
          <p style={{ color: textSecondary, lineHeight: "1.8", fontSize: "16px" }}>
            Our AI-powered system analyzes voice patterns and characteristics to detect potential neurological indicators. 
            The technology is non-invasive, quick, and accessible to everyone. Simply record your voice, and our system 
            provides comprehensive analysis and recommendations.
          </p>
        </div>
      </div>
      <Footer isDarkMode={isDarkMode} isAuthenticated={false} />
    </div>
  );
}
