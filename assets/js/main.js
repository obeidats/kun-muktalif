/* =========================================================
   Be Different | كن مختلف — main script
   ========================================================= */
(function () {
  "use strict";

  var WA_NUMBER = "962785158652";
  var EMAIL = "abujaad89@gmail.com";

  /* ---------- English translations (Arabic lives in the HTML) ---------- */
  var EN = {
    "skip": "Skip to content",
    "logoAlt": "Be Different logo",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.results": "Results",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "cta.talk": "Let’s talk",
    "cta.start": "Start your project",
    "cta.work": "View our work",
    "cta.choose": "Choose plan",
    "cta.book": "Book a session",

    "hero.kicker": "Digital marketing agency · Irbid, Jordan",
    "hero.title": "Your brand deserves to be <em>seen differently</em>",
    "hero.lead": "We run your social media from idea to results: visual identity, daily content and design, reels, and well-planned ad campaigns that reach the right audience.",
    "hero.chip": "Lowest cost per click we achieved",
    "facts.imp": "Ad impressions for our clients",
    "facts.works": "Designs & logos delivered",
    "facts.services": "Services under one roof",

    "clients.title": "Brands we designed identities for",

    "about.tag": "About us",
    "about.title": "Every successful brand starts with a clear identity, strong content, and marketing that knows where it’s going.",
    "about.p1": "Be Different was founded on January 13, 2024 with a clear vision: to help businesses and companies build a professional, diverse digital presence.",
    "about.p2": "We manage and grow social media pages by combining creativity, content quality, strong design and thoughtful marketing — and we set up every page to suit the business and the requirements and algorithms of each platform.",
    "about.f1k": "Founded",
    "about.f1v": "January 2024",
    "about.f2k": "Based in",
    "about.f2v": "Irbid, Jordan",
    "about.f3k": "We serve",
    "about.f3v": "Restaurants, real estate, furniture, beauty, retail and companies",

    "services.tag": "Services",
    "services.title": "Everything your brand needs, in one place",
    "services.sub": "One team handles identity, content, production and ads, so your message stays consistent on every platform.",
    "s1.t": "Content design",
    "s1.d": "Designs tailored to your brand that present your products and services in an attractive, distinctive way.",
    "s2.t": "Logo & visual identity",
    "s2.d": "A visual identity that expresses your business and gives it a professional, memorable presence.",
    "s3.t": "Reels",
    "s3.d": "Short, modern videos with ideas that grab attention and drive engagement.",
    "s4.t": "Professional editing",
    "s4.d": "Video editing and direction for ads, products and marketing content.",
    "s5.t": "Ad campaign management",
    "s5.d": "Campaign setup and audience targeting to get the most from your budget.",
    "s6.t": "Photo shoots",
    "s6.d": "Photography of products, services, locations and projects that reflects the quality of your work.",
    "s7.t": "Page setup",
    "s7.d": "Organizing your pages to suit your business and improve reach under each platform’s algorithm.",
    "s8.t": "Social media management",
    "s8.d": "End-to-end content, publishing, monitoring and growth for a consistent digital presence.",

    "process.tag": "How we work",
    "process.title": "From the first call to the first results",
    "p1.t": "Understand your business",
    "p1.d": "We learn your business, audience and goals before any design.",
    "p2.t": "Build identity & plan",
    "p2.d": "A clear visual identity and a content plan tailored to each platform.",
    "p3.t": "Produce & publish",
    "p3.d": "Designs, reels, editing and photography with consistent quality and a clear schedule.",
    "p4.t": "Promote & measure",
    "p4.d": "Targeted campaigns on a smart budget, with ongoing performance tracking.",

    "work.tag": "Work",
    "work.title": "Selected work",
    "work.designs": "Social media designs",
    "work.logos": "Logos",
    "work.more": "Show more",
    "work.less": "Show less",

    "results.tag": "Campaign results",
    "results.title": "Small budgets, real numbers",
    "results.sub": "A summary of 12 paid campaigns we ran for clients on Meta platforms, as reported in their dashboards.",
    "results.note": "* Amounts in USD as shown in Meta Ads Manager. Total reach is the sum of each campaign’s reach.",
    "k.imp": "Impressions",
    "k.reach": "Total reach",
    "k.msg": "Messaging conversations",
    "k.clicks": "Link clicks",
    "k.spend": "Total ad spend",

    "pricing.tag": "Pricing",
    "pricing.title": "Clear pricing, no surprises",
    "pricing.sub": "Every plan includes visual identity, a logo and page management. The longer the plan, the more you save. Prices in Jordanian dinars.",
    "pricing.popular": "Most popular",
    "jd": "JOD",
    "perMonth": "/ month",
    "pk1.name": "Monthly",
    "pk1.desc": "To get started and try us out",
    "pk1.total": "Billed monthly",
    "pk2.name": "3 months",
    "pk2.desc": "To build a steady presence",
    "pk2.total": "270 JOD total",
    "pk2.save": "Save 30",
    "pk3.name": "6 months",
    "pk3.desc": "For steady growth and results",
    "pk3.total": "510 JOD total",
    "pk3.save": "Save 90",
    "pk4.name": "Yearly",
    "pk4.desc": "Best value and a daily presence",
    "pk4.total": "960 JOD total",
    "pk4.save": "Save 240",
    "pk1.designs": "15 designs",
    "pk1.reels": "2 reels",
    "pk2.designs": "45 designs",
    "pk2.reels": "6 reels",
    "pk3.designs": "90 designs",
    "pk3.reels": "12 reels",
    "pk4.designs": "A design every other day",
    "pk4.reels": "2 reels per month",
    "f.monthly": "per month",
    "f.base": "Visual identity + logo + cover image",
    "f.manage": "Page management & edited videos",
    "f.exec": "Execution of requested designs",

    "photo.tag": "Standalone service",
    "photo.title": "Professional photo session",
    "photo.sub": "Two hours of shooting at your location, with content ready to publish.",
    "photo.f2": "2-hour shoot",
    "photo.f3": "Photos + videos",
    "photo.f4": "5 reels clips",
    "photo.f5": "30 professional photos",
    "photo.f6": "Professionally edited video",
    "photo.f7": "Voice-over about your business (on request)",
    "photo.per": "/ session",

    "band.title": "Ready to be different?",
    "band.sub": "Tell us about your business and we’ll suggest the right plan within one working day.",
    "band.cta": "Message us on WhatsApp",
    "band.call": "Call us",

    "contact.tag": "Contact",
    "contact.title": "We’re one click away",
    "contact.sub": "Tap any number to call or message on WhatsApp, or the email address to send us a message.",
    "contact.main": "Main line · WhatsApp",
    "contact.design": "Design department",
    "contact.sales": "Sales department",
    "contact.email": "Email",
    "contact.fb": "Facebook",
    "contact.fbv": "Be Different for Website Management",
    "act.call": "Call",
    "act.wa": "WhatsApp",
    "act.mail": "Send email",
    "act.copy": "Copy",
    "act.fb": "Visit page",
    "contact.addrT": "Address",
    "contact.addr": "Irbid – Al-Hosn Street, opposite Tariq Clothes, City Center Buildings, 3rd floor",
    "contact.directions": "Get directions",
    "contact.hoursT": "Working hours",
    "contact.days": "Saturday – Thursday",
    "contact.time": "9:00 AM – 4:00 PM",
    "contact.weekend": "Friday",
    "contact.closed": "Closed",

    "footer.tag": "Design is your brand’s silent ambassador.",
    "footer.nav": "Links",
    "footer.contact": "Contact",
    "footer.rights": "Be Different for Website Management. All rights reserved."
  };

  /* Strings used only from JS */
  var UI = {
    ar: {
      open: "مفتوح الآن · حتى 4 مساءً",
      closedToday: "مغلق الآن · نفتح اليوم 9 صباحاً",
      closedTomorrow: "مغلق الآن · نفتح غداً 9 صباحاً",
      closedSaturday: "مغلق الآن · نفتح السبت 9 صباحاً",
      title: "كن مختلف | لإدارة المواقع الإلكترونية والتسويق الرقمي - إربد",
      mapTitle: "خريطة موقع كن مختلف",
      designAlt: "تصميم سوشال ميديا من أعمال كن مختلف",
      logoAlt: "شعار من تصميم كن مختلف",
      copied: "تم نسخ البريد الإلكتروني",
      mailSubject: "استفسار من الموقع",
      less: "عرض أقل",
      obj: { clicks: "نقرات على الرابط", messages: "محادثات واتساب/ماسنجر", follows: "متابعات وإعجابات", engagement: "تفاعل مع المنشور" },
      objShort: { clicks: "زيارات", messages: "رسائل", follows: "متابعين", engagement: "تفاعل" },
      spent: "الإنفاق",
      cpr: "تكلفة النتيجة",
      reach: "الوصول",
      imp: "الظهور",
      wa: {
        general: "مرحباً كن مختلف، أود الاستفسار عن خدماتكم.",
        pk1: "مرحباً، أود الاشتراك في الباقة الشهرية (100 دينار).",
        pk2: "مرحباً، أود الاشتراك في باقة 3 أشهر (270 دينار).",
        pk3: "مرحباً، أود الاشتراك في باقة 6 أشهر (510 دينار).",
        pk4: "مرحباً، أود الاشتراك في الباقة السنوية (960 دينار).",
        photo: "مرحباً، أود حجز جلسة تصوير احترافية (100 دينار)."
      }
    },
    en: {
      open: "Open now · until 4 PM",
      closedToday: "Closed now · opens today at 9 AM",
      closedTomorrow: "Closed now · opens tomorrow at 9 AM",
      closedSaturday: "Closed now · opens Saturday at 9 AM",
      title: "Be Different | Social Media Management & Digital Marketing - Irbid",
      mapTitle: "Be Different location map",
      designAlt: "Social media design by Be Different",
      logoAlt: "Logo designed by Be Different",
      copied: "Email address copied",
      mailSubject: "Website inquiry",
      less: "Show less",
      obj: { clicks: "Link clicks", messages: "Messaging conversations", follows: "Follows & likes", engagement: "Post engagements" },
      objShort: { clicks: "Traffic", messages: "Messages", follows: "Followers", engagement: "Engagement" },
      spent: "Spent",
      cpr: "Cost / result",
      reach: "Reach",
      imp: "Impressions",
      wa: {
        general: "Hello Be Different, I'd like to ask about your services.",
        pk1: "Hello, I'd like to subscribe to the Monthly plan (100 JOD).",
        pk2: "Hello, I'd like to subscribe to the 3-month plan (270 JOD).",
        pk3: "Hello, I'd like to subscribe to the 6-month plan (510 JOD).",
        pk4: "Hello, I'd like to subscribe to the Yearly plan (960 JOD).",
        photo: "Hello, I'd like to book a professional photo session (100 JOD)."
      }
    }
  };

  /* ---------- Data ---------- */
  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  var DESIGNS = [];
  for (var d = 1; d <= 54; d++) { if (d !== 39) DESIGNS.push("assets/img/work/designs/design-" + pad(d) + ".webp"); }
  var LOGOS = [];
  for (var l = 1; l <= 18; l++) LOGOS.push("assets/img/work/logos/logo-" + pad(l) + ".webp");

  // Hero wall: three columns of strong portfolio pieces
  var WALL = [[4, 14, 30, 46, 25], [11, 28, 33, 44, 18], [54, 2, 41, 21, 36]];

  // Paid campaign results read from the client dashboards (USD)
  var CAMPAIGNS = [
    { obj: "engagement", result: 1525, spend: 29.93, reach: 12919, imp: 21837 },
    { obj: "clicks",     result: 372,  spend: 24.98, reach: 13430, imp: 35453 },
    { obj: "messages",   result: 294,  spend: 24.98, reach: 12719, imp: 26841 },
    { obj: "messages",   result: 254,  spend: 49.98, reach: 18986, imp: 44365 },
    { obj: "clicks",     result: 316,  spend: 3.58,  reach: 2112,  imp: 3105 },
    { obj: "engagement", result: 420,  spend: 3.68,  reach: 1414,  imp: 2117 },
    { obj: "clicks",     result: 137,  spend: 7.60,  reach: 17209, imp: 18431 },
    { obj: "follows",    result: 150,  spend: 19.83, reach: 5863,  imp: 12931 },
    { obj: "messages",   result: 118,  spend: 18.29, reach: 9119,  imp: 16265 },
    { obj: "follows",    result: 115,  spend: 14.85, reach: 3158,  imp: 5347 },
    { obj: "follows",    result: 60,   spend: 9.96,  reach: 3193,  imp: 4892 },
    { obj: "messages",   result: 27,   spend: 10.00, reach: 2185,  imp: 3918 }
  ];

  var fmt = function (n) { return n.toLocaleString("en-US"); };
  var money = function (n) { return "$" + n.toFixed(n < 0.1 ? 3 : 2); };
  var compact = function (n) { return n >= 1000 ? (n / 1000).toFixed(n >= 10000 ? 0 : 1) + "K" : String(n); };

  /* ---------- i18n ---------- */
  var html = document.documentElement;
  var AR = {};
  var i18nNodes = document.querySelectorAll("[data-i18n]");
  i18nNodes.forEach(function (el) { AR[el.getAttribute("data-i18n")] = el.innerHTML; });
  var altNodes = document.querySelectorAll("[data-i18n-alt]");
  var lang = "ar";

  function t(key) { return (lang === "en" ? EN[key] : AR[key]) || AR[key] || ""; }

  function applyLang(next) {
    lang = next === "en" ? "en" : "ar";
    html.lang = lang;
    html.dir = lang === "en" ? "ltr" : "rtl";
    i18nNodes.forEach(function (el) {
      var v = t(el.getAttribute("data-i18n"));
      if (v) el.innerHTML = v;
    });
    altNodes.forEach(function (el) { el.alt = lang === "en" ? EN.logoAlt : "شعار كن مختلف"; });
    document.title = UI[lang].title;
    var map = document.querySelector(".map-wrap iframe");
    if (map) map.title = UI[lang].mapTitle;
    document.getElementById("langToggle").textContent = lang === "en" ? "عربي" : "EN";
    updateWaLinks();
    renderCampaigns();
    updateOpenStatus();
    refreshGalleryAlts();
    updateMoreLabel();
    try { localStorage.setItem("kun-lang", lang); } catch (e) { /* storage unavailable */ }
  }

  document.getElementById("langToggle").addEventListener("click", function () {
    applyLang(lang === "en" ? "ar" : "en");
  });

  /* ---------- WhatsApp, email and copy actions ---------- */
  function updateWaLinks() {
    document.querySelectorAll("[data-wa]").forEach(function (a) {
      var msg = UI[lang].wa[a.getAttribute("data-wa")] || UI[lang].wa.general;
      var num = a.getAttribute("data-wa-num") || WA_NUMBER;
      a.href = "https://wa.me/" + num + "?text=" + encodeURIComponent(msg);
    });
    document.querySelectorAll("[data-mail]").forEach(function (a) {
      a.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(UI[lang].mailSubject);
    });
  }

  // On desktops without a mail app, mailto: often does nothing — open Gmail's compose page instead.
  var isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("[data-mail]");
    if (!a || isMobile) return;
    e.preventDefault();
    var url = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(EMAIL) + "&su=" + encodeURIComponent(UI[lang].mailSubject);
    var w = window.open(url, "_blank", "noopener");
    if (!w) location.href = a.href; // popup blocked: fall back to the mail app
  });

  var toast = document.getElementById("toast");
  var toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2200);
  }
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      var done = function () { showToast(UI[lang].copied); };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
      } else { fallbackCopy(text); done(); }
    });
  });
  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  /* ---------- Hero wall & clients strip ---------- */
  WALL.forEach(function (ids, c) {
    var col = document.querySelector('[data-wall="' + c + '"]');
    if (!col) return;
    var imgs = ids.map(function (id, i) {
      return '<img src="assets/img/work/designs/design-' + pad(id) + '.webp" alt="" width="512" height="512"' + (i > 1 ? ' loading="lazy"' : "") + ">";
    }).join("");
    col.innerHTML = imgs + imgs; // duplicated for a seamless loop
  });

  var clientsTrack = document.getElementById("clientsTrack");
  if (clientsTrack) {
    var logos = LOGOS.map(function (src) { return '<img src="' + src + '" alt="" width="64" height="64" loading="lazy">'; }).join("");
    clientsTrack.innerHTML = logos + logos;
  }

  /* ---------- Header: scroll state, mobile menu, active link ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 20); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var menuToggle = document.getElementById("menuToggle");
  function closeMenu() {
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
  menuToggle.addEventListener("click", function () {
    var open = document.body.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.querySelectorAll(".main-nav a").forEach(function (a) { a.addEventListener("click", closeMenu); });

  var navLinks = document.querySelectorAll(".main-nav a");
  if ("IntersectionObserver" in window) {
    var secObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { secObs.observe(s); });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealObs = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); revealObs.unobserve(en.target); }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }) : null;
  function observeReveal(root) {
    (root || document).querySelectorAll(".reveal:not(.in)").forEach(function (el, i) {
      if (!revealObs) { el.classList.add("in"); return; }
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      revealObs.observe(el);
    });
  }
  observeReveal();

  /* ---------- KPI count-up ---------- */
  var counters = document.querySelectorAll("[data-count]");
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduced) {
    var cntObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        cntObs.unobserve(en.target);
        var el = en.target, target = +el.getAttribute("data-count"), start = null;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min(1, (ts - start) / 1400);
          el.textContent = fmt(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (c) { cntObs.observe(c); });
  }

  /* ---------- Campaign cards ---------- */
  var maxReach = Math.max.apply(null, CAMPAIGNS.map(function (c) { return c.reach; }));
  function renderCampaigns() {
    var box = document.getElementById("campaigns");
    if (!box) return;
    var u = UI[lang];
    box.innerHTML = CAMPAIGNS.map(function (c) {
      return '<article class="camp">' +
        '<div class="camp-top"><span class="chip ' + c.obj + '">' + u.objShort[c.obj] + '</span>' +
        '<span class="camp-spend">' + u.spent + ' <bdi>$' + c.spend.toFixed(2) + "</bdi></span></div>" +
        '<div class="camp-result"><strong dir="ltr">' + fmt(c.result) + "</strong><span>" + u.obj[c.obj] + "</span></div>" +
        '<div class="camp-meta">' +
          '<div><b dir="ltr">' + money(c.spend / c.result) + "</b><small>" + u.cpr + "</small></div>" +
          '<div><b dir="ltr">' + compact(c.reach) + "</b><small>" + u.reach + "</small></div>" +
          '<div><b dir="ltr">' + compact(c.imp) + "</b><small>" + u.imp + "</small></div>" +
        "</div>" +
        '<div class="bar" aria-hidden="true"><i style="width:' + Math.max(6, Math.round(c.reach / maxReach * 100)) + '%"></i></div>' +
        "</article>";
    }).join("");
  }

  /* ---------- Portfolio gallery ---------- */
  var gallery = document.getElementById("gallery");
  var moreBtn = document.getElementById("loadMore");
  var currentSet = "designs";
  var STEP = 12;
  var shown = 0;

  function setList(set) { return (set || currentSet) === "logos" ? LOGOS : DESIGNS; }
  function altFor(set) { return set === "logos" ? UI[lang].logoAlt : UI[lang].designAlt; }

  function makeItem(src, idx, set) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "g-item";
    b.setAttribute("data-idx", idx);
    b.setAttribute("data-set", set);
    b.innerHTML = '<img src="' + src + '" alt="' + altFor(set) + " " + (idx + 1) + '" loading="lazy" decoding="async" width="512" height="512">';
    b.addEventListener("click", function () { openLightbox(set, idx); });
    return b;
  }

  function renderGallery(reset) {
    var list = setList();
    if (reset) { gallery.innerHTML = ""; shown = 0; }
    gallery.classList.toggle("logos", currentSet === "logos");
    var end = Math.min(list.length, shown + STEP);
    var frag = document.createDocumentFragment();
    for (var i = shown; i < end; i++) frag.appendChild(makeItem(list[i], i, currentSet));
    gallery.appendChild(frag);
    shown = end;
    updateMoreLabel();
  }

  function updateMoreLabel() {
    var list = setList();
    moreBtn.style.display = list.length <= STEP ? "none" : "";
    moreBtn.textContent = shown >= list.length ? UI[lang].less : t("work.more");
  }

  function refreshGalleryAlts() {
    document.querySelectorAll(".g-item img").forEach(function (img) {
      var p = img.parentNode;
      img.alt = altFor(p.getAttribute("data-set")) + " " + (+p.getAttribute("data-idx") + 1);
    });
  }

  moreBtn.addEventListener("click", function () {
    if (shown >= setList().length) {
      renderGallery(true);
      document.getElementById("work").scrollIntoView({ behavior: "smooth" });
    } else {
      renderGallery(false);
    }
  });

  document.querySelectorAll(".tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      document.querySelectorAll(".tab").forEach(function (x) {
        x.classList.toggle("is-active", x === tab);
        x.setAttribute("aria-selected", x === tab ? "true" : "false");
      });
      currentSet = tab.getAttribute("data-filter");
      renderGallery(true);
    });
  });

  /* ---------- Lightbox ---------- */
  var lb = document.getElementById("lightbox");
  var lbImg = lb.querySelector(".lb-img");
  var lbSet = "designs", lbIdx = 0, lastFocus = null;

  function openLightbox(set, idx) {
    lastFocus = document.activeElement;
    lbSet = set; lbIdx = idx;
    showLb();
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    lb.querySelector(".lb-close").focus();
  }
  function showLb() {
    var list = setList(lbSet);
    lbIdx = (lbIdx + list.length) % list.length;
    lbImg.src = list[lbIdx];
    lbImg.alt = altFor(lbSet) + " " + (lbIdx + 1);
  }
  function closeLightbox() {
    lb.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  lb.querySelector(".lb-close").addEventListener("click", closeLightbox);
  lb.querySelector(".lb-prev").addEventListener("click", function () { lbIdx--; showLb(); });
  lb.querySelector(".lb-next").addEventListener("click", function () { lbIdx++; showLb(); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    var rtl = html.dir === "rtl";
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowRight") { lbIdx += rtl ? -1 : 1; showLb(); }
    else if (e.key === "ArrowLeft") { lbIdx += rtl ? 1 : -1; showLb(); }
  });
  var touchX = null;
  lb.addEventListener("touchstart", function (e) { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) { lbIdx += (dx < 0 ? 1 : -1) * (html.dir === "rtl" ? -1 : 1); showLb(); }
    touchX = null;
  });

  /* ---------- Open / closed status (Jordan time, Sat–Thu 9:00–16:00) ---------- */
  function updateOpenStatus() {
    var el = document.getElementById("openStatus");
    if (!el) return;
    var day, hour;
    try {
      var parts = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Amman", weekday: "short", hour: "numeric", hour12: false }).formatToParts(new Date());
      parts.forEach(function (p) {
        if (p.type === "weekday") day = p.value;
        if (p.type === "hour") hour = parseInt(p.value, 10) % 24;
      });
    } catch (e) {
      var now = new Date(); day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][now.getDay()]; hour = now.getHours();
    }
    var workday = day !== "Fri";
    var open = workday && hour >= 9 && hour < 16;
    var msg = "open";
    if (!open) {
      if (workday && hour < 9) msg = "closedToday";
      else if (day === "Thu" || day === "Fri") msg = day === "Fri" ? "closedTomorrow" : "closedSaturday";
      else msg = "closedTomorrow";
    }
    el.className = "open-status " + (open ? "open" : "closed");
    el.textContent = UI[lang][msg];
  }
  setInterval(updateOpenStatus, 60000);

  /* ---------- Init ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
  renderGallery(true);

  var initial = "ar";
  var qs = /[?&]lang=(en|ar)/.exec(location.search);
  if (qs) initial = qs[1];
  else {
    try { initial = localStorage.getItem("kun-lang") || "ar"; } catch (e) { initial = "ar"; }
  }
  applyLang(initial);
})();
