console.log("javascript is connected");

let year = new Date().getFullYear();
document.querySelector(".site-footer p").innerHTML =
  `&copy; ${year} Nisha Roy. All rights reserved`;

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}
let hero = document.querySelector(".hero-section h1");
if (hero) {
  hero.textContent = `${getGreeting()}, I'm Nisha Roy👋`;
}

let menuToggle = document.querySelector(".menu-toggle");
let navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", navLinks.classList.contains("open"));
});

let header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

let sections = document.querySelectorAll("section[id]");
let navitems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navitems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") == `#${current}`) {
      link.classList.add("active");
    }
  });
});

const projects = [
  { id: 1, name: "Weather App", category: "web", tech: ["React", "API"] },
  { id: 2, name: "Todo App", category: "web", tech: ["JavaScript"] },
  { id: 3, name: "Portfolio", category: "design", tech: ["HTML", "CSS"] },
  { id: 4, name: "Calculator", category: "web", tech: ["JavaScript"] },
];

function renderProjects(filter = "all") {
  const grid = document.querySelector(".project-grid");
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  grid.innerHTML = filtered
    .map(
      (project) => `
 <article class="project-card">
 <div class="project-card-body">
 <h3>${project.name}</h3>
 <div class="project-tags">
 ${project.tech.map((t) => `<span class="tag">${t}</span>`).join("")}
 </div>
 <a href="#" class="btn btn-primary">View Project</a>
 </div>
 </article>
 `,
    )
    .join("");
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

renderProjects();

let form = document.querySelector("#contact-form");
function showError(input, message) {
  let group = input.closest(".form-group");
  let existing = group.querySelector(".error-msg");
  if (!existing) {
    let errEl = document.createElement("span");
    errEl.className = "error-msg";
    errEl.textContent = message;
    group.appendChild(errEl);
  }
  input.classList.add("error");
}
function clearError() {
  document.querySelectorAll(".error-msg").forEach((e) => e.remove());
  document
    .querySelectorAll(".error")
    .forEach((e) => e.classList.remove("error"));
}
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearError();

  let name = form.querySelector("#name");
  let email = form.querySelector("#email");
  let message = form.querySelector("#message");

  let valid = true;

  if (!name.value.trim()) {
    showError(name, "Name is required");
    valid = false;
  }
  if (!email.value.includes("@")) {
    showError(email, "enter a valid email");
  }

  if (!message.value.trim().length < 10) {
    showError(message, "message must be at least 10 characters");
  }

  if (valid) {
    let btn = form.querySelector('button[type="submit"]');
    btn.textContent = "sending...";
    btn.disabled = "true";

    await new Promise((resolve) => setTimeout(resolve, 1500));
    btn.textContent = "✅Message sent";
    form.reset();
    setTimeout(() => {
      btn.textContent = "send Message";
      btn.disabled = false;
    }, 3000);
  }
});

let themebtn = document.querySelector(".theme-toggle");
function updatethemeicon(theme) {
  themebtn.textContent = theme === "dark" ? "🌙" : "☀️";
}

if (themebtn) {
  let savedtheme = localStorage.getItem("theme") || "light";
  document.body.dataset.theme = savedtheme;
  updatethemeicon(savedtheme);
  themebtn.addEventListener("click", () => {
    let nexttheme = document.body.dataset.theme === "light" ? "dark" : "light";

    document.body.dataset.theme = nexttheme;
    localStorage.setItem("theme", nexttheme);
    updatethemeicon(nexttheme);
  });
}