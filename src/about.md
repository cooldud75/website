---
layout: base.njk
title: About
---

<style>
  .about-header {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-color);
  }
  .about-header h1 {
    color: var(--heading-color);
  }
  .about-section {
    margin-bottom: 2.5rem;
  }
  .about-section h2 {
    font-size: 1.4rem;
    margin-bottom: 0.75rem;
    color: var(--heading-color);
  }
  .about-section p {
    color: var(--text-color);
    line-height: 1.6;
  }
  .focus-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 15px;
    margin-top: 1rem;
  }
  .focus-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 16px;
    transition: background-color 0.2s ease, border-color 0.2s ease;
  }
  .focus-card h3 {
    font-size: 1rem;
    margin-bottom: 6px;
    color: var(--heading-color);
  }
  .focus-card p {
    font-size: 0.9rem;
    color: var(--muted-text);
    margin: 0;
  }
</style>

<div class="about-header">
  <h1>About</h1>
  <p style="font-size: 1.1rem; color: var(--muted-text); margin-top: -5px;">
    My name is Sam Agosta and this is my personal website.
  </p>
</div>

<div class="about-section">
  <h2>Overview</h2>
  <p>
    Welcome to Agosta.net. This site serves as a personal notebook, project showcase, and repository for datasets, visual models, and writeups. 
  </p>
</div>

<div class="about-section">
  <h2>Main Focus Areas</h2>
  <div class="focus-grid">
    <div class="focus-card">
      <h3>📊 Bitcoin Analytics</h3>
      <p>Data-driven modeling, supply curve mechanics, and epoch reward projections.</p>
    </div>
    <div class="focus-card">
      <h3>🛠️ Projects & DIY</h3>
      <p>Hardware modifications, custom software scripts, and technical builds.</p>
    </div>
    <div class="focus-card">
      <h3>✍️ Articles & Notes</h3>
      <p>Technical writeups, personal journal entries, and engineering insights.</p>
    </div>
  </div>
</div>

<div class="about-section">
  <h2>About Me</h2>
  <p>
    My name is Sam Agosta, I am a 26 year old husband and land surveyor. I am interested in finance, mathematics, technology, software, and the outdoors. My main hobbies are videogames, weightlifting, and socializing with friends. I created this website to store thoughts, creations, and research I have done. I have 8 years experience as a land surveyor. I have an associates of applied science in geomatics technology from Wake Technical Community College. I achieved the rank of Eagle Scout in 2017. I have been investing since 2018, and have been interested in Bitcoin since 2024.
  </p>
</div>

<div class="about-section">
  <h2>Get in Touch</h2>
  <p>
    Have questions or want to reach out? You can connect via [Email / Twitter / GitHub / LinkedIn].
  </p>
</div>