const vegaOpts = { actions: false, renderer: "svg" };

// ── Section 1: National Geography ──────────────────────────────────────────
vegaEmbed("#chart-map", "charts/map.vg.json", vegaOpts).catch(console.warn);
vegaEmbed("#chart-state-ranking", "charts/state_ranking.vg.json", vegaOpts).catch(console.warn);
vegaEmbed("#chart-age", "charts/age_participation.vg.json", vegaOpts).catch(console.warn);
vegaEmbed("#chart-state-heatmap", "charts/state_heatmap.vg.json", vegaOpts).catch(console.warn);

// ── Section 2: Activity Preferences ────────────────────────────────────────
vegaEmbed("#chart-activities", "charts/top_activities.vg.json", vegaOpts).catch(console.warn);
vegaEmbed("#chart-gender", "charts/gender_diverging.vg.json", vegaOpts).catch(console.warn);
vegaEmbed("#chart-bubble", "charts/activity_bubble.vg.json", vegaOpts).catch(console.warn);

// ── Section 3: Organised Sport ──────────────────────────────────────────────
vegaEmbed("#chart-volunteer-ratio", "charts/volunteer_ratio.vg.json", vegaOpts).catch(console.warn);
vegaEmbed("#chart-organised", "charts/organised_roles.vg.json", vegaOpts).catch(console.warn);
vegaEmbed("#chart-volunteer", "charts/volunteer_paid.vg.json", vegaOpts).catch(console.warn);
vegaEmbed("#chart-role-breakdown", "charts/role_breakdown.vg.json", vegaOpts).catch(console.warn);

// ── Section 4: Modern Inactivity ────────────────────────────────────────────
vegaEmbed("#chart-inactivity", "charts/inactivity_dotplot.vg.json", vegaOpts).catch(console.warn);
vegaEmbed("#chart-guidelines", "charts/guidelines_age.vg.json", vegaOpts).catch(console.warn);
vegaEmbed("#chart-work", "charts/work_activity.vg.json", vegaOpts).catch(console.warn);

// ── Scroll-reveal animation ─────────────────────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".chapter, .card, .chapter-header, .stat-box").forEach((el) => {
  observer.observe(el);
});

// ── Sticky chapter nav highlight ─────────────────────────────────────────────
const sections = document.querySelectorAll(".chapter");
const navLinks = document.querySelectorAll(".chapter-nav a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((a) => {
          a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { rootMargin: "-40% 0px -40% 0px" }
);

sections.forEach((s) => sectionObserver.observe(s));
