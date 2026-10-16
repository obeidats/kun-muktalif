/* =========================================================
   Be Different | كن مختلف — main script
   ========================================================= */
(function () {
  "use strict";

  var WA_NUMBER = "962785158652";

  /* ---------- English translations (Arabic lives in the HTML) ---------- */
  var EN = {
    "skip": "Skip to content",
    "logoAlt": "Be Different logo",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.work": "Our Work",
    "nav.results": "Results",
    "nav.pricing": "Packages",
    "nav.contact": "Contact",
    "cta.start": "Start Your Project",
    "cta.work": "See Our Work",
    "cta.choose": "Order This Package",
    "cta.book": "Book Your Session",

    "hero.eyebrow": "Advertising & social media marketing specialists",
    "hero.title": "Design is your brand’s <span class=\"hl\">silent ambassador</span>",
    "hero.lead": "We build a professional digital presence for your brand that combines creativity, quality content, powerful design and thoughtful marketing… because your digital presence deserves to be seen differently.",
    "stats.since": "Year founded",
    "stats.works": "Designs & logos in our portfolio",
    "stats.services": "Integrated services",

    "about.tag": "About Us",
    "about.title": "Paving the road to success together <span class=\"hl\">with a standout marketing plan</span>",
    "about.p1": "Be Different was launched on <strong>January 13, 2024</strong> with a clear vision: to help projects and companies build a professional and diverse digital presence.",
    "about.p2": "We manage and develop social media pages in a way that combines creativity, content quality, design power and thoughtful marketing, helping our clients reach their audiences more professionally and effectively.",
    "about.p3": "At Be Different, we believe the success of any brand starts with a clear identity, strong content, and a marketing strategy that knows how to reach the right audience.",
    "about.k1": "Creativity",
    "about.k1d": "Fresh ideas that set your brand apart.",
    "about.k2": "Design Power",
    "about.k2d": "Professional designs that reflect your identity.",
    "about.k3": "Strong Content",
    "about.k3d": "Thoughtful content that attracts and convinces.",
    "about.k4": "Smart Marketing",
    "about.k4d": "Precise targeting that reaches the right people.",

    "services.tag": "Our Services",
    "services.title": "Integrated solutions <span class=\"hl\">for your digital presence</span>",
    "services.sub": "From visual identity to ad campaigns — everything your brand needs, in one place.",
    "s1.t": "Content Design",
    "s1.d": "Professional designs tailored to your business identity, highlighting your products and services in an attractive and distinctive way.",
    "s2.t": "Logo & Visual Identity",
    "s2.d": "We create a visual identity that expresses your project and gives it a professional presence that is easy to remember.",
    "s3.t": "Reels Videos",
    "s3.d": "Short, modern videos made for social platforms, with ideas that grab attention and boost engagement.",
    "s4.t": "Professional Montage",
    "s4.d": "Editing and directing videos in a professional style suited to ads, products, services and marketing content.",
    "s5.t": "Ad Campaign Management",
    "s5.d": "Preparing and managing ad campaigns and targeting the right audience to get the most out of your budget.",
    "s6.t": "Professional Photo Shoots",
    "s6.d": "Photographing products, services, locations and projects to produce professional visuals that reflect the quality of your business.",
    "s7.t": "Page Setup & Configuration",
    "s7.d": "Preparing and organizing your pages professionally to suit your activity and improve content visibility according to platform requirements and algorithms.",
    "s8.t": "Social Media Management",
    "s8.d": "End-to-end content management, publishing, follow-up and development to build a continuous, professional digital presence.",

    "process.tag": "How We Work",
    "process.title": "Your next step to success <span class=\"hl\">starts by rising</span>",
    "p1.t": "We get to know you",
    "p1.d": "We understand your business, audience and goals before any design.",
    "p2.t": "We build identity & plan",
    "p2.d": "A clear visual identity and a content plan built for each platform.",
    "p3.t": "We design, produce & publish",
    "p3.d": "Daily designs, reels, montage and photography — with consistent quality.",
    "p4.t": "We promote & track results",
    "p4.d": "Targeted campaigns on a smart budget, with continuous performance tracking.",

    "work.tag": "Our Work",
    "work.title": "Every design has a story… <span class=\"hl\">and we’re here to tell it our way</span>",
    "work.sub": "A selection of 3D logos and social media designs we created for our clients.",
    "work.designs": "Social Media Designs",
    "work.logos": "3D Logos",
    "work.more": "Show More",
    "work.less": "Show Less",

    "results.tag": "Ad Results",
    "results.title": "Advertising isn’t just a button… <span class=\"hl\">see the results</span>",
    "results.sub": "Small budgets, satisfying results — real snapshots from the performance dashboards of campaigns we ran for our clients.",

    "pricing.tag": "Packages & Pricing",
    "pricing.title": "Choose the package <span class=\"hl\">that fits your brand</span>",
    "pricing.sub": "The longer the package, the more you save. All prices are in Jordanian Dinars (JOD).",
    "pricing.popular": "Most Popular",
    "pricing.best": "Best Value",
    "jd": "JOD",
    "pk1.name": "Monthly Package",
    "pk1.per": "per month",
    "pk2.name": "3-Month Package",
    "pk2.per": "(90 JOD / month)",
    "pk3.name": "6-Month Package",
    "pk3.per": "(85 JOD / month)",
    "pk4.name": "Yearly Package",
    "pk4.per": "(80 JOD / month)",
    "f.identity": "Visual identity design",
    "f.logo": "Custom logo for your business",
    "f.cover": "Cover image for your page",
    "f.manage": "Page management service",
    "f.montage": "Montage videos",
    "f.designs": "Designs:",
    "f.reels": "Reels videos:",
    "f.exec": "Execution of requested designs",
    "pk1.designs": "15 designs",
    "pk1.reels": "2 videos",
    "pk2.designs": "45 designs",
    "pk2.reels": "6 videos",
    "pk3.designs": "90 designs",
    "pk3.reels": "12 videos",
    "pk4.designs": "every other day",
    "pk4.reels": "2 per month",
    "pk2.save": "Save 30 JOD",
    "pk3.save": "Save 90 JOD",
    "pk4.save": "Save 240 JOD",

    "photo.tag": "Stand out with us",
    "photo.title": "Professional Photo Sessions",
    "photo.f1": "Professional photography",
    "photo.f2": "2-hour shoot",
    "photo.f3": "Photos + videos",
    "photo.f4": "5 reels clips",
    "photo.f5": "30 professional photos",
    "photo.f6": "Professionally edited montage video",
    "photo.f7": "Voice-over about your business (on request)",
    "photo.only": "Only",
    "photo.per": "per session",

    "band.title": "Don’t stop here! <span class=\"hl\">Excellence awaits you at the top</span>",
    "band.cta": "Chat with us on WhatsApp",

    "contact.tag": "Contact Us",
    "contact.title": "Come closer… <span class=\"hl\">excellence is within your reach</span>",
    "contact.main": "Main line",
    "contact.design": "Design department",
    "contact.sales": "Sales department",
    "contact.email": "Email",
    "contact.fb": "Facebook",
    "contact.fbv": "Be Different for Website Management",
    "contact.addrT": "Our location",
    "contact.addr": "Irbid – Al-Hosn Street, opposite Tariq Clothes, City Center Buildings, 3rd floor",
    "contact.directions": "Get directions →",
    "contact.hoursT": "Working hours",
    "contact.days": "Sunday – Thursday",
    "contact.time": "8:00 AM – 4:00 PM",
    "contact.weekend": "Friday – Saturday",
    "contact.closed": "Closed",

    "footer.tag": "Be Different • where your digital vision comes true",
    "footer.rights": "Be Different for Website Management. All rights reserved."
  };

  /* Strings used only from JS */
  var UI = {
    ar: {
      open: "مفتوح الآن",
      closedToday: "مغلق الآن — نفتح اليوم الساعة 8 صباحاً",
      closedTomorrow: "مغلق الآن — نفتح غداً الساعة 8 صباحاً",
      closedSunday: "مغلق الآن — نفتح يوم الأحد الساعة 8 صباحاً",
      title: "كن مختلف | لإدارة المواقع الإلكترونية والتسويق الرقمي - إربد",
      mapTitle: "خريطة موقع كن مختلف",
      designAlt: "تصميم سوشال ميديا من أعمال كن مختلف",
      logoAlt: "شعار ثلاثي الأبعاد من أعمال كن مختلف",
      resultAlt: "نتيجة حملة ممولة من إدارة كن مختلف",
      wa: {
        general: "مرحباً كن مختلف، أود الاستفسار عن خدماتكم.",
        pk1: "مرحباً، أود الاشتراك في الباقة الشهرية (100 دينار).",
        pk2: "مرحباً، أود الاشتراك في باقة 3 أشهر (270 دينار).",
        pk3: "مرحباً، أود الاشتراك في باقة 6 أشهر (510 دينار).",
        pk4: "مرحباً، أود الاشتراك في باقة السنة (960 دينار).",
        photo: "مرحباً، أود حجز جلسة تصوير احترافية (100 دينار)."
      },
      slogans: [
        "التصميم سفيرك الصامت لعلامتك التجارية",
        "خطوتك التالية نحو النجاح تبدأ بالصعود",
        "اكتشف كيف نميز علامتك التجارية",
        "نحو آفاق أوسع • خدمات مبتكرة • ونتائج ملموسة",
        "أنت الآن في قلب التغيير والتطوير الرقمي",
        "ابدأ اليوم بخطوة نحو نجاح لا ينسى",
        "حقق رؤيتك الرقمية مع فريقنا المحترف",
        "ابتكار مستمر وخدمات متطورة تجعلك مختلفاً دوماً",
        "ارتقِ بأعمالك لأعلى المستويات"
      ]
    },
    en: {
      open: "Open now",
      closedToday: "Closed now — opens today at 8 AM",
      closedTomorrow: "Closed now — opens tomorrow at 8 AM",
      closedSunday: "Closed now — opens Sunday at 8 AM",
      title: "Be Different | Social Media Management & Digital Marketing - Irbid",
      mapTitle: "Be Different location map",
      designAlt: "Social media design by Be Different",
      logoAlt: "3D logo designed by Be Different",
      resultAlt: "Paid campaign result managed by Be Different",
      wa: {
        general: "Hello Be Different, I'd like to ask about your services.",
        pk1: "Hello, I'd like to subscribe to the Monthly Package (100 JOD).",
        pk2: "Hello, I'd like to subscribe to the 3-Month Package (270 JOD).",
        pk3: "Hello, I'd like to subscribe to the 6-Month Package (510 JOD).",
        pk4: "Hello, I'd like to subscribe to the Yearly Package (960 JOD).",
        photo: "Hello, I'd like to book a professional photo session (100 JOD)."
      },
      slogans: [
        "Design is your brand’s silent ambassador",
        "Your next step to success starts by rising",
        "Discover how we make your brand stand out",
        "Wider horizons • Innovative services • Tangible results",
        "You’re at the heart of digital change",
        "Start today with a step toward unforgettable success",
        "Achieve your digital vision with our professional team",
        "Continuous innovation that keeps you different",
        "Take your business to the highest level"
      ]
    }
  };

  /* ---------- Portfolio data ---------- */
  var DESIGNS = [];
  for (var d = 1; d <= 54; d++) { if (d !== 39) DESIGNS.push("assets/img/work/designs/design-" + pad(d) + ".webp"); }
  var LOGOS = [];
  for (var l = 1; l <= 18; l++) LOGOS.push("assets/img/work/logos/logo-" + pad(l) + ".webp");
  var RESULTS = [];
  for (var r = 2; r <= 13; r++) RESULTS.push("assets/img/results/result-" + pad(r) + ".webp");

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

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
    altNodes.forEach(function (el) { el.alt = lang === "en" ? EN[el.getAttribute("data-i18n-alt")] : "شعار كن مختلف"; });
    document.title = UI[lang].title;
    var map = document.querySelector(".map-wrap iframe");
    if (map) map.title = UI[lang].mapTitle;
    document.getElementById("langToggle").textContent = lang === "en" ? "عربي" : "EN";
    updateWaLinks();
    buildMarquee();
    updateOpenStatus();
    refreshGalleryAlts();
    updateMoreLabel();
    try { localStorage.setItem("kun-lang", lang); } catch (e) { /* storage unavailable */ }
  }

  document.getElementById("langToggle").addEventListener("click", function () {
    applyLang(lang === "en" ? "ar" : "en");
  });

  /* ---------- WhatsApp links with prefilled messages ---------- */
  function updateWaLinks() {
    document.querySelectorAll("[data-wa]").forEach(function (a) {
      var msg = UI[lang].wa[a.getAttribute("data-wa")] || UI[lang].wa.general;
      a.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
    });
  }

  /* ---------- Marquee ---------- */
  function buildMarquee() {
    var track = document.getElementById("marqueeTrack");
    if (!track) return;
    var items = UI[lang].slogans.map(function (s) { return "<span>" + s + "</span>"; }).join("");
    track.innerHTML = items + items; // duplicated for a seamless loop
  }

  /* ---------- Header: scroll state, mobile menu, active link ---------- */
  var header = document.querySelector(".site-header");
  var toTop = document.getElementById("toTop");
  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle("scrolled", y > 30);
    toTop.classList.toggle("show", y > 700);
  }
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
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }) : null;
  document.querySelectorAll(".reveal").forEach(function (el, i) {
    if (!revealObs) { el.classList.add("in"); return; }
    el.style.transitionDelay = (i % 4) * 80 + "ms";
    revealObs.observe(el);
  });

  /* ---------- Portfolio gallery ---------- */
  var gallery = document.getElementById("gallery");
  var moreBtn = document.getElementById("loadMore");
  var currentSet = "designs";
  var STEP = { designs: 12, logos: 12 };
  var shown = 0;

  function setList() { return currentSet === "logos" ? LOGOS : DESIGNS; }
  function altFor(set) { return set === "logos" ? UI[lang].logoAlt : set === "results" ? UI[lang].resultAlt : UI[lang].designAlt; }

  function makeItem(src, idx, set, cls) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = cls;
    b.setAttribute("data-idx", idx);
    b.setAttribute("data-set", set);
    b.innerHTML = '<img src="' + src + '" alt="' + altFor(set) + " " + (idx + 1) + '" loading="lazy" decoding="async" width="512" height="512"><span class="zoom" aria-hidden="true">+</span>';
    b.addEventListener("click", function () { openLightbox(set, idx); });
    return b;
  }

  function renderGallery(reset) {
    var list = setList();
    if (reset) { gallery.innerHTML = ""; shown = 0; }
    gallery.classList.toggle("logos", currentSet === "logos");
    var end = Math.min(list.length, shown + STEP[currentSet]);
    var frag = document.createDocumentFragment();
    for (var i = shown; i < end; i++) frag.appendChild(makeItem(list[i], i, currentSet, "g-item"));
    gallery.appendChild(frag);
    shown = end;
    updateMoreLabel();
  }

  function updateMoreLabel() {
    var list = setList();
    moreBtn.style.display = list.length <= STEP[currentSet] ? "none" : "";
    moreBtn.textContent = shown >= list.length ? (lang === "en" ? EN["work.less"] : "عرض أقل") : t("work.more");
  }

  function refreshGalleryAlts() {
    document.querySelectorAll(".g-item img, .r-item img").forEach(function (img) {
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

  /* ---------- Results slider ---------- */
  var track = document.getElementById("resultsTrack");
  RESULTS.forEach(function (src, i) { track.appendChild(makeItem(src, i, "results", "r-item")); });
  document.querySelectorAll("[data-slide]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var dir = +btn.getAttribute("data-slide");
      var item = track.querySelector(".r-item");
      var step = item ? item.getBoundingClientRect().width + 18 : 300;
      track.scrollBy({ left: dir * step * (html.dir === "rtl" ? -1 : 1), behavior: "smooth" });
    });
  });

  /* ---------- Lightbox ---------- */
  var lb = document.getElementById("lightbox");
  var lbImg = lb.querySelector(".lb-img");
  var lbSet = "designs", lbIdx = 0, lastFocus = null;

  function listFor(set) { return set === "logos" ? LOGOS : set === "results" ? RESULTS : DESIGNS; }

  function openLightbox(set, idx) {
    lastFocus = document.activeElement;
    lbSet = set; lbIdx = idx;
    showLb();
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    lb.querySelector(".lb-close").focus();
  }
  function showLb() {
    var list = listFor(lbSet);
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
  // swipe on touch devices
  var touchX = null;
  lb.addEventListener("touchstart", function (e) { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) { lbIdx += (dx < 0 ? 1 : -1) * (html.dir === "rtl" ? -1 : 1); showLb(); }
    touchX = null;
  });

  /* ---------- Open / closed status (Jordan time) ---------- */
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
    var workday = ["Sun", "Mon", "Tue", "Wed", "Thu"].indexOf(day) !== -1;
    var open = workday && hour >= 8 && hour < 16;
    el.className = "open-status " + (open ? "open" : "closed");
    var msg = "open";
    if (!open) {
      if (workday && hour < 8) msg = "closedToday";
      else if (["Sun", "Mon", "Tue", "Wed"].indexOf(day) !== -1) msg = "closedTomorrow";
      else msg = "closedSunday"; // Thursday evening, Friday, Saturday
      if (day === "Sat" && hour >= 16) msg = "closedTomorrow";
    }
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
