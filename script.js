(function () {
  "use strict";

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);

  var TIMELINE = [
    {
      title: "Initial Interest & Foundations",
      role: "2020 - 2021",
      bullets: [
        'Saw "Bro Code" Code In Python, Which Took My Interest',
        "And This Was The First Time I Started Programming",
      ],
      color: "secondary",
      colorHex: "rgba(178,135,254,0.4)",
      bgPrefix: "secondary",
    },
    {
      title: "Simple Projects",
      role: "2021 - 2022",
      bullets: [
        "Built Simple Projects Such As Tik-Tac-Toe, Number Guessing Game etc...",
        "I Was Really Into The Developments Then",
      ],
      color: "primary",
      colorHex: "rgba(82,242,245,0.6)",
      bgPrefix: "primary",
    },
    {
      title: "A Student Programmer",
      role: "2022 - Present",
      bullets: [
        "Won A Programming Competetion And Got Chance To Compete In National Level",
        "And Also Started Buuilding Own Projects OwO",
        "I Still Learning Y'all 🕊️🕊️",
      ],
      color: "primary",
      colorHex: "rgba(82,242,245,0.6)",
      bgPrefix: "primary",
    },
  ];

  var PROJECTS = [
    {
      name: "WAuther",
      desc: "Couldn't Find Totp App For Linux, So I Built It My Self",
      stack: ["Rust", "Vanilla JS", "Tauri", "TOTP Auth APP"],
      link: "https://github.com/AstroJr0/wauther",
      icon: "lock",
      color: "primary",
      colorHex: "rgba(82,242,245,0.15)",
    },
    {
      name: "WAFFLE",
      desc: "A Simple Local Proxy To Block Sites. Pst.. Its CLI ONLY!",
      stack: ["Python", "Site Blocker", "Proxy"],
      link: "https://github.com/AstroJr0/waffle",
      icon: "filter_alt",
      color: "secondary",
      colorHex: "rgba(178,135,254,0.15)",
    },
    {
      name: "Matha-Lib",
      desc: "I Was Bored And Tried To Write Simple Functions Like Integral, Factorial etc.. So I Made A Library Out Of It!",
      stack: ["Python", "C [ UNDER CONSTRUCTION ]", "NumPy", "Scipy"],
      link: "https://github.com/AstroJr0/matha-lib",
      icon: "functions",
      color: "primary",
      colorHex: "rgba(82,242,245,0.15)",
      spanClasses: "md:col-span-2 lg:col-span-1 lg:translate-y-16",
    },
  ];

  var SKILLS = [
    {
      name: "C++",
      icon: "code",
      color: "#52f2f5",
      tagline: "int* p = nullptr; *p = 69;",
      level: 75,
      tags: ["Performance", "Systems", "STL"],
    },
    {
      name: "C",
      icon: "memory",
      color: "#52f2f5",
      tagline: "while(1) { fork(); }",
      level: 80,
      tags: ["Kernel", "Pointers"],
    },
    {
      name: "TypeScript",
      icon: "data_object",
      color: "#52f2f5",
      tagline: "Any is a sin",
      level: 60,
      tags: ["Typed", "Frontend"],
    },
    {
      name: "JavaScript",
      icon: "javascript",
      color: "#52f2f5",
      tagline: "undefined is not a function",
      level: 85,
      tags: ["DOM", "Async", "ES6"],
    },
    {
      name: "Python",
      icon: "terminal",
      color: "#b287fe",
      tagline: "import peace",
      level: 90,
      tags: ["Data", "Scripting", "Automation"],
    },
  ];

  var ORBIT_ICONS = [
    {
      name: "C",
      icon: "./icons/c.svg",
      level: 1,
      speed: 0.7,
      value: 80,
    },
    {
      name: "C++",
      icon: "./icons/cpp.svg",
      level: 1,
      speed: 1.2,
      value: 75,
    },
    {
      name: "TypeScript",
      icon: "./icons/ts.svg",
      level: 2,
      speed: 1.1,
      value: 60,
    },
    {
      name: "JavaScript",
      icon: "./icons/js.svg",
      level: 3,
      speed: 0.9,
      value: 85,
    },
    {
      name: "Python",
      icon: "./icons/python.svg",
      level: 3,
      speed: 2.8,
      value: 90,
    },
    {
      name: "NumPy",
      icon: "./icons/numpy.svg",
      level: 2,
      speed: 0.5,
      value: 70,
    },
    { name: "Bun", icon: "./icons/bun.svg", level: 3, speed: 0.3, value: 50 },
    {
      name: "Tauri",
      icon: "./icons/tauri.svg",
      level: 3,
      speed: 0.4,
      value: 65,
    },
  ];

  function renderTimeline() {
    var container = document.getElementById("timelineContainer");
    if (!container) return;

    var html =
      '<div class="absolute left-0 top-2 bottom-0 w-px bg-outline-variant/30"></div>';
    TIMELINE.forEach(function (item) {
      var bulletsHtml = "";
      item.bullets.forEach(function (b) {
        bulletsHtml +=
          '<li class="flex items-start"><span class="material-symbols-outlined text-' +
          item.color +
          ' text-sm mr-3 mt-1" style="font-variation-settings: \'FILL\' 1;">arrow_right</span><span>' +
          escapeHtml(b) +
          "</span></li>";
      });

      html +=
        '<div class="relative pl-12 mb-[48px] group">' +
        '<div class="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-' +
        item.color +
        " shadow-[0_0_10px_" +
        item.colorHex +
        ']"></div>' +
        '<div class="bg-surface-container-low rounded-xl p-6 md:p-8 hover:bg-surface-container-highest transition-colors duration-500 relative overflow-hidden">' +
        '<div class="absolute top-0 right-0 w-32 h-32 bg-' +
        item.bgPrefix +
        '/5 rounded-bl-full blur-xl"></div>' +
        '<div class="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">' +
        '<h3 class="text-2xl font-headline font-bold text-tertiary mb-2 md:mb-0">' +
        escapeHtml(item.title) +
        "</h3>" +
        '<span class="font-body text-sm text-' +
        item.color +
        ' tracking-wider uppercase font-medium">' +
        escapeHtml(item.role) +
        "</span>" +
        "</div>" +
        '<ul class="space-y-3 text-on-surface font-body">' +
        bulletsHtml +
        "</ul>" +
        "</div>" +
        "</div>";
    });

    container.innerHTML = html;
  }

  function renderProjects() {
    var container = document.getElementById("projectsContainer");
    if (!container) return;

    var html = "";
    PROJECTS.forEach(function (proj, i) {
      var tagsHtml = "";
      proj.stack.forEach(function (tech) {
        tagsHtml +=
          '<span class="px-3 py-1 bg-surface-variant rounded-full text-xs font-label text-on-surface-variant bg-glass tracking-wide">' +
          escapeHtml(tech) +
          "</span>";
      });

      var spanClass = proj.spanClasses ? " " + proj.spanClasses : "";

      html +=
        '<article class="group relative flex flex-col bg-surface-container-low rounded-xl p-8 hover:scale-[1.02] hover:bg-surface-container-highest transition-all duration-500 overflow-hidden outline outline-1 outline-outline-variant/15' +
        spanClass +
        '">' +
        '<div class="absolute -top-12 -right-12 w-32 h-32 bg-' +
        proj.color +
        "/10 rounded-full blur-2xl group-hover:bg-" +
        proj.color +
        '/20 transition-all duration-500"></div>' +
        '<div class="flex-grow flex flex-col gap-6 relative z-10">' +
        '<div class="flex justify-between items-start">' +
        '<div class="w-12 h-12 rounded-lg bg-surface flex items-center justify-center outline outline-1 outline-outline-variant/20 group-hover:shadow-[0_0_15px_' +
        proj.colorHex +
        '] transition-all">' +
        '<span class="material-symbols-outlined text-' +
        proj.color +
        ' text-2xl">' +
        proj.icon +
        "</span>" +
        "</div>" +
        '<div class="flex flex-wrap gap-2 justify-end">' +
        tagsHtml +
        "</div>" +
        "</div>" +
        "<div>" +
        '<h2 class="text-2xl font-headline font-bold text-tertiary mb-3 group-hover:text-tertiary-dim transition-colors">' +
        escapeHtml(proj.name) +
        "</h2>" +
        '<p class="text-on-surface-variant text-sm leading-relaxed font-body">' +
        escapeHtml(proj.desc) +
        "</p>" +
        "</div>" +
        "</div>" +
        '<div class="mt-8 pt-6 border-t border-surface-variant relative z-10">' +
        '<a class="inline-flex items-center gap-2 text-' +
        proj.color +
        " font-medium text-sm hover:text-" +
        proj.color +
        '-dim transition-colors group/link" href="' +
        escapeAttr(proj.link) +
        '" target="_blank" rel="noopener">' +
        "View Project" +
        '<span class="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">arrow_forward</span>' +
        "</a>" +
        "</div>" +
        "</article>";
    });

    container.innerHTML = html;
  }

  function renderSkills() {
    var container = document.getElementById("skillsContainer");
    if (!container) return;

    var html = "";
    SKILLS.forEach(function (skill) {
      var tagsHtml = "";
      if (skill.tags && skill.tags.length) {
        tagsHtml = '<div class="flex flex-wrap gap-1 mt-2">';
        skill.tags.forEach(function (tag) {
          tagsHtml +=
            '<span class="px-2 py-0.5 bg-tertiary-container/50 rounded text-[10px] font-label text-tertiary">' +
            escapeHtml(tag) +
            "</span>";
        });
        tagsHtml += "</div>";
      }

      html +=
        '<div class="bg-surface-container-low p-8 rounded-xl transition-all duration-500 hover:bg-surface-container-highest relative overflow-hidden group">' +
        '<div class="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl group-hover:opacity-25 transition-opacity" style="background: ' +
        skill.color +
        '; opacity: 0.15;"></div>' +
        '<div class="flex justify-between items-end mb-6 relative z-10">' +
        "<div>" +
        '<h2 class="font-headline text-2xl text-tertiary mb-1">' +
        escapeHtml(skill.name) +
        "</h2>" +
        '<span class="inline-block px-3 py-1 bg-surface-variant rounded-full text-secondary font-label text-xs tracking-wide">' +
        escapeHtml(skill.tagline) +
        "</span>" +
        tagsHtml +
        "</div>" +
        '<span class="material-symbols-outlined text-4xl text-on-surface-variant opacity-50">' +
        skill.icon +
        "</span>" +
        "</div>" +
        '<div class="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden relative z-10">' +
        '<div class="h-full rounded-r-full progress-glow" style="width: ' +
        skill.level +
        "%; background: " +
        skill.color +
        "; box-shadow: 0 0 10px " +
        skill.color +
        ';"></div>' +
        "</div>" +
        "</div>";
    });

    container.innerHTML = html;
  }

  var orbitAnimationId = null;
  var orbitElements = [];

  function renderOrbitIcons() {
    var container = document.querySelector(".orbit-system");
    if (!container) return;

    container
      .querySelectorAll(".orbit-ring, .orbit-icon-wrapper")
      .forEach((el) => el.remove());
    if (orbitAnimationId) cancelAnimationFrame(orbitAnimationId);
    orbitElements = [];

    var baseRadius = 120;
    var levelGap = 35;
    var baseAngSpeed = (2 * Math.PI) / 20;

    var levels = {};
    ORBIT_ICONS.forEach(function (item) {
      if (!levels[item.level]) levels[item.level] = [];
      levels[item.level].push(item);
    });

    Object.keys(levels)
      .sort()
      .forEach(function (level) {
        var radius = baseRadius + (level - 1) * levelGap;
        var icons = levels[level];
        var count = icons.length;
        var angSpeed = baseAngSpeed / (1 + (level - 1) * 0.3);

        var speedMultiplier =
          icons.length > 0 && icons[0].speed ? icons[0].speed : 1;
        angSpeed *= speedMultiplier;

        var ring = document.createElement("div");
        ring.className = "orbit-ring";
        ring.style.width = radius * 2 + "px";
        ring.style.height = radius * 2 + "px";

        container.appendChild(ring);

        icons.forEach(function (iconData, index) {
          var angle = index * (360 / count);
          var iconWrapper = document.createElement("div");
          iconWrapper.className = "orbit-icon-wrapper";
          iconWrapper.style.position = "absolute";
          iconWrapper.style.top = "50%";
          iconWrapper.style.left = "50%";
          iconWrapper.style.width = "0";
          iconWrapper.style.height = "0";

          var iconElem = document.createElement("div");
          iconElem.className = "orbit-icon orbit-icon-js";
          iconElem.title = iconData.name;
          iconElem.style.width = "44px";
          iconElem.style.height = "44px";
          iconElem.innerHTML =
            '<img src="' +
            escapeAttr(iconData.icon) +
            '" alt="' +
            escapeHtml(iconData.name) +
            '" />';

          iconWrapper.appendChild(iconElem);
          container.appendChild(iconWrapper);

          orbitElements.push({
            wrapper: iconWrapper,
            icon: iconElem,
            radius: radius,
            angle: (angle * Math.PI) / 180,
            angSpeed: angSpeed,
            ring: ring,
          });
        });
      });

    function animate(timestamp) {
      orbitElements.forEach(function (item) {
        item.angle += item.angSpeed * 0.016;
        if (item.angle > Math.PI * 2) item.angle -= Math.PI * 2;

        var x = item.radius * Math.cos(item.angle);
        var y = item.radius * Math.sin(item.angle);

        item.wrapper.style.transform = "translate(" + x + "px, " + y + "px)";

        item.icon.style.transform = "translate(-50%, -50%) rotate(0deg)";
      });

      orbitAnimationId = requestAnimationFrame(animate);
    }

    orbitAnimationId = requestAnimationFrame(animate);
  }

  function escapeAttr(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    renderTimeline();
    renderProjects();
    renderSkills();
    renderOrbitIcons();
    initCosmicParticles();
    initScrollAnimations();
    initLenis();
    initPfpRotation();
  }

  function initLenis() {
    if (typeof Lenis !== "undefined") {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          lenis.scrollTo(this.getAttribute("href"));
        });
      });
    } else {
      document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener("click", function (e) {
          var targetId = this.getAttribute("href");
          if (targetId === "#") return;
          var target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      });
    }
  }

  function initCosmicParticles() {
    var container = document.getElementById("cosmicParticles");
    if (!container) return;

    var colors = [
      "rgba(167, 139, 250, 0.5)",
      "rgba(77, 208, 184, 0.4)",
      "rgba(96, 165, 250, 0.4)",
      "rgba(255, 255, 255, 1)",
      "rgba(228, 28, 28, 0.76)",
      "rgba(194, 20, 200, 0.74)",
      "rgba(245, 197, 66, 0.3)",
    ];

    for (var i = 0; i < 20; i++) {
      spawnParticle(container, colors, true);
    }

    setInterval(function () {
      if (container.children.length < 30) {
        spawnParticle(container, colors, false);
      }
    }, 1800);
  }

  function spawnParticle(container, colors, randomStart) {
    var particle = document.createElement("div");
    particle.classList.add("cosmic-particle");

    var size = Math.random() * 4 + 2;
    var x = Math.random() * 100;
    var duration = Math.random() * 15 + 10;
    var delay = randomStart ? Math.random() * -duration : 0;
    var color = colors[Math.floor(Math.random() * colors.length)];

    particle.style.cssText =
      "width:" +
      size +
      "px;" +
      "height:" +
      size +
      "px;" +
      "left:" +
      x +
      "%;" +
      "bottom:" +
      (randomStart ? Math.random() * 100 : -5) +
      "%;" +
      "background:" +
      color +
      ";" +
      "box-shadow:0 0 " +
      size * 3 +
      "px " +
      color +
      ";" +
      "animation-duration:" +
      duration +
      "s;" +
      "animation-delay:" +
      delay +
      "s;";

    if (!randomStart) {
      particle.addEventListener("animationend", function () {
        particle.remove();
      });
    }
    container.appendChild(particle);
  }

  function initScrollAnimations() {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );

    document.querySelectorAll(".reveal").forEach(function (item) {
      revealObserver.observe(item);
    });
  }

  function initPfpRotation() {
    var pfp = document.querySelector(".rotating-pfp");
    if (!pfp) return;
    var angle = 0;
    var isHovered = false;
    var animationFrame;

    pfp.addEventListener("mouseenter", function () {
      isHovered = true;
      pfp.style.transition = "transform 0.5s cubic-bezier(0.2, 0, 0, 1)";
      pfp.style.transform = "rotate(0deg)";
    });

    pfp.addEventListener("mouseleave", function () {
      isHovered = false;
      pfp.style.transition = "none";
      angle = 0;
    });

    function rotate() {
      if (!isHovered) {
        const speed = parseFloat(pfp.dataset.rotationSpeed) || 0.15;
        angle += speed;
        if (angle >= 360) angle -= 360;
        pfp.style.transform = "rotate(" + angle + "deg)";
      }
      animationFrame = requestAnimationFrame(rotate);
    }
    rotate();
  }
})();
