---
layout: base.njk
title: Home
---

# Welcome to Agosta.net

Here are my latest thoughts and updates:

<ul>
  {% for post in collections.post %}
    <li>
      <a href="{{ post.url }}">{{ post.data.title }}</a>
    </li>
  {% endfor %}
</ul>