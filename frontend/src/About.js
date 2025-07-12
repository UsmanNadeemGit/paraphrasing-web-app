import React from "react";
import Navbar from "./Navbar";
import aboutImg from "./1.png";
import "./About.css";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <div className="about-page olive-theme">
        <Navbar />
        <div className="about-section-card">
          <section className="about-steps">
            <h1>Paraphrasing in Simple Steps</h1>
            <p className="about-sub">Our online paraphrasing tool lets you remove plagiarism from your text for free in 3 easy steps.</p>
            <div className="steps-cards">
              <div className="step-card" data-num="01">
                <div className="step-badge">01</div>
                <h3>Paste or upload</h3>
                <p>Start by importing your text into Parafraseo.co. Paste it or upload the file from your device. You can upload it in DOC, DOCX, TXT, or PDF formats.</p>
              </div>
              <div className="step-card" data-num="02">
                <div className="step-badge">02</div>
                <h3>Choose the tone and paraphrase</h3>
                <p>Choose a mode based on your needs and then press the "Paraphrase Texts" button.</p>
              </div>
              <div className="step-card" data-num="03">
                <div className="step-badge">03</div>
                <h3>Copy or export</h3>
                <p>This free paraphrasing tool will provide you with a new version of the text. Copy or export the text using the options below.</p>
              </div>
            </div>
          </section>
        </div>
        <div className="about-section-card">
          <section className="about-mechanism">
            <div className="mechanism-text">
              <h2>Mechanism Behind Paraphrasing Texts</h2>
              <p>Paraphrasing involves rewording the text to express the same meaning using different vocabulary and sentence structures. First, the original content is thoroughly understood to grasp its context and intent. Then, words are replaced with synonyms, sentence structures are modified, and sentences may be reorganized to avoid direct copying. Techniques include lexical substitution, converting active to passive voice, simplifying or combining sentences, and using alternative expressions. The goal is to maintain the original message while presenting it in an original way. This is commonly used in writing, research, and content creation to avoid plagiarism and improve clarity and readability.</p>
            </div>
            <div className="mechanism-img">
              <img src={aboutImg} alt="Mechanism Illustration" />
            </div>
          </section>
        </div>
        <div className="about-section-card">
          <section className="about-standout">
            <h2>What makes our paraphrasing stand out?</h2>
            <div className="standout-progress">
              <div className="standout-dot active"></div>
              <div className="standout-line"></div>
              <div className="standout-dot"></div>
              <div className="standout-line"></div>
              <div className="standout-dot"></div>
              <div className="standout-line"></div>
              <div className="standout-dot"></div>
            </div>
            <div className="standout-feature">
              <div className="feature-text">
                <h3>Easy to use</h3>
                <p>Use our hassle-free paraphrasing tool! It's designed to be simple and easy to use, and with just one click, you can paraphrase any text.</p>
              </div>
              <div className="feature-img">
                {/* You can add an illustration here if desired */}
              </div>
            </div>
          </section>
        </div>
        <div className="about-section-card">
          <section className="about-why">
            <h2>Why use parafraseo.co for paraphrasing?</h2>
            <div className="why-cards">
              <div className="why-card" data-num="01">
                <h3>Save time</h3>
                <p>Effortlessly convert your simple text into a unique one with just one click. Paraphrasing will deliver the result instantly, saving you a lot of time.</p>
              </div>
              <div className="why-card" data-num="02">
                <h3>Improve Quality</h3>
                <p>Our free paraphrasing tool will replace simple words with unique yet readable synonyms that will improve the quality of your writing.</p>
              </div>
              <div className="why-card" data-num="03">
                <h3>Original meaning</h3>
                <p>When paraphrasing texts, this advanced text paraphrasing doesn't alter the main context. You won't have to reread the text to ensure its quality.</p>
              </div>
              <div className="why-card" data-num="04">
                <h3>Ideal for everyone</h3>
                <p>If you're stuck for ideas and can't find new ways to write content, our online paraphrasing can be a great help. You'll find new ideas for writing different content on the web.</p>
              </div>
            </div>
          </section>
        </div>
        <div className="about-section-card">
          <section className="about-faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-cards">
              <div className="faq-card open">
                <div className="faq-q">What is Parafraseo.co?</div>
                <div className="faq-a">Parafraseo.co is an online tool that allows you to paraphrase any type of content, completely free. It offers multiple paraphrasing modes and no word limit.</div>
              </div>
              <div className="faq-card"><div className="faq-q">Do I need to create an account to use paraphrasing?</div></div>
              <div className="faq-card"><div className="faq-q">Is there a word or character limit?</div></div>
              <div className="faq-card"><div className="faq-q">Is this paraphrasing tool free to use?</div></div>
              <div className="faq-card"><div className="faq-q">Can I copy and paste the output directly?</div></div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
} 