import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const posts = [
  {
    slug: "insight-ai-vs-traditional-marketing",
    category: "AI & strategy",
    dateISO: "2026-09-02",
    dateDisplay: "September 2, 2026",
    minutes: 8,
    title: "AI Powered Marketing vs Traditional Digital Marketing: Which Delivers Better Results?",
    description: "A practical comparison of AI-powered and traditional digital marketing, including where each approach works best and why strong strategy still connects them.",
    deck: "AI changes how quickly marketing teams can interpret signals and coordinate execution. Traditional marketing disciplines still provide the positioning, creativity, and customer understanding that make those capabilities useful.",
    lead: "The most useful comparison is not AI versus people. It is a comparison between operating models: one relies heavily on manual analysis and execution, while the other uses AI to support selected decisions and repeatable work.",
    intro: "Both can produce results. The better choice depends on the problem, the available information, the team, and the degree of judgement involved.",
    signals: [["Speed", "Prepare analysis and campaign variations faster."], ["Context", "Keep brand, audience, and market understanding central."], ["Control", "Define where people review decisions and claims."]],
    note: "The strongest model combines technological leverage with experienced marketing direction.",
    points: ["Faster analysis does not replace a clear objective", "Personalization needs reliable context and guardrails", "Creative direction remains a human responsibility", "Measurement should support decisions, not add noise"],
    sections: [
      ["different", "What actually makes the approaches different", ["Traditional digital marketing often depends on people manually gathering information, preparing campaigns, monitoring channels, and assembling reports. AI-powered marketing uses technology to assist with parts of that process, especially where volume and repetition create friction.", "The difference should be visible in the workflow—not merely in the software list. A useful AI implementation changes how information is prepared, how routine actions are coordinated, or how teams identify the next decision."]],
      ["ai-advantage", "Where AI-powered marketing can create an advantage", ["AI can help organize larger volumes of search, audience, campaign, and customer information. It can also assist teams with content operations, approved variations, reporting summaries, and repetitive coordination across tools.", "Those benefits matter when speed or scale is the constraint. They matter less when the real problem is unclear positioning, weak offers, missing customer insight, or an experience that does not earn trust."]],
      ["traditional-strength", "Where traditional marketing strengths still matter", ["Brand strategy, creative judgement, market experience, customer empathy, and commercial context remain essential. These disciplines determine what the business should communicate and why an audience should care.", "Experienced people must also review claims, budgets, exceptions, sensitive topics, and major strategic changes. AI can prepare context, but responsibility stays with the team."]],
      ["choose", "How to choose the right operating model", ["Start with the business outcome and map the current process. Identify the decisions that require judgement, the work that is repetitive, and the information that is difficult to see.", "Most businesses do not need to choose one side completely. A blended model can preserve strong strategic and creative practice while using AI selectively to improve speed, coordination, and visibility."]]
    ]
  },
  {
    slug: "insight-ai-social-media-growth",
    category: "Social media",
    dateISO: "2026-08-27",
    dateDisplay: "August 27, 2026",
    minutes: 7,
    title: "The Ultimate AI Powered Growth Blueprint For Social Media Optimization",
    description: "A practical framework for using AI to improve social media research, planning, production, and measurement without losing brand judgement.",
    deck: "Sustainable social growth comes from clear audience understanding, useful content, consistent execution, and informed refinement. AI can support each layer when the strategy and approval process are defined first.",
    lead: "Social media optimization is not simply publishing more often. It is the work of making every stage—from audience research to performance review—more intentional and easier to improve.",
    intro: "AI can reduce coordination effort and surface patterns, but it should operate inside a clear brand and content system.",
    signals: [["Listen", "Organize recurring audience questions and themes."], ["Plan", "Connect approved ideas to goals and content pillars."], ["Learn", "Review meaningful signals and refine deliberately."]],
    note: "Consistency improves when the system makes good decisions easier to repeat.",
    points: ["Define audience needs before generating content", "Build content pillars around business relevance", "Use approval points to protect brand quality", "Measure signals that inform the next decision"],
    sections: [
      ["foundation", "Begin with a useful social foundation", ["Clarify who the content is for, what the audience needs, and how the business can contribute credibly. This creates boundaries for topics, tone, claims, and calls to action.", "AI works better with defined context. Without it, faster production can simply create more inconsistent content."]],
      ["workflow", "Build an AI-assisted content workflow", ["Use AI to organize research, develop approved variations, prepare production notes, and summarize performance. Keep people responsible for editorial direction, final creative choices, and publishing decisions.", "A visible workflow should show the status, owner, source material, review needs, and intended outcome for every piece of content."]],
      ["engagement", "Optimize for useful engagement", ["Reach alone does not explain whether social media is helping the business. Look at the quality of responses, recurring questions, qualified visits, saved content, enquiries, and the role social plays across the wider customer journey.", "AI can help group and summarize these signals so the team can identify patterns without reading every interaction manually."]],
      ["improve", "Create a deliberate improvement cycle", ["Review what audiences responded to, what the team learned, and what should change. Avoid reacting to every short-term fluctuation.", "A monthly learning rhythm can produce better decisions than constant activity without a clear point of view."]]
    ]
  },
  {
    slug: "insight-organic-seo-growth",
    category: "Organic search",
    dateISO: "2026-08-21",
    dateDisplay: "August 21, 2026",
    minutes: 8,
    title: "Next Generation Search Dominance Through Organic SEO Growth",
    description: "A practical guide to organic SEO growth built around technical quality, useful information, clear authority, and modern search experiences.",
    deck: "Organic growth now depends on more than rankings. Businesses need technically sound websites, genuinely useful information, credible expertise, and clear journeys for people arriving from search and AI-assisted discovery.",
    lead: "Search visibility is becoming more distributed. Customers may encounter a business through traditional results, map listings, answer summaries, reviews, social content, or an AI-generated response.",
    intro: "A durable organic strategy helps the business remain understandable and useful across that changing discovery journey.",
    signals: [["Clarity", "Make services, expertise, and locations understandable."], ["Quality", "Build technically dependable search experiences."], ["Authority", "Publish evidence-backed information customers can trust."]],
    note: "Organic growth compounds when useful content and strong experience reinforce each other.",
    points: ["Technical quality makes content easier to discover", "Useful pages answer real customer decisions", "Authority requires evidence and consistency", "Conversion paths should continue the search journey"],
    sections: [
      ["changed", "What has changed in organic search", ["Search engines increasingly interpret intent, entities, experience signals, and the usefulness of a complete page. Customers also move between search results and other discovery environments before they act.", "This makes isolated keyword tactics less dependable. The website needs a coherent structure that explains what the business does, who it helps, where it operates, and why its information is credible."]],
      ["foundation", "Strengthen the technical and content foundation", ["Begin with crawlability, indexing, performance, mobile usability, structured information, and a clear site hierarchy. Then align service, location, educational, and proof content around genuine customer questions.", "AI can assist with research and content operations, but subject-matter review is essential for accuracy, differentiation, and trust."]],
      ["experience", "Connect visibility with a useful experience", ["A ranking is not the final outcome. The page should quickly confirm relevance, answer the next question, and make the next step easy to understand.", "Navigation, internal links, page speed, accessibility, proof, and conversion design all influence whether organic visibility becomes meaningful business value."]],
      ["measure", "Measure organic growth as a system", ["Track qualified visibility, relevant landing-page engagement, enquiries, assisted conversions, local actions, and the topics that contribute to customer decisions.", "Use reporting to identify what to improve next rather than treating traffic volume as the only measure of success."]]
    ]
  },
  {
    slug: "insight-alberta-ai-driven-market",
    category: "Local growth",
    dateISO: "2026-08-17",
    dateDisplay: "August 17, 2026",
    minutes: 7,
    title: "How Alberta Businesses Win Customers in 2026’s AI-Driven Market",
    description: "How Alberta businesses can strengthen local discovery and customer trust across search, AI tools, reviews, social platforms, and their websites.",
    deck: "Local customers now move through a connected discovery journey. Winning attention requires consistent business information, strong proof, useful local content, and a clear path from first impression to enquiry.",
    lead: "Local growth is no longer tied to one channel. A prospective customer may begin with an AI question, compare map results, read reviews, visit social profiles, and return through branded search.",
    intro: "Businesses that connect those moments create a clearer and more trustworthy customer experience.",
    signals: [["Discover", "Be understandable across local search surfaces."], ["Trust", "Support decisions with credible, current proof."], ["Convert", "Make the next step clear on every important path."]],
    note: "Local advantage comes from consistency across the whole journey, not visibility in one place.",
    points: ["Keep business information accurate across platforms", "Build service and location relevance without duplication", "Use reviews as customer insight as well as proof", "Connect every channel to a clear next step"],
    sections: [
      ["journey", "Understand the new local discovery journey", ["Customers increasingly ask longer, more specific questions and expect useful answers immediately. Search summaries, maps, reviews, websites, and social profiles can all shape the shortlist.", "The business should communicate the same core facts and value across each surface while adapting the experience to the customer’s stage."]],
      ["relevance", "Build genuine local relevance", ["Create clear service and location information supported by real operating context, customer questions, project examples, team knowledge, and accurate business details.", "Avoid producing near-duplicate location pages with little value. Useful local content should help a customer understand availability, process, fit, and the next step."]],
      ["trust", "Turn reputation into visible trust", ["Reviews, case examples, credentials, guarantees, policies, and transparent expectations help customers evaluate risk. Make proof easy to find and connect it to the service being considered.", "AI can summarize recurring themes in feedback, but people should validate conclusions and decide how the business responds."]],
      ["system", "Connect local marketing as one system", ["Link advertising, organic search, maps, social content, CRM follow-up, and website conversion around shared customer journeys.", "A connected system makes it easier to understand where enquiries originate, which information customers need, and where follow-up can improve."]]
    ]
  },
  {
    slug: "insight-seo-leads-without-paid-ads",
    category: "Lead generation",
    dateISO: "2026-07-23",
    dateDisplay: "July 23, 2026",
    minutes: 8,
    title: "How SEO Services Generate Consistent Leads Without Paid Advertising",
    description: "How a structured SEO program can build durable lead generation through useful content, technical quality, commercial intent, and conversion design.",
    deck: "SEO can create a durable source of qualified demand when it is built around the questions customers ask, the services they need, and the experience that helps them take the next step.",
    lead: "Paid advertising can create immediate visibility, but the flow stops when spending stops. Organic search develops a discoverable body of information and experience that can continue supporting demand over time.",
    intro: "Consistency comes from a system: technical health, useful content, credible proof, clear commercial paths, and regular improvement.",
    signals: [["Intent", "Prioritize searches connected to real decisions."], ["Value", "Answer questions more clearly than competing pages."], ["Action", "Guide qualified visitors toward an appropriate next step."]],
    note: "SEO generates better leads when visibility and customer usefulness are designed together.",
    points: ["Target customer decisions rather than traffic alone", "Build service pages with depth and clear proof", "Support discovery with useful educational content", "Measure qualified enquiries and assisted journeys"],
    sections: [
      ["demand", "How organic search captures existing demand", ["People use search when they need to understand a problem, compare approaches, evaluate providers, or take action. SEO helps the business appear with relevant information at those moments.", "The strongest opportunities usually combine meaningful search demand, commercial relevance, and a realistic ability to provide a better answer or experience."]],
      ["content", "Build content around the buying journey", ["Service pages should explain fit, process, outcomes, boundaries, proof, and the next step. Supporting articles can answer earlier questions and connect readers to the appropriate service path.", "Each page needs a clear purpose. Publishing volume without a useful role in the customer journey rarely creates dependable growth."]],
      ["conversion", "Turn organic visits into qualified enquiries", ["Make contact options clear, set expectations, and ask only for the information needed to begin a useful conversation. Strong conversion design reduces uncertainty without pressuring the visitor.", "Connect forms and calls to a consistent follow-up process so qualified demand does not disappear after the initial enquiry."]],
      ["compound", "Create a compounding improvement rhythm", ["Review visibility, landing-page behaviour, enquiries, lead quality, and the questions sales teams hear. Use that evidence to improve existing pages before continually adding new ones.", "Over time, the combined value of stronger pages, links, proof, and customer insight can reduce dependence on paid acquisition."]]
    ]
  },
  {
    slug: "insight-zero-click-search",
    category: "Search behaviour",
    dateISO: "2026-07-17",
    dateDisplay: "July 17, 2026",
    minutes: 7,
    title: "How Edmonton Businesses Can Capture Leads From Zero-Click Searches",
    description: "Practical ways Edmonton businesses can remain visible and earn enquiries when search results answer more questions before a website visit.",
    deck: "Zero-click search changes where the first customer interaction happens. Businesses can respond by making their information clearer, strengthening local proof, and creating reasons for qualified customers to continue the journey.",
    lead: "A growing share of discovery can happen directly inside search results through map listings, featured answers, knowledge panels, reviews, and AI-generated summaries.",
    intro: "That does not make the website irrelevant. It changes the role each search surface plays in creating recognition, trust, and action.",
    signals: [["Answer", "Provide concise, accurate information search can understand."], ["Prove", "Support visibility with strong local trust signals."], ["Invite", "Offer a useful reason to continue to the website."]],
    note: "Success is not only the click; it is the qualified action the full search journey creates.",
    points: ["Optimize business profiles and core service facts", "Structure pages around specific customer questions", "Build recognizable local authority and proof", "Track calls, directions, branded search, and enquiries"],
    sections: [
      ["meaning", "What zero-click search means for local businesses", ["Customers may receive an address, opening hours, service summary, review rating, or short answer without visiting a website. These search features can influence the decision before the business sees a session in analytics.", "The objective is to make accurate, compelling information available while giving qualified customers a clear reason to continue."]],
      ["presence", "Strengthen the information shown in search", ["Maintain complete business profiles, consistent contact details, relevant categories, current hours, useful images, and thoughtful responses to reviews. On the website, use clear headings, concise answers, structured data, and locally relevant service information.", "Every claim should be accurate and supportable. Consistency helps search platforms and customers understand the business."]],
      ["click", "Create value beyond the instant answer", ["Detailed service guidance, project examples, pricing context, comparison information, availability, tools, and a strong consultation path can give customers a reason to visit.", "The website should continue the question started in search instead of forcing the visitor to begin again."]],
      ["measurement", "Measure the wider local search outcome", ["Include calls, messages, direction requests, profile interactions, branded search, assisted conversions, and qualified enquiries in the evaluation.", "A lower click-through rate does not automatically mean weaker performance if search visibility is producing valuable actions elsewhere in the journey."]]
    ]
  }
];

