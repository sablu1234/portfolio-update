const services = [
    { title: "WordPress Website Development", description: "Custom business websites built with WordPress." },
    { title: "Elementor Pro Development", description: "Pixel-perfect Elementor websites with advanced customization." },
    { title: "WooCommerce Development", description: "Online stores optimized for sales and conversions." },
    { title: "Website Redesign", description: "Transform outdated websites into modern experiences." },
    { title: "Landing Page Design", description: "High-converting landing pages for marketing campaigns." },
    { title: "Speed Optimization", description: "Improve Core Web Vitals and loading performance." },
    { title: "SEO Optimization", description: "On-page SEO and technical optimization." },
    { title: "Website Maintenance", description: "Continuous support and website management." }
];

const skills = [
    "WordPress", "Elementor Pro", "WooCommerce", "HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap", "Responsive Design", "UI/UX Design", "Website Optimization", "Technical SEO", "Figma to WordPress", "PSD to WordPress", "Custom WordPress Development", "WordPress Migration", "Website Security", "Speed Optimization", "API Integration", "Advanced Custom Fields (ACF)", "JetEngine", "JetSmartFilters", "Crocoblock", "Google Analytics", "Google Search Console"
];

const projects = [
    {
        title: "Retaining Wall Construction Website",
        category: "Business Website",
        technology: ["WordPress", "Elementor Pro"],
        url: "https://example.com/retaining-wall",
        image: "https://placehold.co/900x620/111827/FF6A00?text=Retaining+Wall+Website"
    },
    {
        title: "Book Recommendation Platform",
        category: "Dynamic Website",
        technology: ["WordPress", "JetSmartFilters", "Elementor"],
        url: "https://example.com/book-platform",
        image: "https://placehold.co/900x620/0F172A/FF6A00?text=Book+Recommendation+Platform"
    },
    {
        title: "FlexyTask Service Marketplace",
        category: "Marketplace Platform",
        technology: ["WordPress", "WooCommerce", "Stripe"],
        url: "https://example.com/flexytask",
        image: "https://placehold.co/900x620/111111/FF6A00?text=Service+Marketplace"
    },
    {
        title: "Restaurant Website",
        category: "Food & Beverage",
        technology: ["WordPress", "WooCommerce"],
        url: "https://example.com/restaurant",
        image: "https://placehold.co/900x620/1C1917/FF6A00?text=Restaurant+Website"
    },
    {
        title: "Medical & Counseling Website",
        category: "Healthcare",
        technology: ["WordPress", "Elementor Pro"],
        url: "https://example.com/medical-counseling",
        image: "https://placehold.co/900x620/082F49/FF6A00?text=Healthcare+Website"
    },
    {
        title: "Peptide Research Product Website",
        category: "E-commerce",
        technology: ["WooCommerce", "WordPress"],
        url: "https://example.com/peptide-store",
        image: "https://placehold.co/900x620/172554/FF6A00?text=E-commerce+Website"
    },
    {
        title: "German Corporate Website",
        category: "Corporate",
        technology: ["WordPress", "Multilingual"],
        url: "https://example.com/corporate",
        image: "https://placehold.co/900x620/0C0A09/FF6A00?text=Corporate+Website"
    },
    {
        title: "Property Management Website",
        category: "Real Estate",
        technology: ["WordPress", "Custom Development"],
        url: "https://example.com/property-management",
        image: "https://placehold.co/900x620/132013/FF6A00?text=Real+Estate+Website"
    }
];

const processSteps = [
    "Discovery & Strategy",
    "Planning & Wireframing",
    "Design & Development",
    "Testing & Optimization",
    "Launch & Support"
];

const testimonials = [
    {
        name: "Sarah Mitchell",
        category: "Business Website",
        text: "Sablu created a premium WordPress site that immediately made our brand feel more professional. The layout, speed, and communication were excellent.",
        photo: "https://i.pravatar.cc/120?img=47"
    },
    {
        name: "Daniel Carter",
        category: "WooCommerce Store",
        text: "Our old store felt outdated. The new WooCommerce experience is faster, cleaner, and much easier for customers to use.",
        photo: "https://i.pravatar.cc/120?img=12"
    },
    {
        name: "Emma Robinson",
        category: "Landing Page",
        text: "The landing page was designed with conversion in mind. Strong CTA flow, clean sections, and a high-end look that matched our campaign perfectly.",
        photo: "https://i.pravatar.cc/120?img=32"
    }
];

const servicesGrid = document.getElementById("servicesGrid");
servicesGrid.innerHTML = services.map((service, index) => `
    <article class="service-card glass reveal">
        <div class="service-index">${String(index + 1).padStart(2, "0")}</div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    </article>
    `).join("");

const skillsCloud = document.getElementById("skillsCloud");
skillsCloud.innerHTML = skills.map(skill => `<span class="skill-chip">${skill}</span>`).join("");

