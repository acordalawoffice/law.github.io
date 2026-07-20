HOW TO ADD A NEW ARTICLE
=========================
1. Copy this file into the _posts folder.
2. Rename it to:  YYYY-MM-DD-a-short-title.md
   Example:  2026-08-03-new-dole-wage-order.md
   - The date MUST come first in the filename, exactly like that.
   - Keep the filename lowercase, words separated by hyphens, no spaces.
   - IMPORTANT: change the file extension from .md.txt to just .md
3. Delete these instructions and everything below the second "---" line
   with your own article, following the same pattern as your other posts
   (title, meta line, paragraphs, disclaimer at the bottom).
4. Save, commit, and push to GitHub. Your site rebuilds automatically
   in 1-2 minutes. The article will appear:
     - On its own page at yoursite.com/insights/a-short-title/
     - Automatically listed on the Legal Insights Hub page
     - Automatically featured on the homepage if it's one of the 3 newest

That's it. You never need to touch index.html, insights.html, or any
CSS file again.

---
title: "Your Article Title Here"
date: 2026-08-03
category: "Optional Category Label"
description: "A one or two sentence summary. This is what shows up in Google and in the Facebook share preview, so make it good."
---

<article class="article-box" style="background: #ffffff; border: 1px solid var(--border-color, #e2e8f0); border-radius: 6px; padding: 30px; margin-bottom: 35px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <h3 style="font-size: 2.0rem; color: #1a202c; margin-top: 0; margin-bottom: 10px;">Your Article Title Here</h3>
    <div class="article-meta" style="font-size: 0.85rem; color: #718096; margin-bottom: 20px;">Published by Office of Atty. Rodel P. Acorda &bull; Legal Educational Article</div>

    <div class="article-body" style="color: #2d3748; line-height: 1.7; text-align: justify;">
        <p style="margin-bottom: 15px;">First paragraph goes here...</p>
        <p style="margin-bottom: 20px;">Second paragraph goes here...</p>

        <h4 style="font-size: 1.15rem; color: #2d3748; margin-top: 25px; margin-bottom: 12px;">A Subheading</h4>
        <p style="margin-bottom: 15px;">More content...</p>
    </div>

    <div style="margin-top: 30px; padding-top: 15px; border-top: 1px dashed #e2e8f0;">
        <p style="font-size: 0.82rem; font-style: italic; color: #718096; line-height: 1.4; margin: 0; text-align: justify;">
            *Disclaimer: Case outcomes depend heavily on specific timelines and evidentiary facts. This general analysis is not formal legal advice. Read our full firm caveat at the top of this hub or consult an attorney.*
        </p>
    </div>
</article>