const escapeJson = (value) => JSON.stringify(value).slice(1, -1);
const icon = (id) => `<svg aria-hidden="true"><use href="#${id}"/></svg>`;

function renderArticle(post) {
  const toc = post.sections.map(([id, title], index) => `<li><a href="#${id}"><span>${String(index + 1).padStart(2, "0")}</span>${title}</a></li>`).join("");
  const signals = post.signals.map(([title, copy], index) => `<div class="blog-detail-signal"><span>${String(index + 1).padStart(2, "0")}</span><div><strong>${title}</strong><small>${copy}</small></div></div>`).join("");
  const points = post.points.map((point, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span><strong>${point}</strong></li>`).join("");
  const sections = post.sections.map(([id, title, paragraphs], index) => {
    const copy = paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
    const pointsBlock = index === 0 ? `<ul class="blog-key-points" aria-label="Key considerations">${points}</ul>` : "";
    const callout = index === 1 ? `<div class="blog-callout"><span>The useful principle</span><p>${post.note}</p></div>` : "";
    return `<h2 id="${id}">${title}</h2>${copy}${pointsBlock}${callout}`;
  }).join("");

  return `<!-- BLOG_ARTICLE_START -->
    <article>
      <header class="blog-detail-hero"><div class="site-container"><nav class="blog-detail-breadcrumb" aria-label="Breadcrumb"><a href="insights.html">Blogs</a>${icon("i-chevron")}<span>${post.category}</span></nav><div class="blog-detail-hero-grid"><div><div class="blog-detail-meta"><span class="insight-tag">${post.category}</span><time datetime="${post.dateISO}">${post.dateDisplay}</time><span>${post.minutes} minute read</span></div><h1>${post.title}</h1><p class="blog-detail-deck">${post.deck}</p><div class="blog-detail-author"><span class="blog-detail-author-mark"><img src="assets/images/reach-first-r-mark.png" width="120" height="120" alt=""></span><div><strong>Reach First Team</strong><span>Strategy, automation, and digital growth</span></div></div></div><aside class="blog-detail-visual" aria-label="Key ideas in this article"><div class="blog-detail-visual-head"><span>Practical perspective</span><span>Human directed</span></div>${signals}<p class="blog-detail-visual-note">${post.note}</p></aside></div></div></header>
      <section class="blog-article section-space" aria-label="Article content"><div class="site-container blog-article-layout"><nav class="blog-article-nav" aria-label="On this page"><span>On this page</span><ol>${toc}</ol></nav><div class="blog-article-body"><p class="blog-article-lead">${post.lead}</p><p>${post.intro}</p>${sections}<footer class="blog-article-end"><p>Published by Reach First on ${post.dateDisplay}.</p><a href="insights.html">Back to all blogs${icon("i-arrow")}</a></footer></div></div></section>
    </article>
    <!-- BLOG_ARTICLE_END -->`;
}

function renderRelated(current, allPosts) {
  const related = allPosts.filter((post) => post.slug !== current.slug).slice(0, 3);
  const cards = related.map((post) => `<article><span>${post.category}</span><h3>${post.title}</h3><p>${post.description}</p><a href="${post.slug}.html">Read insight${icon("i-arrow-up")}</a></article>`).join("");
  return `<!-- BLOG_RELATED_START -->
    <section class="blog-related section-space" aria-labelledby="related-reading-heading"><div class="site-container"><div class="blog-related-heading"><div><p class="eyebrow">Continue reading</p><h2 id="related-reading-heading">Related thinking for your next decision.</h2></div><a href="insights.html">View all blogs</a></div><div class="blog-related-grid">${cards}</div></div></section>
    <!-- BLOG_RELATED_END -->`;
}

const templatePath = resolve("insight-ai-2026.html");
const template = await readFile(templatePath, "utf8");
const allPosts = [{
  slug: "insight-ai-2026",
  category: "AI-powered marketing",
  title: "Why Businesses Are Turning to AI Powered Marketing Agencies in 2026",
  description: "How AI can improve analysis, targeting, personalization, and campaign operations while experienced human direction remains central."
}, ...posts];

for (const post of posts) {
  const schema = `{"@context":"https://schema.org","@type":"Article","headline":"${escapeJson(post.title)}","datePublished":"${post.dateISO}","dateModified":"${post.dateISO}","author":{"@type":"Organization","name":"Reach First"},"publisher":{"@type":"Organization","name":"Reach First"},"description":"${escapeJson(post.description)}"}`;
  const output = template
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${post.description}">`)
    .replace(/<meta property="article:published_time" content="[^"]*">/, `<meta property="article:published_time" content="${post.dateISO}">`)
    .replace(/<meta property="article:section" content="[^"]*">/, `<meta property="article:section" content="${post.category}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${post.title} | Reach First</title>`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${schema}</script>`)
    .replace(/<!-- BLOG_ARTICLE_START -->[\s\S]*?<!-- BLOG_ARTICLE_END -->/, renderArticle(post))
    .replace(/<!-- BLOG_RELATED_START -->[\s\S]*?<!-- BLOG_RELATED_END -->/, renderRelated(post, allPosts));
  await writeFile(resolve(`${post.slug}.html`), output, "utf8");
}

console.log(`Generated ${posts.length} blog detail pages.`);