const categories = ["All", ...new Set(projects.map(project => project.category))];
const portfolioFilters = document.getElementById("portfolioFilters");
const portfolioGrid = document.getElementById("portfolioGrid");

portfolioFilters.innerHTML = categories.map((category, index) => `
    <button class="filter-btn ${index === 0 ? " active" : ""}" data-filter="${category}">${category}</button>
`).join("");

function renderProjects(filter = "All") {
    portfolioGrid.innerHTML = projects.map((project) => {
        const hidden = filter !== "All" && project.category !== filter;
        return `
    < article class="project-card glass reveal ${hidden ? "hide" : ""}" data - category="${project.category}" >
            <div class="project-thumb">
              <img class="project-image" src="${project.image}" alt="${project.title} project screenshot" loading="lazy" />
              <div class="project-image-overlay"></div>
            </div>
            <div class="project-body">
              <div class="project-category">${project.category}</div>
              <h3>${project.title}</h3>
              <div class="tags">${project.technology.map(tech => `<span class="tag">${tech}</span>`).join("")}</div>
              <div class="project-actions">
                <a class="project-link primary" href="${project.url}" target="_blank" rel="noopener">View Live URL →</a>
                <a class="project-link" href="${project.image}" target="_blank" rel="noopener">View Image</a>
              </div>
            </div>
          </article >
    `;
    }).join("");
    observeReveals();
}

renderProjects();

portfolioFilters.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
});

const testimonialGrid = document.getElementById("testimonialGrid");
testimonialGrid.innerHTML = testimonials.map(item => `
    < article class="testimonial-card glass reveal" >
        <div class="stars">★★★★★</div>
        <p>“${item.text}”</p>
        <div class="client-row">
          <img class="client-photo" src="${item.photo}" alt="${item.name} client photo" loading="lazy" />
          <div><strong>${item.name}</strong><span>${item.category}</span></div>
        </div>
      </article >
    `).join("");

const processList = document.getElementById("processList");
const processDescriptions = [
    "Understand the business goals, target audience, required features, and conversion priorities.",
    "Map the structure, page flow, content hierarchy, and user journey before development starts.",
    "Build a premium responsive WordPress website with clean design, strong UX, and scalable functionality.",
    "Test responsiveness, speed, forms, SEO basics, browser compatibility, and user experience quality.",
    "Launch the website smoothly and provide continuous support, maintenance, and improvements."
];

processList.innerHTML = processSteps.map((step, index) => `
    < article class="process-item" >
        <div class="process-number">${index + 1}</div>
        <div class="process-content glass">
          <h3>${step}</h3>
          <p>${processDescriptions[index]}</p>
        </div>
      </article >
    `).join("");

const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("mh-theme");
if (savedTheme) root.setAttribute("data-theme", savedTheme);
themeToggle.textContent = root.getAttribute("data-theme") === "dark" ? "☾" : "☀";

themeToggle.addEventListener("click", () => {
    const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", nextTheme);
    localStorage.setItem("mh-theme", nextTheme);
    themeToggle.textContent = nextTheme === "dark" ? "☾" : "☀";
});

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") navLinks.classList.remove("open");
});

function observeReveals() {
    const reveals = document.querySelectorAll(".reveal:not(.visible)");
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    reveals.forEach(el => revealObserver.observe(el));
}
observeReveals();

const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const counter = entry.target;
        const target = Number(counter.dataset.target);
        let current = 0;
        const increment = Math.max(1, Math.ceil(target / 80));
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(interval);
            } else {
                counter.textContent = current;
            }
        }, 18);
        observer.unobserve(counter);
    });
}, { threshold: 0.55 });

document.querySelectorAll(".counter").forEach(counter => counterObserver.observe(counter));

const progressObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.width = entry.target.dataset.width;
        observer.unobserve(entry.target);
    });
}, { threshold: 0.4 });

document.querySelectorAll(".progress-fill").forEach(bar => progressObserver.observe(bar));

const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");
const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const activeId = entry.target.id;
        navAnchors.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === `#${activeId} `);
        });
    });
}, { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 });
sections.forEach(section => activeObserver.observe(section));

const referenceImageInput = document.getElementById("referenceImage");
const fileHelp = document.getElementById("fileHelp");

referenceImageInput.addEventListener("change", () => {
    const file = referenceImageInput.files[0];
    fileHelp.textContent = file ? `Selected image: ${file.name} ` : "Optional: upload a screenshot, design reference, logo, or website inspiration image.";
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    document.getElementById("formNote").textContent = "Thanks! Your project URL and reference image field are ready. Connect this form with WordPress, Elementor Forms, Fluent Forms, WPForms, or a backend to receive submissions.";
    event.currentTarget.reset();
    fileHelp.textContent = "Optional: upload a screenshot, design reference, logo, or website inspiration image.";
});

document.getElementById("year").textContent = new Date().getFullYear();
