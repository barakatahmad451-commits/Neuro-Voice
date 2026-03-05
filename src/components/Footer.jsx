import { Link } from "react-router-dom";
import { Brain, Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer({ isDarkMode, isAuthenticated = false }) {
  const textPrimary = isDarkMode ? "white" : "#0f1729";
  const textSecondary = isDarkMode ? "#93c5fd" : "#475569";
  const footerBg = isDarkMode 
    ? "linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(20, 45, 100, 0.95) 100%)"
    : "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 249, 255, 0.95) 100%)";
  const footerBorder = isDarkMode 
    ? "1px solid rgba(59, 130, 246, 0.3)" 
    : "1px solid rgba(59, 130, 246, 0.2)";
  const hoverColor = isDarkMode ? "rgba(59, 130, 246, 0.2)" : "rgba(59, 130, 246, 0.1)";

  // Different footer links for authenticated vs public users
  const footerLinks = isAuthenticated 
    ? [
        { label: "Dashboard", path: "/dashboard" },
        { label: "New Analysis", path: "/new-analysis" },
        { label: "My Reports", path: "/my-reports" },
        { label: "Profile", path: "/profile" }
      ]
    : [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Technology", path: "/technology" },
        { label: "Screening", path: "/screening" },
        { label: "For Professionals", path: "/for-professionals" },
        { label: "Contact", path: "/contact" }
      ];

  const productLinks = isAuthenticated
    ? [
        { label: "Start Analysis", path: "/new-analysis" },
        { label: "View Reports", path: "/my-reports" },
        { label: "Download Data", path: "/my-reports" },
        { label: "Export Results", path: "/my-reports" }
      ]
    : [
        { label: "Voice Analysis", path: "/screening" },
        { label: "Health Screening", path: "/screening" },
        { label: "Professional Tools", path: "/for-professionals" },
        { label: "Reports & Analytics", path: "/my-reports" }
      ];

  const socialLinks = [
    { icon: Github, link: "#", label: "GitHub" },
    { icon: Twitter, link: "#", label: "Twitter" },
    { icon: Linkedin, link: "#", label: "LinkedIn" },
    { icon: Mail, link: "mailto:info@neurovoice.com", label: "Email" }
  ];  return (
    <footer style={{
      background: footerBg,
      borderTop: footerBorder,
      marginTop: "80px",
      backdropFilter: "blur(10px)",
      boxShadow: isDarkMode 
        ? "0 -4px 20px rgba(0, 0, 0, 0.2)" 
        : "0 -4px 20px rgba(59, 130, 246, 0.1)"
    }}>
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "60px 40px 30px"
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          marginBottom: "50px"
        }}>
          {/* Brand Section */}
          <div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
              fontWeight: "700",
              fontSize: "18px",
              color: textPrimary
            }}>
              <div style={{
                width: "35px",
                height: "35px",
                background: "linear-gradient(135deg, #3b82f6, #0ea5e9)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)"
              }}>
                <Brain size={20} color="white" />
              </div>
              NeuroVoice
            </div>
            <p style={{
              color: textSecondary,
              fontSize: "14px",
              lineHeight: "1.6",
              marginBottom: "20px"
            }}>
              Advanced Voice Analysis Technology for Neurological Health Screening. Empowering healthcare through innovation.
            </p>
            {/* Social Links */}
            <div style={{
              display: "flex",
              gap: "15px"
            }}>
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.link}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      backgroundColor: hoverColor,
                      borderRadius: "8px",
                      color: textPrimary,
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "rgba(59, 130, 246, 0.4)";
                      e.target.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = hoverColor;
                      e.target.style.transform = "translateY(0)";
                    }}
                    title={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h3 style={{
              color: textPrimary,
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "20px"
            }}>
              Products
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {productLinks.map((item, idx) => (
                <li key={idx} style={{ marginBottom: "12px" }}>
                  <Link to={item.path} style={{
                    color: textSecondary,
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#3b82f6";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = textSecondary;
                  }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 style={{
              color: textPrimary,
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "20px"
            }}>
              Company
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.map((link, idx) => (
                <li key={idx} style={{ marginBottom: "12px" }}>
                  <Link to={link.path} style={{
                    color: textSecondary,
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#3b82f6";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = textSecondary;
                  }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 style={{
              color: textPrimary,
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "20px"
            }}>
              Contact Us
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <MapPin size={18} color="#3b82f6" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span style={{ color: textSecondary, fontSize: "14px" }}>
                  123 Innovation Street<br />
                  Tech City, TC 12345
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <Phone size={18} color="#3b82f6" />
                <a href="tel:+1234567890" style={{
                  color: textSecondary,
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "color 0.2s"
                }}
                onMouseEnter={(e) => e.target.style.color = "#3b82f6"}
                onMouseLeave={(e) => e.target.style.color = textSecondary}>
                  +1 (234) 567-890
                </a>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <Mail size={18} color="#3b82f6" />
                <a href="mailto:info@neurovoice.com" style={{
                  color: textSecondary,
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "color 0.2s"
                }}
                onMouseEnter={(e) => e.target.style.color = "#3b82f6"}
                onMouseLeave={(e) => e.target.style.color = textSecondary}>
                  info@neurovoice.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          borderTop: footerBorder,
          paddingTop: "30px",
          marginTop: "20px"
        }}>
          {/* Bottom Footer */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px"
          }}>
            <p style={{
              color: textSecondary,
              fontSize: "13px"
            }}>
              © 2026 NeuroVoice. All rights reserved.
            </p>
            <div style={{
              display: "flex",
              gap: "30px"
            }}>
              <Link to="#" style={{
                color: textSecondary,
                fontSize: "13px",
                textDecoration: "none",
                transition: "color 0.2s"
              }}
              onMouseEnter={(e) => e.target.style.color = "#3b82f6"}
              onMouseLeave={(e) => e.target.style.color = textSecondary}>
                Privacy Policy
              </Link>
              <Link to="#" style={{
                color: textSecondary,
                fontSize: "13px",
                textDecoration: "none",
                transition: "color 0.2s"
              }}
              onMouseEnter={(e) => e.target.style.color = "#3b82f6"}
              onMouseLeave={(e) => e.target.style.color = textSecondary}>
                Terms of Service
              </Link>
              <Link to="#" style={{
                color: textSecondary,
                fontSize: "13px",
                textDecoration: "none",
                transition: "color 0.2s"
              }}
              onMouseEnter={(e) => e.target.style.color = "#3b82f6"}
              onMouseLeave={(e) => e.target.style.color = textSecondary}>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
