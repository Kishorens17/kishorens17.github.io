// =============================================
// KISHORE N S — PORTFOLIO JAVASCRIPT
// =============================================

// ---------- Projects Data ----------
const GITHUB = 'https://github.com/Kishorens17/';
const GH_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`;

const projects = [
  { icon:'🖥️', date:'Feb 2024', title:'Hardware Hunters', repo:'Hardware-Hunters', desc:'Platform for selling hardware PC components with part comparison, direct producer-to-customer sales, built with full-stack web technologies.', tech:['HTML','CSS','JavaScript','Java','TypeScript','MySQL'] },
  { icon:'🚶', date:'Mar 2024', title:'Pedestrian Detection', repo:'Pedestrian-Detection-Using-Threshold-Frequency-in-Open-CV-Python', desc:'Python & OpenCV system detecting pedestrians crossing a street using threshold frequency and background subtraction algorithms.', tech:['Python','OpenCV','Computer Vision'] },
  { icon:'🔍', date:'Aug 2024', title:'Anomaly Detection', repo:'Anomaly-Detection-using-Python-OpenCV', desc:'Anomaly detection module using Python & OpenCV to identify sudden environmental changes in closely monitored spaces.', tech:['Python','OpenCV','Computer Vision'] },
  { icon:'🧬', date:'Sep 2024', title:'DNA Sequence Identification', repo:'DNA-Sequence-identification-using-Trie-Data-Structure', desc:'Identifies specific DNA sequences within a strand using the Trie data structure for efficient pattern matching.', tech:['Python','Trie','Data Structures'] },
  { icon:'🌫️', date:'Oct 2024', title:'Image Dehazing', repo:'IMAGE-DEHAZING-WITH-IMAGE-DECOMPOSITION-TECHNIQUE-USING-DOMAIN-ADAPTATION-MODEL', desc:'Image decomposition framework isolating structural & textural components with bidirectional domain adaptation for real-world dehazing.', tech:['Python','Deep Learning','Domain Adaptation'] },
  { icon:'🔬', date:'Nov 2024', title:'Image Enhancement', repo:'Enhancement-of-various-images-using-coefficient-of-analytic-function-using-python', desc:'Discovered new coefficients for analytic functions using OpenCV that improve image clarity and visual features when applied.', tech:['Python','OpenCV','Image Processing'] },
  { icon:'🤖', date:'Jan 2025', title:'Autonomous Road Sweeping Robot', repo:'Autonomous-Road-Sweeping-Robot', desc:'Webots-simulated and Arduino-hardware robot with obstacle avoidance and dynamic path planning via IDA* algorithm.', tech:['Webots','Arduino','IDA*','Robotics'] },
  { icon:'🧠', date:'Mar 2025', title:'Leather Defect Detection', repo:'Leather-Defect-Detection', desc:'Deep learning model using NF-Net and Fourier Neural Operator to identify and classify types of leather defects.', tech:['Python','NF-Net','Fourier Neural Op.','Deep Learning'] },
  { icon:'🩸', date:'Apr 2025', title:'White Blood Cell Classification', repo:'Classification-of-White-Blood-Cells-using-Feature-Extraction-and-Cell-Segmentation', desc:'Hybrid framework using VGG16, Watershed segmentation, and LightGBM achieving 87.05% accuracy across 5 WBC subtypes.', tech:['Python','VGG16','LightGBM','Watershed'] },
  { icon:'💾', date:'Aug 2025', title:'SQL Query Resource Prediction', repo:'SQL-Query-Resource-Prediction-Using-Machine-Learning-Techniques', desc:'ML models predicting CPU, memory, and disk load for SQL queries using HistogramGB, LightGBM, MLP, and Random Forest regressors.', tech:['Python','LightGBM','ML','Synthetic Data'] },
  { icon:'🏎️', date:'Sep 2025', title:'F1 Accident Prediction', repo:'F1-Race-Accident-Prediction-using-Bayesian-Network', desc:'Bayesian network predicting F1 race accidents with a live analytics dashboard showing real-time accident probability.', tech:['Python','Bayesian Network','Dashboard'] },
  { icon:'🦾', date:'Oct 2025', title:'Pick and Place Robot', repo:'Pick-and-Place-Robot', desc:'Automated and manually-controllable pick & place robot built in ROS2 and Gazebo with both simulation and physical hardware.', tech:['ROS2','Gazebo','Linux','Arduino'] },
  { icon:'✈️', date:'Jan 2026', title:'Real-Time Flight Monitoring', repo:'Real-time-Flight-monitoring-and-Delay-Anaylysis-system', desc:'Big data dashboard for live flight monitoring, delay analysis, and congestion zones using OpenSky API and Spark Streaming.', tech:['Spark','Kafka','MongoDB','Airflow','Streamlit'] },
  { icon:'🌐', date:'Feb 2026', title:'Multimodal Sentiment Analysis', repo:'Multimodal-Emotion-aware-crosslingual-sentiment-analysis', desc:'Cross-lingual sentiment & emotion analysis fusing XLM-RoBERTa embeddings, emotion representations, and acoustic features.', tech:['Python','XLM-RoBERTa','Deep Learning','NLP'] },
  { icon:'🎙️', date:'Mar 2026', title:'Neurovoice – Noise Cancellation', repo:'Neurovoice-Application-for-adaptive-audio-noice-cancellation', desc:'Lightweight Nano-UNet deep learning framework for selective noise cancellation, mobile-friendly with noise type selection.', tech:['Python','Nano-UNet','Deep Learning','Audio'] },
  { icon:'🗣️', date:'Apr 2026', title:'Voice-Controlled PC Automation', repo:'Voice-controlled-pc-automation-system-using-small-vocabulary-speech-recognition', desc:'Bi-CRNN + Gated GRU + Attention model trained on 9-class synthetic speech commands for automating PC operations.', tech:['Python','CRNN','GRU','Attention','Speech Recognition'] },
];

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = projects.map(p => `
    <div class="project-card reveal">
      <div class="project-header">
        <span class="project-icon">${p.icon}</span>
        <div style="display:flex;align-items:center;gap:.5rem;">
          <span class="project-date-badge">${p.date}</span>
          <a href="${GITHUB}${p.repo}" target="_blank" rel="noopener" title="GitHub" class="gh-link">${GH_SVG}</a>
        </div>
      </div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-tech">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div>
    </div>
  `).join('');
  // Re-attach tilt and reveal to injected cards
  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `translateY(-8px) rotateX(${-y*5}deg) rotateY(${x*5}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    observer.observe(card);
  });
}


// ---------- Navbar scroll effect ----------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ---------- Hamburger menu ----------
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ---------- Typed effect ----------
const phrases = [
  'Machine Learning Engineer',
  'Deep Learning Enthusiast',
  'Front-End Developer',
  'AI Researcher',
  'Ethical Hacking Enthusiast'
];
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  const current = phrases[phraseIndex];
  if (!deleting) {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
    setTimeout(type, 75);
  } else {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 400);
      return;
    }
    setTimeout(type, 40);
  }
}
setTimeout(type, 800);

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings
      const siblings = [...entry.target.parentElement.children].filter(el => el.classList.contains('reveal'));
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// Render dynamic projects (must come after observer is defined)
renderProjects();

// ---------- Active nav link on scroll ----------
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navItems.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});

// ---------- Smooth hover tilt on project cards ----------
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-8px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
