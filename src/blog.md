---
layout: base.njk
title: Blog
---

<style>
  .blog-header {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-color);
  }
  .blog-header h1 {
    color: var(--heading-color);
  }
  .post-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .post-card {
    display: block;
    padding: 20px;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    text-decoration: none !important;
    color: var(--text-color);
    transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
  }
  .post-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
    border-color: var(--accent-color);
  }
  .post-card h2 {
    font-size: 1.2rem;
    margin: 0 0 6px 0;
    color: var(--heading-color);
  }
  .post-card p {
    margin: 0;
    font-size: 0.92rem;
    color: var(--muted-text);
  }
  .read-more {
    display: inline-block;
    margin-top: 10px;
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--accent-color);
  }
</style>

<div class="blog-header">
  <h1>Blog & Journal</h1>
  <p style="font-size: 1.05rem; color: var(--muted-text); margin-top: -5px;">
    Thoughts on tech, site updates, custom projects, and DIY notes.
  </p>
</div>

<div class="post-list">
  <a href="/posts/first-post/" class="post-card">
    <h2>My First Blog Post</h2>
    <p>An introduction to the site and personal technical updates.</p>
    <span class="read-more">Read Post →</span>
  </a>

  <a href="/posts/how-i-built-this/" class="post-card">
    <h2>I created this website for $11.86 in two hours using free Google AI</h2>
    <p>A complete breakdown of setting up static site hosting, Eleventy, and automated deployment.</p>
    <span class="read-more">Read Post →</span>
  </a>
</div>