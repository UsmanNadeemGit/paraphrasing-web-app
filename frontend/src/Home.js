import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="home-page olive-theme">
        <Navbar />
        <main className="home-main">
          <section className="home-hero">
            <h1>Welcome to <span className="home-app-name">Paraphraser</span> — <span className="home-highlight">Smart Paraphrasing Made Simple</span></h1>
            <p className="home-lead">Got something to say, but want to say it better?<br />
              Our AI-powered Paraphrasing Tool helps you rewrite text with clarity, precision, and the tone you need — in seconds.
            </p>
          </section>

          <div className="home-section-card">
            <section className="home-what">
              <h2><span className="home-emoji" role="img" aria-label="Lightbulb">💡</span> What We Do</h2>
              <p>Whether you're a student, professional, content creator, or just someone who wants to rephrase a message — we've got your back.</p>
              <ul className="home-steps">
                <li><span className="home-emoji">📝</span> Input your text</li>
                <li><span className="home-emoji">🎨</span> Choose a tone</li>
                <li><span className="home-emoji">⚡</span> Get instant, polished results</li>
              </ul>
            </section>
          </div>

          <div className="home-section-card">
            <section className="home-why">
              <h2><span className="home-emoji" role="img" aria-label="Target">🎯</span> Why Use Our Tool?</h2>
              <ul className="home-benefits">
                <li><span className="home-check">✅</span> <b>Multiple Tones</b> – Match your writing to your audience effortlessly</li>
                <li><span className="home-check">✅</span> <b>AI-Powered Precision</b> – Advanced language model for context-aware rewrites</li>
                <li><span className="home-check">✅</span> <b>Fast & Secure</b> – Instant output, no text stored</li>
                <li><span className="home-check">✅</span> <b>User-Friendly Interface</b> – Minimal, modern, and responsive</li>
              </ul>
            </section>
          </div>

          <div className="home-section-card">
            <section className="home-usecases">
              <h2><span className="home-emoji" role="img" aria-label="Wrench">🔧</span> Use Cases</h2>
              <ul className="home-cases">
                <li><span className="home-emoji">✍️</span> Improve essays and assignments</li>
                <li><span className="home-emoji">💼</span> Rewrite emails or business communication</li>
                <li><span className="home-emoji">📢</span> Reword social media posts</li>
                <li><span className="home-emoji">📚</span> Avoid plagiarism with unique phrasing</li>
                <li><span className="home-emoji">🎨</span> Find a new voice for creative writing</li>
              </ul>
            </section>
          </div>

          <div className="home-section-card">
            <section className="home-getstarted">
              <h2><span className="home-emoji" role="img" aria-label="Rocket">🚀</span> Get Started</h2>
              <p>Just paste your text, pick your tone, and watch the transformation happen.<br />
                No account needed. No hassle. Just smarter writing.</p>
              <div className="home-cta-row">
                <a href="/" className="home-cta-btn">Go to Paraphraser</a>
              </div>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
} 