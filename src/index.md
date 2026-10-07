---
layout: base.njk
title: Home
---

<style>
  /* Hero Section */
  .hero {
    text-align: center;
    padding: 20px 0 35px 0;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 35px;
  }
  .hero h1 {
    font-size: 2.2rem;
    margin-bottom: 10px;
    color: var(--heading-color);
  }
  .hero p {
    font-size: 1.1rem;
    color: var(--muted-text);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.5;
  }

  /* Featured Callout Banner */
  .featured-banner {
    background: var(--bg-color);
    border: 1px solid var(--border-color);
    border-left: 4px solid var(--accent-color);
    padding: 18px 22px;
    border-radius: 6px;
    margin-bottom: 30px;
  }
  .featured-banner strong {
    color: var(--heading-color);
  }
  .featured-banner a {
    color: var(--accent-color);
    font-weight: 600;
    text-decoration: none;
    margin-left: 6px;
  }
  .featured-banner p {
    margin: 6px 0 0 0;
    color: var(--muted-text);
    font-size: 0.9rem;
  }

  /* Grid Layout for Cards */
  .section-title {
    font-size: 1.3rem;
    margin: 30px 0 15px 0;
    color: var(--heading-color);
  }
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
  }
  
  /* Individual Cards */
  .card {
    display: block;
    padding: 22px;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    text-decoration: none !important;
    color: var(--text-color);
    transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
  }
  .card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    border-color: var(--accent-color);
  }
  .card h3 {
    margin: 0 0 8px 0;
    font-size: 1.15rem;
    color: var(--heading-color);
  }
  .card p {
    margin: 0;
    font-size: 0.92rem;
    color: var(--muted-text);
    line-height: 1.45;
  }
  .card-link-text {
    display: inline-block;
    margin-top: 12px;
    font-weight: 600;
    font-size: 0.88rem;
    color: var(--accent-color);
  }
</style>

<div class="hero">
  <h1>Welcome to Agosta.net</h1>
  <p>Personal repository for Bitcoin analytics, interactive datasets, engineering notes, and technical writeups.</p>
</div>

<div class="featured-banner">
  <strong>Featured Tool:</strong> 
  <a href="/bitcoin-spreadsheets-halving/">
    Bitcoin Halving Schedule & Block Reward Calculator →
  </a>
  <p>View live embedded projections for supply issuance through year 2140.</p>
</div>

<h2 class="section-title">Bitcoin Hub</h2>
<div class="card-grid">
  <a href="/bitcoin-spreadsheets/" class="card">
    <h3>📊 Bitcoin Spreadsheets</h3>
    <p>Interactive halving schedules, epoch reward decay projections, and custom supply models.</p>
    <span class="card-link-text">Explore Spreadsheets →</span>
  </a>

  <a href="/bitcoin-graphs/" class="card">
    <h3>📈 Assorted Graphs</h3>
    <p>Visual analysis of supply curves, cycle highs/lows, percentage returns, and epoch valuations.</p>
    <span class="card-link-text">View Charts →</span>
  </a>

  <a href="/bitcoin-articles/" class="card">
    <h3>📝 Bitcoin Articles</h3>
    <p>Deep dives, theoretical analysis, and technical commentary on network fundamentals.</p>
    <span class="card-link-text">Read Articles →</span>
  </a>
</div>

<h2 class="section-title">Blog & Updates</h2>
<div class="card-grid">
  <a href="/blog/" class="card">
    <h3>✍️ Blog & Journal</h3>
    <p>Thoughts on tech, site updates, custom projects, and DIY notes.</p>
    <span class="card-link-text">Browse Posts →</span>
  </a>
</div>