import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mic, Upload, Zap, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NewAnalysis({ setIsLoggedIn }) {
  const [isDarkMode] = useState(true);
  const [mode, setMode] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const navigate = useNavigate();

  const bgGradient = isDarkMode
    ? "linear-gradient(135deg, #0f1729 0%, rgba(20, 45, 100, 0.8) 100%)"
    : "linear-gradient(135deg, #f0f4f8 0%, #e0eaf5 100%)";

  const textPrimary = isDarkMode ? "white" : "#0f1729";
  const textSecondary = isDarkMode ? "#93c5fd" : "#475569";
  const cardBg = isDarkMode ? "rgba(30, 58, 138, 0.5)" : "rgba(255, 255, 255, 0.8)";
  const cardBorder = isDarkMode ? "1px solid rgba(59, 130, 246, 0.3)" : "1px solid rgba(59, 130, 246, 0.2)";

  const handleRecordStart = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAudioFile(file.name);
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setAnalysisComplete(true);
      }, 2500);
    }
  };

  const handleReset = () => {
    setMode(null);
    setAnalysisComplete(false);
    setAudioFile(null);
    setIsProcessing(false);
  };

  return (
    <div style={{ background: bgGradient, minHeight: "100vh" }}>
      <Navbar isDarkMode={isDarkMode} isAuthenticated={true} setIsLoggedIn={setIsLoggedIn} />

      <div style={{ padding: "60px 40px", maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", color: textPrimary, marginBottom: "40px", textAlign: "center" }}>
          Start New Analysis
        </h1>

        {!mode ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
            {/* Record Option */}
            <div
              onClick={() => setMode("record")}
              style={{
                backgroundColor: cardBg,
                border: cardBorder,
                padding: "40px",
                borderRadius: "12px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = isDarkMode 
                  ? "0 20px 40px rgba(59, 130, 246, 0.3)" 
                  : "0 20px 40px rgba(59, 130, 246, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Mic size={64} color="#3b82f6" style={{ margin: "0 auto 20px" }} />
              <h2 style={{ fontSize: "24px", fontWeight: "600", color: textPrimary, marginBottom: "12px" }}>
                Record Voice
              </h2>
              <p style={{ color: textSecondary, marginBottom: "20px" }}>
                Record your voice directly. Takes 1-2 minutes.
              </p>
              <div style={{
                backgroundColor: "#3b82f6",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                fontWeight: "600",
                display: "inline-block"
              }}>
                Start Recording
              </div>
            </div>

            {/* Upload Option */}
            <div
              onClick={() => setMode("upload")}
              style={{
                backgroundColor: cardBg,
                border: cardBorder,
                padding: "40px",
                borderRadius: "12px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = isDarkMode 
                  ? "0 20px 40px rgba(59, 130, 246, 0.3)" 
                  : "0 20px 40px rgba(59, 130, 246, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Upload size={64} color="#10b981" style={{ margin: "0 auto 20px" }} />
              <h2 style={{ fontSize: "24px", fontWeight: "600", color: textPrimary, marginBottom: "12px" }}>
                Upload Audio
              </h2>
              <p style={{ color: textSecondary, marginBottom: "20px" }}>
                Upload pre-recorded audio file.
              </p>
              <div style={{
                backgroundColor: "#10b981",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                fontWeight: "600",
                display: "inline-block"
              }}>
                Browse Files
              </div>
            </div>

            {/* Quick Test Option */}
            <div
              onClick={() => setMode("quicktest")}
              style={{
                backgroundColor: cardBg,
                border: cardBorder,
                padding: "40px",
                borderRadius: "12px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = isDarkMode 
                  ? "0 20px 40px rgba(59, 130, 246, 0.3)" 
                  : "0 20px 40px rgba(59, 130, 246, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Zap size={64} color="#f59e0b" style={{ margin: "0 auto 20px" }} />
              <h2 style={{ fontSize: "24px", fontWeight: "600", color: textPrimary, marginBottom: "12px" }}>
                Quick Test
              </h2>
              <p style={{ color: textSecondary, marginBottom: "20px" }}>
                Use sample data for instant analysis.
              </p>
              <div style={{
                backgroundColor: "#f59e0b",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                fontWeight: "600",
                display: "inline-block"
              }}>
                Run Test
              </div>
            </div>
          </div>
        ) : !analysisComplete ? (
          <div style={{
            backgroundColor: cardBg,
            border: cardBorder,
            padding: "60px 40px",
            borderRadius: "12px",
            textAlign: "center"
          }}>
            {mode === "record" ? (
              <>
                <div style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: isProcessing ? "#ef4444" : "#3b82f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  animation: isProcessing ? "pulse 1.5s infinite" : "none",
                  transition: "all 0.3s ease"
                }}>
                  <style>{`
                    @keyframes pulse {
                      0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
                      50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
                    }
                  `}</style>
                  <Mic size={60} color="white" />
                </div>
                <h2 style={{ fontSize: "24px", fontWeight: "600", color: textPrimary, marginBottom: "20px" }}>
                  {isProcessing ? "Recording..." : "Ready to Record"}
                </h2>
                <p style={{ color: textSecondary, marginBottom: "40px" }}>
                  {isProcessing ? "Please speak naturally about your day..." : "Click the button to start recording"}
                </p>
                <button
                  onClick={handleRecordStart}
                  disabled={isProcessing}
                  style={{
                    backgroundColor: isProcessing ? "#ef4444" : "#3b82f6",
                    color: "white",
                    padding: "16px 40px",
                    borderRadius: "50px",
                    border: "none",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: isProcessing ? "not-allowed" : "pointer",
                    marginRight: "15px"
                  }}
                >
                  {isProcessing ? "Recording..." : "Start Recording"}
                </button>
                <button
                  onClick={handleReset}
                  style={{
                    backgroundColor: "transparent",
                    color: textSecondary,
                    padding: "16px 40px",
                    borderRadius: "50px",
                    border: `2px solid ${textSecondary}`,
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer"
                  }}
                >
                  Back
                </button>
              </>
            ) : mode === "upload" ? (
              <>
                <Upload size={80} color="#10b981" style={{ margin: "0 auto 20px" }} />
                <h2 style={{ fontSize: "24px", fontWeight: "600", color: textPrimary, marginBottom: "20px" }}>
                  Upload Audio File
                </h2>
                <p style={{ color: textSecondary, marginBottom: "40px" }}>
                  Select an MP3, WAV, or OGG file
                </p>
                <label style={{
                  display: "inline-block",
                  backgroundColor: "#10b981",
                  color: "white",
                  padding: "16px 40px",
                  borderRadius: "50px",
                  cursor: "pointer",
                  fontWeight: "600",
                  marginRight: "15px"
                }}>
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={handleFileUpload}
                    style={{ display: "none" }}
                  />
                  Choose File
                </label>
                <button
                  onClick={handleReset}
                  style={{
                    backgroundColor: "transparent",
                    color: textSecondary,
                    padding: "16px 40px",
                    borderRadius: "50px",
                    border: `2px solid ${textSecondary}`,
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer"
                  }}
                >
                  Back
                </button>
              </>
            ) : (
              <>
                <Zap size={80} color="#f59e0b" style={{ margin: "0 auto 20px", animation: "pulse 1.5s infinite" }} />
                <h2 style={{ fontSize: "24px", fontWeight: "600", color: textPrimary, marginBottom: "20px" }}>
                  {isProcessing ? "Running Quick Test..." : "Quick Test Ready"}
                </h2>
                <p style={{ color: textSecondary, marginBottom: "40px" }}>
                  {isProcessing ? "Analyzing sample voice data..." : "Using demo patient data"}
                </p>
                <button
                  onClick={() => {
                    if (!isProcessing) {
                      setIsProcessing(true);
                      setTimeout(() => {
                        setIsProcessing(false);
                        setAnalysisComplete(true);
                      }, 2500);
                    }
                  }}
                  disabled={isProcessing}
                  style={{
                    backgroundColor: isProcessing ? "#f59e0b" : "#f59e0b",
                    color: "white",
                    padding: "16px 40px",
                    borderRadius: "50px",
                    border: "none",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: isProcessing ? "not-allowed" : "pointer",
                    marginRight: "15px"
                  }}
                >
                  {isProcessing ? "Testing..." : "Run Test"}
                </button>
                <button
                  onClick={handleReset}
                  style={{
                    backgroundColor: "transparent",
                    color: textSecondary,
                    padding: "16px 40px",
                    borderRadius: "50px",
                    border: `2px solid ${textSecondary}`,
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer"
                  }}
                >
                  Back
                </button>
              </>
            )}
          </div>
        ) : (
          <div style={{
            backgroundColor: cardBg,
            border: cardBorder,
            padding: "60px 40px",
            borderRadius: "12px",
            textAlign: "center"
          }}>
            <CheckCircle size={100} color="#10b981" style={{ margin: "0 auto 20px" }} />
            <h2 style={{ fontSize: "28px", fontWeight: "600", color: textPrimary, marginBottom: "15px" }}>
              Analysis Complete!
            </h2>
            <p style={{ color: textSecondary, marginBottom: "40px" }}>
              Your voice analysis has been processed successfully. View the detailed report in My Reports.
            </p>
            <Link to="/my-reports" style={{
              display: "inline-block",
              backgroundColor: "#3b82f6",
              color: "white",
              padding: "14px 35px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              marginRight: "15px"
            }}>
              View Report
            </Link>
            <button
              onClick={handleReset}
              style={{
                backgroundColor: "transparent",
                color: "#3b82f6",
                padding: "14px 35px",
                borderRadius: "8px",
                border: "2px solid #3b82f6",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              Start Another
            </button>
          </div>
        )}
      </div>
      <Footer isDarkMode={isDarkMode} isAuthenticated={true} />
    </div>
  );
}
