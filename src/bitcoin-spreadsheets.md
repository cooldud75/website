---
layout: base.njk
title: Bitcoin Spreadsheets
---

<style>
  .page-header {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-color);
  }
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    margin-top: 1.5rem;
  }
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
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
    border-color: var(--accent-color);
  }
  .card h2 {
    margin: 0 0 8px 0;
    font-size: 1.2rem;
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

<div class="page-header">
  <h1>Bitcoin Spreadsheets</h1>
  <p style="font-size: 1.05rem; color: var(--muted-text); margin-top: -5px;">
    Interactive data tools, supply models, and halving schedule calculators.
  </p>
</div>

<div class="card-grid">
  <a href="/bitcoin-spreadsheets-halving/" class="card">
    <h2>📊 Bitcoin Halving Schedule</h2>
    <p>Live interactive halving projections, epoch supply decay models, and block reward calculations through year 2140.</p>
    <span class="card-link-text">View Halving Schedule →</span>
  </a>
</div>