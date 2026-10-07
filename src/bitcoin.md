---
layout: base.njk
title: Bitcoin
---

<style>
  .bitcoin-header {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-color);
  }
  .section-title {
    font-size: 1.25rem;
    margin: 25px 0 15px 0;
    color: var(--heading-color);
  }
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 18px;
    margin-bottom: 25px;
  }
  .card {
    display: block;
    padding: 20px;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    text-decoration: none !important;
    color: var(--text-color);
    transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
  }
  .card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
    border-color: var(--accent-color);
  }
  .card h3 {
    margin: 0 0 8px 0;
    font-size: 1.1rem;
    color: var(--heading-color);
  }
  .card p {
    margin: 0;
    font-size: 0.9rem;
    color: var(--muted-text);
    line-height: 1.4;
  }
  .card-link-text {
    display: inline-block;
    margin-top: 10px;
    font-weight: 600;
    font-size: 0.85rem;
    color: var(--accent-color);
  }
</style>

<div class="bitcoin-header">
  <h1>Bitcoin Hub</h1>
  <p style="font-size: 1.05rem; color: var(--muted-text); margin-top: -5px;">
    Central directory for interactive datasets, charts, and theoretical analysis.
  </p>
</div>

<h2 class="section-title">Spreadsheets</h2>
<div class="card-grid">
  <a href="/bitcoin-spreadsheets-halving/" class="card">
    <h3>📊 Halving Schedule & Projections</h3>
    <p>Live interactive halving schedule and block reward decay calculations through 2140.</p>
    <span class="card-link-text">Open Spreadsheet →</span>
  </a>
</div>

<h2 class="section-title">Visualizations</h2>
<div class="card-grid">
  <a href="/bitcoin-graphs/" class="card">
    <h3>📈 Assorted Bitcoin Graphs</h3>
    <p>7 visual models analyzing supply curves, epoch highs/lows, percentage returns, and fiat block values.</p>
    <span class="card-link-text">View Charts →</span>
  </a>
</div>

<h2 class="section-title">Articles</h2>
<div class="card-grid">
  <a href="/bitcoin-articles/" class="card">
    <h3>📝 Written Analysis</h3>
    <p>Deep dives and technical commentary on network dynamics and monetary mechanics.</p>
    <span class="card-link-text">Browse Articles →</span>
  </a>
</div>