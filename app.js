/* =====================================================================
   EDIT ME: your details. Everything on the site reads from here.
   ===================================================================== */
const ME = {
  name: "Taliya Serdeze",
  first: "Taliya",
  short: "taliya.",             // logo text in the top-left corner
  role: "UI/UX & Game UI Designer",
  location: "Ramat Gan, Israel",
  email: "talitaliya3002@gmail.com",
  links: [
    { label: "+972 54-471-6350", url: "tel:+972544716350" },
    { label: "WhatsApp", url: "https://wa.me/972544716350" },
    { label: "Behance", url: "https://www.behance.net/taliyaserdeze" },
    // add more, e.g. { label: "LinkedIn", url: "https://www.linkedin.com/in/..." },
  ],
  heroWords: ["playful", "clear", "calm", "delicious"],
  intro:
    "I design UI for games and apps, like party games, dashboards and online shops.",
  about: [
    "I like to start on paper. I sketch, map the flows, make wireframes in Figma and keep testing until it's easy to use.",
    "Right now I'm designing the 2D UI and the art direction for Bowling With Friends, a multiplayer game. I'm also studying architecture at Bezalel, and it helps me think about layout and how people move through a screen.",
  ],
  skills: {
    Design: ["UI design", "Game UI & 2D game assets", "Art direction & style guides", "User flows & wireframes", "Prototypes in Figma"],
    Tools: ["Figma", "Illustrator, Photoshop, InDesign", "AutoCAD, Rhino", "Miro"],
  },
  experience: [
    { when: "2024 - now", what: "Freelance Graphic & UI/UX Designer", where: "Strangely Interactive Ltd (UK): 2D UI and art direction for Bowling With Friends. Compugraphic Ltd: UI/UX for the Mental Fitness Control Center." },
    { when: "Military", what: "Soldier Welfare NCO", where: "IDF" },
  ],
  education: [
    { when: "2025 - now", what: "Architecture", where: "Bezalel Academy of Arts and Design" },
    { when: "2024", what: "Graphic Design, App & UI/UX Design", where: "HackerU, 603 academic hours" },
  ],
  languages: "Hebrew & English",
};

/* =====================================================================
   PROJECTS: text drafted from the Figma files. Edit freely.
   ===================================================================== */
const ART = [
  { src: "img/art/studio.jpg", alt: "Taliya painting a relief canvas in the studio", note: "me, working on a relief", tall: true },
  { src: "img/art/relief-oranges.jpg", alt: "Relief painting of an orange branch on turquoise" },
  { src: "img/art/moon.jpg", alt: "Painting of a figure under a dripping moon", tall: true },
  { src: "img/art/relief-fruit.jpg", alt: "Relief painting of citrus, berries and flowers on grey" },
  { src: "img/art/trio-abstract.jpg", alt: "Three abstract paintings hung together", tall: true, fit: true },
  { src: "img/art/trio-still-life.jpg", alt: "Three small still-life paintings: a candle, a plant pot and a figure", wide: true, fit: true },
];

const CARDS = [
  ["BasketballStand", "Basketball Heap", "Toss bouncy basketballs onto the lane to disrupt the shot."],
  ["Bigger", "Big Ball", "Grow your ball, or send a giant ball against the bowler."],
  ["Deadwood", "Deadwood", "Throw loose pins to hit obstacles or block the bowling ball."],
  ["Dynamite", "Dynamite", "Launch dynamite to blast obstacles and disrupt the competition."],
  ["Explode", "Explosive Ball", "Give your ball, or a chosen object, an explosive surprise."],
  ["Force", "The Force", "Place a powerful pusher to redirect balls and obstacles."],
  ["GoalKeeper", "Goal Keeper", "Add a foosball kicker to your ball, or guard the lane."],
  ["Hole", "Hole Trap", "Place a portable hole to catch whatever rolls over it."],
  ["MineBall", "Mine Ball", "Arm your ball with a mine, or place one on the lane."],
  ["OilTracks", "Oil Spill", "Spill oil to make the lane slippery and shots unpredictable."],
  ["Rail", "Guard Rail", "Raise the bumpers to keep your ball out of the gutter."],
  ["RCCard", "RC Car", "Drive a toy car, or let it pull your bowling ball."],
  ["Sheild", "Shield", "Protect your ball or a chosen object from one hazard."],
  ["Smaller", "Small Ball", "Shrink your ball, or send a small ball against the bowler."],
  ["SplitBall", "Split Ball", "Split your rolling ball, or launch a counter-ball."],
  ["Stepladder", "Stepladder", "Place a ladder to bowl from above or block the way."],
  ["StrongWind", "Strong Wind", "Place a mighty fan to push balls and obstacles around."],
  ["TargetedPins", "Targeted Pins", "Pick a pin to knock down, or place a decoy pin."],
  ["TidalWave", "Tidal Wave", "Send a huge wave down the lane to sweep things away."],
  ["Turret", "Pin Popper", "Control a popgun that fires bowling pins across the lane."],
  ["UFO", "UFO", "Pilot a flying saucer and take control with its tractor beam."],
  ["WildShark", "Wild Shark", "Take a chance and unleash a surprise card effect."],
];

