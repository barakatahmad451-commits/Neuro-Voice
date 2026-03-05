import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Brain, Eye, EyeOff, Mail, Lock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login({ setIsLoggedIn }) {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState({ user: "", pass: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
      navigate("/dashboard");
    }, 1500);
  };

  const bgGradient = isDarkMode
    ? "linear-gradient(135deg, #0f1729 0%, rgba(20, 45, 100, 0.8) 100%)"
    : "linear-gradient(135deg, #f0f4f8 0%, #e0eaf5 100%)";

  const cardBg = isDarkMode
    ? "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(20, 45, 100, 0.9) 100%)"
    : "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(230, 240, 250, 0.95) 100%)";

  const cardBorder = isDarkMode
    ? "1px solid rgba(59, 130, 246, 0.3)"
    : "1px solid rgba(59, 130, 246, 0.2)";

  const textPrimary = isDarkMode ? "white" : "#0f1729";
  const textSecondary = isDarkMode ? "#93c5fd" : "#475569";
  const inputBg = isDarkMode
    ? "rgba(30, 58, 138, 0.5)"
    : "rgba(59, 130, 246, 0.1)";
  const inputBorder = isDarkMode
    ? "rgba(59, 130, 246, 0.4)"
    : "rgba(59, 130, 246, 0.3)";
  const inputText = isDarkMode ? "white" : "#0f1729";

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: bgGradient,
        overflow: "auto",
        position: "relative",
      }}
    >
      <Navbar isDarkMode={isDarkMode} isAuthenticated={false} />

      <style>{`
        @keyframes soft-glow { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        @keyframes float-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes brain-expand { 0% { transform: scale(1); filter: brightness(1); } 100% { transform: scale(1.3); filter: brightness(1.4) drop-shadow(0 0 30px rgba(59, 130, 246, 1)) drop-shadow(0 0 60px rgba(6, 182, 212, 0.8)); } }
        @keyframes glow-expand { 0% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(59, 130, 246, 0.2); } 100% { box-shadow: 0 0 80px rgba(59, 130, 246, 1), inset 0 0 50px rgba(6, 182, 212, 0.8); } }
        .soft-glow { animation: soft-glow 5s ease-in-out infinite; will-change: opacity; }
        .float-slow { animation: float-slow 6s ease-in-out infinite; will-change: transform; }
        .logo-glow { opacity: 0.3; transition: all 0.3s ease; background: linear-gradient(135deg, #3b82f6, #0ea5e9) !important; }
        .logo-glow:hover { opacity: 1; background: transparent !important; animation: glow-expand 0.6s ease-out forwards; }
        .logo-glow:hover svg { animation: brain-expand 0.6s ease-out forwards; }
      `}</style>

      {/* Background Orbs */}
      <div
        className="soft-glow"
        style={{
          position: "fixed",
          width: "600px",
          height: "600px",
          background: isDarkMode
            ? "radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent)"
            : "radial-gradient(circle, rgba(59, 130, 246, 0.08), transparent)",
          borderRadius: "50%",
          top: "-20%",
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
          width: "500px",
          height: "500px",
          background: isDarkMode
            ? "radial-gradient(circle, rgba(6, 182, 212, 0.08), transparent)"
            : "radial-gradient(circle, rgba(6, 182, 212, 0.06), transparent)",
          borderRadius: "50%",
          bottom: "-15%",
          right: "-5%",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Decorative Elements */}
      <div
        className="float-slow"
        style={{
          position: "fixed",
          width: "300px",
          height: "300px",
          background: isDarkMode
            ? "radial-gradient(circle, rgba(16, 185, 129, 0.05), transparent)"
            : "radial-gradient(circle, rgba(16, 185, 129, 0.04), transparent)",
          borderRadius: "50%",
          top: "20%",
          right: "10%",
          filter: "blur(60px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Static Particles */}
      {[...Array(40)].map((_, i) => (
        <div
          key={`particle-${i}`}
          style={{
            position: "fixed",
            width: "2px",
            height: "2px",
            background:
              i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#0ea5e9" : "#10b981",
            borderRadius: "50%",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: isDarkMode
              ? 0.3 + Math.random() * 0.3
              : 0.2 + Math.random() * 0.2,
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Main Container */}
      <div
        style={{
          position: "relative",
          zIndex: 30,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            background: cardBg,
            border: cardBorder,
            borderRadius: "28px",
            padding: "0",
            backdropFilter: "blur(20px)",
            boxShadow: isDarkMode
              ? "0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(148, 163, 255, 0.1)"
              : "0 20px 60px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(148, 163, 255, 0.2)",
            overflow: "hidden",
            width: "100%",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {/* LEFT SECTION - Form */}
            <div
              style={{
                padding: "50px 45px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                background: isDarkMode
                  ? "linear-gradient(135deg, rgba(15, 23, 42, 0.99), rgba(20, 45, 100, 0.95))"
                  : "linear-gradient(135deg, rgba(255, 255, 255, 0.99), rgba(240, 249, 255, 0.95))",
                borderRight: isDarkMode
                  ? "1px solid rgba(59, 130, 246, 0.15)"
                  : "1px solid rgba(59, 130, 246, 0.1)",
              }}
            >
              {/* Header */}
              <div style={{ marginBottom: "40px" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #3b82f6, #0ea5e9)",
                    borderRadius: "18px",
                    marginBottom: "20px",
                    boxShadow: "0 12px 30px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  <Brain size={36} color="white" strokeWidth={1.5} />
                </div>
                <h2
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    color: textPrimary,
                    margin: "0 0 10px 0",
                  }}
                >
                  Welcome Back
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    color: textSecondary,
                    margin: "0",
                    fontWeight: "500",
                  }}
                >
                  Sign in to your medical account
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleLogin}>
                {/* Email/Username */}
                <div
                  style={{
                    marginBottom: "20px",
                    position: "relative",
                  }}
                >
                  <label
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#3b82f6",
                      display: "block",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Email or Username
                  </label>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Mail
                      size={18}
                      color="#60a5fa"
                      style={{
                        position: "absolute",
                        left: "12px",
                        pointerEvents: "none",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="doctor@example.com"
                      value={inputValue.user}
                      onChange={(e) =>
                        setInputValue({ ...inputValue, user: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "12px 12px 12px 40px",
                        fontSize: "14px",
                        background: inputBg,
                        border: `1px solid ${inputBorder}`,
                        borderRadius: "12px",
                        color: inputText,
                        outline: "none",
                        fontFamily: "inherit",
                        transition: "all 0.3s ease",
                        fontWeight: "500",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(59, 130, 246, 0.8)";
                        e.target.style.background = isDarkMode
                          ? "rgba(30, 58, 138, 0.7)"
                          : "rgba(59, 130, 246, 0.15)";
                        e.target.style.boxShadow =
                          "0 0 12px rgba(59, 130, 246, 0.2)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = inputBorder;
                        e.target.style.background = inputBg;
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Password */}
                <div
                  style={{
                    marginBottom: "28px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <label
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#3b82f6",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Password
                    </label>
                    <Link
                      to="#"
                      style={{
                        fontSize: "12px",
                        color: "#0ea5e9",
                        textDecoration: "none",
                        fontWeight: "500",
                        transition: "color 0.2s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#3b82f6")}
                      onMouseOut={(e) => (e.target.style.color = "#0ea5e9")}
                    >
                      Forgot?
                    </Link>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Lock
                      size={18}
                      color="#60a5fa"
                      style={{
                        position: "absolute",
                        left: "12px",
                        pointerEvents: "none",
                      }}
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••••"
                      value={inputValue.pass}
                      onChange={(e) =>
                        setInputValue({ ...inputValue, pass: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "12px 40px 12px 40px",
                        fontSize: "14px",
                        background: inputBg,
                        border: `1px solid ${inputBorder}`,
                        borderRadius: "12px",
                        color: inputText,
                        outline: "none",
                        fontFamily: "inherit",
                        transition: "all 0.3s ease",
                        fontWeight: "500",
                        letterSpacing: "2px",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(59, 130, 246, 0.8)";
                        e.target.style.background = isDarkMode
                          ? "rgba(30, 58, 138, 0.7)"
                          : "rgba(59, 130, 246, 0.15)";
                        e.target.style.boxShadow =
                          "0 0 12px rgba(59, 130, 246, 0.2)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = inputBorder;
                        e.target.style.background = inputBg;
                        e.target.style.boxShadow = "none";
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute",
                        right: "12px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#60a5fa",
                        transition: "color 0.2s ease",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.color = "#3b82f6")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.color = "#60a5fa")
                      }
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    width: "100%",
                    padding: "13px 20px",
                    fontSize: "15px",
                    fontWeight: "700",
                    background: isLoading
                      ? "linear-gradient(135deg, #94a3b8, #64748b)"
                      : "linear-gradient(135deg, #3b82f6, #0ea5e9)",
                    border: "none",
                    borderRadius: "12px",
                    color: "white",
                    cursor: isLoading ? "not-allowed" : "pointer",
                    boxShadow: "0 6px 20px rgba(59, 130, 246, 0.35)",
                    transition: "all 0.3s ease",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    opacity: isLoading ? 0.8 : 1,
                  }}
                  onMouseOver={(e) => {
                    if (!isLoading) {
                      e.target.style.boxShadow =
                        "0 8px 28px rgba(59, 130, 246, 0.45)";
                      e.target.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isLoading) {
                      e.target.style.boxShadow =
                        "0 6px 20px rgba(59, 130, 246, 0.35)";
                      e.target.style.transform = "translateY(0)";
                    }
                  }}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </button>
              </form>

              {/* Footer */}
              <div style={{ marginTop: "28px", textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "13px",
                    color: textSecondary,
                    margin: "0",
                    fontWeight: "500",
                  }}
                >
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    style={{
                      color: "#3b82f6",
                      textDecoration: "none",
                      fontWeight: "700",
                      transition: "color 0.2s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#0ea5e9")}
                    onMouseOut={(e) => (e.target.style.color = "#3b82f6")}
                  >
                    Create Account
                  </Link>
                </p>
              </div>
            </div>

            {/* RIGHT SECTION - Brand */}
            <div
              style={{
                padding: "50px 45px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: isDarkMode
                  ? "linear-gradient(135deg, rgba(20, 45, 100, 0.5), rgba(30, 58, 138, 0.4))"
                  : "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.03))",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                gap: "30px",
              }}
            >
              {/* Animated Background */}
              <div
                style={{
                  position: "absolute",
                  width: "200px",
                  height: "200px",
                  background:
                    "radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent)",
                  borderRadius: "50%",
                  animation: "soft-glow 4s ease-in-out infinite",
                  zIndex: 1,
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  className="logo-glow"
                  style={{
                    width: "100px",
                    height: "100px",
                    background: "linear-gradient(135deg, #3b82f6, #0ea5e9)",
                    borderRadius: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "28px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    boxShadow: "0 12px 30px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  <Brain size={56} color="white" strokeWidth={1} />
                </div>

                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: textPrimary,
                    margin: "0 0 12px 0",
                  }}
                >
                  NeuroVex
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: textSecondary,
                    margin: "0 0 30px 0",
                    fontWeight: "500",
                    lineHeight: "1.6",
                  }}
                >
                  Advanced Medical Intelligence Platform for Modern Healthcare
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    width: "100%",
                  }}
                >
                  {[
                    { icon: "🧠", text: "AI-Powered Diagnosis" },
                    { icon: "⚡", text: "Real-Time Analytics" },
                    { icon: "🔒", text: "Secure & HIPAA Compliant" },
                  ].map((feature, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "13px",
                        color: textSecondary,
                        fontWeight: "500",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontSize: "18px" }}>{feature.icon}</span>
                      {feature.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Theme Toggle - Centered at Bottom */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  marginTop: "auto",
                }}
              >
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  style={{
                    width: "100%",
                    padding: "10px 16px",
                    background: isDarkMode
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.05)",
                    border: `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)"}`,
                    borderRadius: "10px",
                    color: textSecondary,
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: "600",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = isDarkMode
                      ? "rgba(255, 255, 255, 0.15)"
                      : "rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = isDarkMode
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.05)";
                  }}
                >
                  {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer isDarkMode={isDarkMode} isAuthenticated={false} />
    </div>
  );
}
