import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Footer from "./Footer";
import "./App.css";

const MODES = [
  { label: "Creative", icon: "✏️" },
  { label: "Formalize", icon: "📖" },
  { label: "Academic", icon: "🔄" },
  { label: "Correction", icon: "✔️" },
];

function MainApp() {
  const [mode, setMode] = useState("Creative");
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePaste = async () => {
    const clipboard = await navigator.clipboard.readText();
    setText(clipboard);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOutput("");
    try {
      const res = await axios.post("/paraphrase", {
        text,
        tone: mode === "Creative" ? "casual" : mode.toLowerCase(),
        length_preference: "same length",
        creativity: mode === "Creative" ? "creative" : "moderate",
      });
      setOutput(res.data.output || res.data.error || "No output.");
    } catch (err) {
      setOutput("Error connecting to backend.");
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Paraphrasing</h1>
        <p>Paraphrase texts without losing quality or intention</p>
      </section>
      {/* Mode Tabs */}
      <div className="mode-tabs">
        {MODES.map((m) => (
          <button
            key={m.label}
            className={`mode-tab${mode === m.label ? " selected" : ""}`}
            onClick={() => setMode(m.label)}
          >
            <span className="tab-icon">{m.icon}</span> {m.label}
          </button>
        ))}
      </div>
      {/* Main Content Area */}
      <main className="main-panels">
        {/* Left Panel */}
        <form className="panel left-panel" onSubmit={handleSubmit}>
          <textarea
            className="input-area"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste or type your content here..."
            rows={8}
          />
          <button
            type="button"
            className="paste-btn"
            onClick={handlePaste}
            tabIndex={-1}
          >
            <span role="img" aria-label="paste">📋</span> Paste Content
          </button>
          <button type="submit" className="paraphrase-btn" disabled={loading || !text}>
            {loading ? "Paraphrasing..." : "Paraphrase"}
          </button>
        </form>
        {/* Right Panel */}
        <div className="panel right-panel">
          {output ? (
            <div className="output-text">{output}</div>
          ) : (
            <div className="output-placeholder">
              <div className="cloud-icon">
                <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="40" cy="35" rx="30" ry="15" fill="#e6f2e6" />
                  <ellipse cx="25" cy="30" rx="15" ry="10" fill="#b7c9a3" />
                  <ellipse cx="55" cy="30" rx="15" ry="10" fill="#b7c9a3" />
                  <rect x="32" y="20" width="16" height="16" rx="8" fill="#7a9c3a" />
                  <circle cx="38" cy="28" r="2" fill="#fff" />
                  <circle cx="46" cy="28" r="2" fill="#fff" />
                  <ellipse cx="42" cy="33" rx="4" ry="2" fill="#fff" />
                </svg>
              </div>
              <div className="output-desc">The paraphrased text will be displayed here</div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

function MainAppWithFooter() {
  return <>
    <MainApp />
    <Footer />
  </>;
}

function ContactWithFooter() {
  return <>
    <Contact />
    <Footer />
  </>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paraphraser" element={<MainAppWithFooter />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactWithFooter />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