const PROJECTS = [
  {
    slug: "bowling-with-friends",
    title: "Bowling With Friends",
    titleHtml: "Bowling <em>With Friends</em>",
    accent: "#2f7577",
    year: "Freelance",
    live: true,
    tags: ["Game UI", "Art direction", "2D design", "Multiplayer"],
    cover: "img/game/cover.jpg",
    short:
      "A multiplayer party bowling game. I design the 2D UI and the art direction, from my paper sketches to a deck of 22 illustrated cards.",
    lead:
      "Bowling With Friends (codename CrazyBalls) is an online bowling game for up to four friends, made with Strangely Interactive Ltd (UK) in Unreal Engine 5. Between rounds you buy cards like Oil Spill, Tidal Wave or UFO that change the game. I designed the 2D UI and I'm in charge of the art direction. I also directed the look of the 3D world, but the 3D team built it.",
    meta: { Client: "Strangely Interactive Ltd (UK)", Role: "UI Designer & Art Director", Type: "Multiplayer PC game (UE5)", "My tools": "Figma, Illustrator", Status: "In development" },
    sections: [
      {
        kicker: "The challenge",
        title: "Mixing three styles in one UI",
        body: [
          "The game is a retro bowling alley, a crazy card game and a real score table at the same time. Up to four people play, and turns are fast, so everything has to be easy to read.",
          "Players who aren't bowling can place traps on the lane while someone else is aiming, so everyone needs to see what's going on.",
        ],
      },
      {
        kicker: "Art direction",
        title: "Friendly cards in a retro bowling alley",
        body: [
          "I chose the style: warm paper colour, round dark outlines, flat colours and one big drawing on each card. I drew reference sheets by hand to set the style, then directed the 22 card illustrations and checked each one against my references.",
          "The same colours (teal, cream, coral and red) are on the cards, the shop and the 3D alley. For the alley I picked the colours and the retro mood, and the 3D artists modelled it.",
        ],
      },
      {
        kicker: "What I designed",
        title: "Screens and assets I made",
        list: [
          "The card: one card design used in the hand, in the shop and when you look at a card. It grows a little on hover (1 to 1.08 in 0.15s) and you can hold it to flip and read more.",
          "The card shop: you see one card at a time and choose Take, Discard or Keep hand. Then the card flies into your hand.",
          "The hand: your cards fanned out at the bottom of the screen.",
          "The HUD: aim and power bars, and a small pin triangle that empties when pins fall.",
          "The scoreboard, the main menu buttons (light and dark), the pause icon and the character icons.",
          "No text inside the card art, so the titles stay as live text and are easy to translate.",
        ],
      },
    ],
    process: [
      { t: "Sketches", d: "I drew card ideas, characters and the lane on paper." },
      { t: "First ideas", d: "Title screens, card layouts and the pin UI on a shared board." },
      { t: "Style & colours", d: "I set the colours, the outlines and how a card is built." },
      { t: "Assets & handoff", d: "I made the 2D screens, cards and icons in Figma and Illustrator and gave them to the team to build in Unreal." },
    ],
    palette: [
      ["Warm paper", "#F5F0E5"], ["Ink", "#252B2A"], ["Muted teal", "#477A7A"],
      ["Amber", "#BA852F"], ["Coral", "#D9654D"], ["Red", "#C83749"],
    ],
    gallery: {
      title: "From paper to the game",
      items: [
        { src: "img/game/sketches.jpg", note: "My sketches of cards, characters and the lane", wide: true },
        { src: "img/game/early-title.jpg", note: "Early title screen ideas" },
        { src: "img/game/early-cards.jpg", note: "First card layouts and colours" },
        { src: "img/game/pin-ui.jpg", note: "Pin tracker and icon tests" },
      ],
    },
    cards: true,
    screens: [
      { kind: "shot", src: "img/game/hud.jpg", title: "In-game HUD", note: "Pins, score, power bar and your Crazy Cards." },
      { kind: "shot", src: "img/game/shop.jpg", title: "Card shop background", note: "The shop wall behind the card you're buying." },
      { kind: "shot", src: "img/game/scoreboard.jpg", title: "Scoreboard", note: "A score screen that looks like an old TV." },
      { kind: "shot", src: "img/game/alley.jpg", title: "The alley", note: "I picked the colours and mood, the 3D team modelled it." },
    ],
    kit: [
      "menu/main_local_btn", "menu/main_multiplayer_btn", "menu/main_setting_btn",
      "menu/main_local_dark_btn", "menu/main_multiplayer_dark_btn", "menu/main_setting_dark_btn",
      "hud/pingroup_empty", "hud/choose_card", "hud/power_bar", "menu/pause_icon",
      "character/astronaut_helmet", "character/cowboy_hat", "character/tophat", "character/moustache",
    ],
  },
  {
    slug: "mental-fitness",
    title: "Mental Fitness Control Center",
    titleHtml: "Mental Fitness <em>Control Center</em>",
    accent: "#2f4bd8",
    year: "2025",
    tags: ["Dashboard", "Healthcare", "VR", "Desktop"],
    cover: "img/trauma-final-1.jpg",
    short:
      "A dashboard for therapists running VR sessions with up to four patients. The emergency stop is always in the same spot.",
    lead:
      "A desktop dashboard I designed for Compugraphic. A therapist uses it to run VR exposure sessions for up to four trauma patients at once, and sees what each patient sees and how their body reacts.",
    meta: { Client: "Compugraphic Ltd", Role: "UI/UX Designer", Type: "Healthcare dashboard", Platform: "Desktop 1920×1080", Tools: "Figma, Smart Animate" },
    sections: [
      {
        kicker: "The challenge",
        title: "Watching four VR sessions from one screen",
        body: [
          "In a session the patient is inside a VR scene, for example a crowded bus, and the therapist watches from outside. The therapist needs to see what the patient sees, check their stress signals and stop right away if it's too much.",
          "With a few patients at the same time, the screen has to stay calm and clear.",
        ],
      },
      {
        kicker: "The solution",
        title: "Main layout",
        list: [
          "One big panel for the selected patient, with the live VR view. Stop and the red Emergency button are always in the same place.",
          "Small cards for the other patients: headset battery, time, current step and vitals.",
          "Vitals have icons and colours, so you notice a change before reading the number.",
          "A 7-step bar shows where each patient is: done, in progress or waiting.",
          "Different card states: active, offline, unstable and critical.",
        ],
      },
    ],
    process: [
      { t: "What's needed", d: "I listed what the therapist has to see and control in a session." },
      { t: "Grey wireframes", d: "I tried layouts for the home and control screens." },
      { t: "Side panels", d: "Patient data, info, scenarios and environment open and close." },
      { t: "UI & prototype", d: "I added the visual design, icons and states, and connected it with Smart Animate." },
    ],
    compare: { before: "img/trauma-wire-control.jpg", after: "img/trauma-final-2.jpg", l: "Wireframe", r: "Final UI" },
    screens: [
      { kind: "shot", src: "img/trauma-final-1.jpg", title: "Manual stop", note: "When the session is paused, the VR view goes dark so it doesn't look live." },
      { kind: "shot", src: "img/trauma-main.jpg", title: "Vitals graph", note: "The patient data panel open, with heart rate, response and breathing over time." },
    ],
    prototype: "https://www.figma.com/proto/ilfBMFHgMZJbSRbFqNgvg3?node-id=1-3",
  },
  {
    slug: "crazy-cake",
    title: "Crazy Cake",
    titleHtml: "Crazy <em>Cake</em>",
    accent: "#e0577a",
    year: "2025",
    tags: ["E-commerce", "Web", "Branding"],
    cover: "img/sweet-cover.jpg",
    short:
      "An online bakery shop, from browsing cupcakes to the cart, with pink colours, a crumpled paper background and handwritten labels.",
    lead:
      "A website for a bakery that sells cupcakes, cakes, pies and baking supplies. I wanted it to be fun, but I didn't want that to make buying harder.",
    meta: { Role: "UI/UX Designer", Type: "E-commerce website", Platform: "Desktop web", Tools: "Figma" },
    sections: [
      {
        kicker: "The challenge",
        title: "A bakery site that feels warm",
        body: [
          "People buy cakes for birthdays and events, so I wanted the site to feel warm and fun, but still quick to order from.",
        ],
      },
      {
        kicker: "The solution",
        title: "The full shopping flow",
        list: [
          "A home page that tells the story first, with a \"Sweet Crisis?\" part for event orders.",
          "Category pages with big photos to browse cupcakes by flavour.",
          "A product page with price, pack size, ingredients and allergens at the top, a gallery and \"You may also like\".",
          "A simple cart with the total and checkout always visible.",
          "Crumpled paper background, soft pink and handwritten-style labels, so it feels homemade.",
        ],
      },
    ],
    process: [
      { t: "Moodboard", d: "I collected inspiration on its own page." },
      { t: "Thinking page", d: "I planned the pages and the flow: home, category, product, cart." },
      { t: "Drafts", d: "I tried layouts and graphics before choosing the style." },
      { t: "Final pages", d: "I designed the final pages and linked them into a prototype." },
    ],
    screens: [
      { kind: "page", src: "img/sweet-home.jpg", title: "Home page", note: "The story first, then the products and how to order.", url: "crazycake.shop" },
      { kind: "page", src: "img/sweet-category.jpg", title: "Cupcakes category", note: "All the cupcakes on one page.", url: "crazycake.shop/cupcakes" },
      { kind: "page", src: "img/sweet-product.jpg", title: "Product page", note: "Price, details, allergens and a gallery.", url: "crazycake.shop/cupcakes/chocolate" },
      { kind: "page", src: "img/sweet-cart.jpg", title: "Cart", note: "A short last step.", url: "crazycake.shop/cart" },
    ],
    prototype: "https://www.figma.com/proto/m3xZaIAuhBEUzk0zYU06tN?node-id=58-879",
  },
  {
    slug: "teavana",
    title: "Teavana",
    titleHtml: "Not just <em>tea</em>",
    accent: "#8a6fb5",
    year: "2024",
    tags: ["Landing page", "Web", "Concept"],
    cover: "img/teavana-cover.jpg",
    short:
      "A calm landing page for a tea and herbs shop, with products, a story, a club sign-up and the stores.",
    lead:
      "A landing page for a tea and herbal medicine shop. This is a study concept I made in my course, not a real project for Teavana.",
    meta: { Role: "UI/UX Designer", Type: "Landing page (concept)", Platform: "Desktop web", Tools: "Figma, components" },
    sections: [
      {
        kicker: "The brief",
        title: "A calm page",
        body: [
          "I wanted the page to feel calm, like making tea, so I used soft photos and a lot of space. The order is simple: what they sell, their story, how to join and where the stores are.",
        ],
      },
      {
        kicker: "What I designed",
        title: "Page structure",
        list: [
          "A top section with one \"Shop Now\" button.",
          "Product categories: tea herbs, coffee beans and brewing kits.",
          "\"Our Story\" over a sunset photo.",
          "A \"Join Us\" club form.",
          "A list of stores with opening hours, and a footer.",
          "Components with hover states for buttons, product cards and social icons.",
        ],
      },
    ],
    process: [
      { t: "Structure", d: "I split the page into sections." },
      { t: "Components", d: "Buttons, cards and icons with normal and hover states." },
      { t: "Visual design", d: "Lavender and grey, wide letter spacing and soft photos." },
      { t: "Prototype", d: "I linked the menu and hover states into a prototype." },
    ],
    screens: [
      { kind: "page", src: "img/teavana-full.jpg", title: "Full landing page", note: "Scroll inside the frame to see all of it.", url: "teavana.concept" },
    ],
    prototype: "https://www.figma.com/proto/yPNbQR5d5EodmdeXPNC5ya?node-id=0-1",
  },
];

/* =====================================================================
   Rendering
   ===================================================================== */
const app = document.getElementById("app");
const cursor = document.querySelector(".cursor");
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

document.querySelectorAll("[data-name-short]").forEach((el) => (el.textContent = ME.short));

function contactSection() {
  return `
  <section class="contact" id="contact">
    <div class="wrap">
      <p class="contact__note reveal">Open to junior roles and freelance work.</p>
      <a class="contact__big reveal" href="mailto:${esc(ME.email)}">Want to work together? Email me</a>
      <div class="contact__links reveal">
        <a href="mailto:${esc(ME.email)}">${esc(ME.email)}</a>
        ${ME.links.map((l) => `<a href="${esc(l.url)}"${l.url.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${esc(l.label)}</a>`).join("")}
      </div>
      <div class="footer"><span>© ${new Date().getFullYear()} ${esc(ME.name)}</span><span>${esc(ME.role)} · ${esc(ME.location)}</span></div>
    </div>
  </section>`;
}

function homeView() {
  return `
  <section class="hero">
    <h1 class="hero__title">
      Hi, I'm ${esc(ME.first)}.<br><em>I design interfaces that feel</em><br><span class="hero__swap" data-swap>${esc(ME.heroWords[0])}</span>.
    </h1>
    <div class="hero__foot">
      <p class="hero__intro">${esc(ME.intro)}</p>
      <a href="#/work" class="hero__scroll">See my work ↓</a>
    </div>
  </section>

  <div class="marquee" aria-hidden="true"><div class="marquee__track">
    ${["Game UI", "Art direction", "Wireframing", "UI design", "Prototyping", "Dashboards", "E-commerce"]
      .concat(["Game UI", "Art direction", "Wireframing", "UI design", "Prototyping", "Dashboards", "E-commerce"])
      .map((w) => `<span>${w}</span>`).join("")}
  </div></div>

  <section class="section" id="work">
    <div class="wrap">
      <div class="section__head">
        <h2 class="section__title reveal">My <em>work</em></h2>
        <span class="section__note reveal">click a project to see more</span>
      </div>
      <div class="projects">
        ${PROJECTS.map((p, i) => `
          <a class="project reveal" href="#/work/${p.slug}" style="--p-accent:${p.accent}" data-cursor>
            <div>
              <span class="project__num">0${i + 1} · ${esc(p.year)}${p.live ? ' <i class="live">● in progress</i>' : ""}</span>
              <h3 class="project__title">${esc(p.title)}</h3>
              <p class="project__desc">${esc(p.short)}</p>
              <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
            </div>
            <div class="project__media"><img src="${p.cover}" alt="${esc(p.title)} preview" loading="lazy"></div>
          </a>`).join("")}
      </div>
    </div>
  </section>

  <section class="section" id="about" style="padding-top:0">
    <div class="wrap about">
      <div>
        <p class="about__big reveal">I sketch on paper first, then build it in Figma until it feels <em>obvious</em>.</p>
        <div class="photos reveal">
          <figure class="photo photo--a"><img src="img/me-portrait.jpg" alt="Portrait of ${esc(ME.first)}" loading="lazy"></figure>
          <figure class="photo photo--b"><img src="img/me-grey.jpg" alt="Portrait of ${esc(ME.first)} smiling" loading="lazy"><figcaption>hi there ✿</figcaption></figure>        </div>
      </div>
      <div class="reveal">
        ${ME.about.map((p) => `<p>${esc(p)}</p>`).join("")}
        <div class="skills">
          ${Object.entries(ME.skills).map(([k, v]) => `<div><h4>${esc(k)}</h4><ul>${v.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>`).join("")}
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="cv" style="padding-top:0">
    <div class="wrap">
      <div class="section__head">
        <h2 class="section__title reveal">Experience <em>&amp; education</em></h2>
        <span class="section__note reveal">Languages: ${esc(ME.languages)}</span>
      </div>
      <div class="cv">
        ${[["Experience", ME.experience], ["Education", ME.education]].map(([h, rows]) => `
          <div class="cv__col reveal">
            <h4>${h}</h4>
            ${rows.map((r) => `<div class="cv__row"><span>${esc(r.when)}</span><div><b>${esc(r.what)}</b><p>${esc(r.where)}</p></div></div>`).join("")}
          </div>`).join("")}
      </div>
    </div>
  </section>
  <section class="section art" id="art" style="padding-top:0">
    <div class="wrap">
      <div class="section__head">
        <h2 class="section__title reveal">I also <em>paint</em></h2>
        <span class="section__note reveal">click a painting to see it big</span>
      </div>
      <p class="art__intro reveal">When I'm not in Figma I paint. I love thick texture, and I build fruit and flowers in relief on the canvas. I think you can see it in my UI too, I like warm colours and hand-made details.</p>
      <div class="art__grid">
        ${ART.map((a) => `
          <figure class="art__item reveal${a.tall ? " is-tall" : ""}${a.wide ? " is-wide" : ""}${a.fit ? " is-fit" : ""}" tabindex="0" role="button" aria-label="View full image: ${esc(a.alt)}">
            <img src="${a.src}" alt="${esc(a.alt)}" loading="lazy">
            ${a.note ? `<figcaption>${esc(a.note)}</figcaption>` : ""}
          </figure>`).join("")}
      </div>
    </div>
  </section>
  ${contactSection()}`;
}

function cardHtml([file, title, desc], extra = "") {
  return `<div class="gcard" ${extra}><div class="gcard__face">
    <h5>${esc(title)}</h5>
    <img src="img/game/cards/${file}.webp" alt="" loading="lazy">
    <p>${esc(desc)}</p>
  </div></div>`;
}

function gameExtras(p) {
  let out = "";
  if (p.palette) out += `
    <section class="block reveal">
      <h2><small>Colours</small>The palette</h2>
      <div class="swatches">${p.palette.map(([n, h]) => `<div class="swatch"><i style="background:${h}"></i><b>${esc(n)}</b><span>${h}</span></div>`).join("")}</div>
    </section>`;
  if (p.gallery) out += `
    <section class="block reveal" style="grid-template-columns:1fr">
      <h2><small>Process</small>${esc(p.gallery.title)}</h2>
      <div class="pgallery">${p.gallery.items.map((g) => `
        <figure class="${g.wide ? "is-wide" : ""}"><img src="${g.src}" alt="${esc(g.note)}" loading="lazy"><figcaption>${esc(g.note)}</figcaption></figure>`).join("")}
      </div>
    </section>`;
  if (p.cards) out += `
    <section class="deck reveal">
      <div class="deck__head">
        <span class="deck__note">${CARDS.length} cards</span>
        <h2>Hover over a card. <em>These are the game cards, rebuilt in HTML.</em></h2>
      </div>
      <div class="hand">${["OilTracks", "Explode", "WildShark", "UFO", "TidalWave"].map((f) => CARDS.find((c) => c[0] === f)).map((c, i) => cardHtml(c, `style="--i:${i - 2}"`)).join("")}</div>
      <div class="deck__grid">${CARDS.map((c) => cardHtml(c)).join("")}</div>
    </section>`;
  if (p.kit) out += `
    <section class="block reveal" style="grid-template-columns:1fr">
      <h2><small>UI kit</small>Menu, HUD and character icons</h2>
      <div class="kit">${p.kit.map((k) => `<div><img src="img/game/ui/${k.split("/").pop()}.webp" alt="${esc(k.split("/").pop().replace(/_/g, " "))}" loading="lazy"></div>`).join("")}</div>
    </section>`;
  return out;
}

function caseView(p) {
  const idx = PROJECTS.indexOf(p);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  return `
  <article class="case" style="--p-accent:${p.accent}">
    <div class="wrap">
      <header class="case__hero">
        <a class="case__back" href="#/work">← All work</a>
        <h1 class="case__title">${p.titleHtml}</h1>
        <p class="case__lead">${esc(p.lead)}</p>
        <dl class="meta">${Object.entries(p.meta).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
      </header>
      <div class="case__cover reveal"><img src="${p.cover}" alt="${esc(p.title)} cover"></div>

      ${p.sections.map((s) => `
        <section class="block reveal">
          <h2><small>${esc(s.kicker)}</small>${esc(s.title)}</h2>
          <div>
            ${(s.body || []).map((t) => `<p>${esc(t)}</p>`).join("")}
            ${s.list ? `<ul>${s.list.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
          </div>
        </section>`).join("")}

      <section class="block reveal">
        <h2><small>Process</small>How I worked</h2>
        <div class="steps">${p.process.map((s, i) => `<div class="step"><b>0${i + 1}</b><h4>${esc(s.t)}</h4><p>${esc(s.d)}</p></div>`).join("")}</div>
      </section>

      ${gameExtras(p)}

      ${p.compare ? `
      <section class="block reveal" style="grid-template-columns:1fr">
        <h2><small>Before and after</small>Drag the circle to compare</h2>
        <div class="compare" style="--pos:50%">
          <img src="${p.compare.before}" alt="${esc(p.compare.l)}">
          <div class="compare__top"><img src="${p.compare.after}" alt="${esc(p.compare.r)}"></div>
          <div class="compare__handle"></div>
          <span class="compare__label compare__label--l">${esc(p.compare.l)}</span>
          <span class="compare__label compare__label--r">${esc(p.compare.r)}</span>
          <input type="range" min="0" max="100" value="50" aria-label="Compare wireframe and final design">
        </div>
      </section>` : ""}

      <section class="screens">
        <h3 class="screens__title">Screens</h3>
        ${p.screens.map((s) => s.kind === "page" ? `
          <figure class="screen reveal">
            <div class="browser">
              <div class="browser__bar"><span>${esc(s.url || "")}</span></div>
              <div class="browser__view"><img src="${s.src}" alt="${esc(s.title)}" loading="lazy"><div class="browser__hint">scroll ↓</div></div>
            </div>
            <figcaption><b>${esc(s.title)}</b><span>${esc(s.note)}</span></figcaption>
          </figure>` : `
          <figure class="screen screen--shot reveal">
            <img src="${s.src}" alt="${esc(s.title)}" loading="lazy">
            <figcaption><b>${esc(s.title)}</b><span>${esc(s.note)}</span></figcaption>
          </figure>`).join("")}
      </section>

      ${p.prototype ? `
      <div class="proto reveal">
        <h3>Try the prototype</h3>
        <a class="btn" href="${esc(p.prototype)}" target="_blank" rel="noopener">Open in Figma ↗</a>
      </div>` : ""}

      <a class="next" href="#/work/${next.slug}" style="--n-accent:${next.accent}" data-cursor>
        <small>Next project</small>
        <div>${esc(next.title)} →</div>
      </a>
    </div>
  </article>
  ${contactSection()}`;
}

/* ---------- router ---------- */
let swapTimer;
function route() {
  const hash = location.hash.replace(/^#\/?/, "");
  const [page, slug] = hash.split("/");
  clearInterval(swapTimer);
  cursor.classList.remove("is-on");

  const project = page === "work" && slug && PROJECTS.find((p) => p.slug === slug);
  if (project) {
    app.innerHTML = caseView(project);
    document.title = `${project.title} | ${ME.name}`;
    window.scrollTo({ top: 0, behavior: "instant" });
  } else {
    app.innerHTML = homeView();
    document.title = `${ME.name} | ${ME.role}`;
    const target = { work: "work", about: "about", cv: "cv", art: "art", contact: "contact" }[page];
    if (target) setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: "instant" }), 0);
    else window.scrollTo({ top: 0, behavior: "instant" });
    startSwap();
  }
  wire();
  app.focus({ preventScroll: true });
}

// each swap of the hero word also jumps to a new font
const HERO_FONTS = [
  { fontFamily: '"Shrikhand", serif', fontStyle: "normal", fontWeight: 400, fontSize: "1em" },
  { fontFamily: '"Caveat", cursive', fontStyle: "normal", fontWeight: 700, fontSize: "1.25em" },
  { fontFamily: '"Fraunces", serif', fontStyle: "italic", fontWeight: 600, fontSize: "1em" },
  { fontFamily: '"Righteous", sans-serif', fontStyle: "normal", fontWeight: 400, fontSize: ".92em" },
  { fontFamily: '"DM Sans", sans-serif', fontStyle: "normal", fontWeight: 700, fontSize: ".9em" },
];

function startSwap() {
  const el = app.querySelector("[data-swap]");
  if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let i = 0, f = 0;
  swapTimer = setInterval(() => {
    el.classList.add("is-out");
    setTimeout(() => {
      i = (i + 1) % ME.heroWords.length;
      f = (f + 1) % HERO_FONTS.length;
      el.textContent = ME.heroWords[i];
      Object.assign(el.style, HERO_FONTS[f]);
      el.classList.remove("is-out");
    }, 400);
  }, 2200);
}

function wire() {
  // scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  app.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // "View" cursor over project cards
  app.querySelectorAll("[data-cursor]").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.setProperty("--cursor-c", getComputedStyle(el).getPropertyValue("--p-accent") || getComputedStyle(el).getPropertyValue("--n-accent"));
      cursor.classList.add("is-on");
    });
    el.addEventListener("mouseleave", () => cursor.classList.remove("is-on"));
  });

  // small hand-made imperfections: every tag, bullet, flower and frame gets its own tilt and flower shape
  const flowers = ["img/flower.svg", "img/flower-2.svg", "img/flower-3.svg", "img/flower-4.svg"];
  let seed = 7;
  const rand = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
  app.querySelectorAll(".tag, .block li, .marquee__track span, .art__item, .project__media").forEach((el) => {
    const max = el.matches(".tag") ? 3 : el.matches(".art__item, .project__media") ? 1.2 : 25;
    el.style.setProperty("--r", ((rand() * 2 - 1) * max).toFixed(2) + "deg");
    el.style.setProperty("--fm", `url("${flowers[Math.floor(rand() * flowers.length)]}")`);
  });

  // painting lightbox
  const arts = [...app.querySelectorAll(".art__item")];
  arts.forEach((el, i) => {
    el.addEventListener("click", () => openLightbox(i));
    el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(i); } });
  });

  // compare slider
  app.querySelectorAll(".compare").forEach((c) => {
    const input = c.querySelector("input");
    input.addEventListener("input", () => c.style.setProperty("--pos", input.value + "%"));
  });

  // hide "scroll to explore" once the visitor scrolls the frame
  app.querySelectorAll(".browser__view").forEach((v) =>
    v.addEventListener("scroll", () => v.closest(".browser").classList.add("is-scrolled"), { once: true })
  );
}

window.addEventListener("mousemove", (e) => {
  cursor.style.translate = `${e.clientX}px ${e.clientY}px`;
});
/* ---------- lightbox ---------- */
const lb = document.createElement("div");
lb.className = "lightbox";
lb.setAttribute("role", "dialog");
lb.setAttribute("aria-modal", "true");
lb.innerHTML = `
  <button class="lightbox__close" aria-label="Close">×</button>
  <button class="lightbox__nav lightbox__nav--prev" aria-label="Previous image">‹</button>
  <figure><img alt=""></figure>
  <button class="lightbox__nav lightbox__nav--next" aria-label="Next image">›</button>`;
document.body.appendChild(lb);
let lbIndex = 0, lbReturn = null;

function showLightbox(i) {
  lbIndex = (i + ART.length) % ART.length;
  const img = lb.querySelector("img");
  img.src = ART[lbIndex].src;
  img.alt = ART[lbIndex].alt;
}
function openLightbox(i) {
  lbReturn = document.activeElement;
  showLightbox(i);
  lb.classList.add("is-open");
  document.body.style.overflow = "hidden";
  lb.querySelector(".lightbox__close").focus();
}
function closeLightbox() {
  lb.classList.remove("is-open");
  document.body.style.overflow = "";
  lbReturn?.focus?.();
}
lb.addEventListener("click", (e) => { if (e.target === lb || e.target.tagName === "FIGURE") closeLightbox(); });
lb.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
lb.querySelector(".lightbox__nav--prev").addEventListener("click", () => showLightbox(lbIndex - 1));
lb.querySelector(".lightbox__nav--next").addEventListener("click", () => showLightbox(lbIndex + 1));
window.addEventListener("keydown", (e) => {
  if (!lb.classList.contains("is-open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showLightbox(lbIndex - 1);
  if (e.key === "ArrowRight") showLightbox(lbIndex + 1);
});

window.addEventListener("hashchange", () => { if (lb.classList.contains("is-open")) closeLightbox(); });
window.addEventListener("hashchange", route);
route();
